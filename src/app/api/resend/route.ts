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
  message: z.string().min(1)
})

export async function POST(request: Request) {
  try {
    const json = await request.json()
    const parsed = enquirySchema.safeParse(json)
    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 })
    }

    const payload = parsed.data

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


