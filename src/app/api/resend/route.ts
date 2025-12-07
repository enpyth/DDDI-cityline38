import { NextResponse } from 'next/server'
import { z } from 'zod'
import { managerEmail } from '@/constants/config'
import { sendEnquiryEmail } from '@/lib/resend'

const enquirySchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  mobile: z.string().min(1),
  suburb: z.string().min(1),
  postcode: z.string().min(1),
  message: z.string().min(1),
  turnstileToken: z.string().min(1)
})

// Function to validate Turnstile token with Cloudflare
async function validateTurnstileToken(token: string): Promise<boolean> {
  if (!process.env.TURNSTILE_SECRET_KEY) {
    console.error('Turnstile secret key not configured')
    return false
  }

  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: token,
      }),
    })

    const data = await response.json()
    return data.success as boolean
  } catch (error) {
    console.error('Turnstile validation error:', error)
    return false
  }
}

export async function POST(request: Request) {
  try {
    const json = await request.json()
    const parsed = enquirySchema.safeParse(json)
    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 })
    }

    const payload = parsed.data

    // Validate Turnstile token
    const isTurnstileValid = await validateTurnstileToken(payload.turnstileToken)
    if (!isTurnstileValid) {
      return NextResponse.json({ error: 'Security check failed' }, { status: 401 })
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: 'Resend not configured' }, { status: 500 })
    }

    await sendEnquiryEmail(managerEmail, payload)

    return NextResponse.json({ ok: true })
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}


