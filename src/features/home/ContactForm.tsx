'use client'

import { useState } from 'react'
import { Box, Container, Typography, TextField, Grid, Paper, Link } from '@mui/material'
import UnderlineButton from '@/components/utils/UnderlineButton'
import { toast } from 'sonner'

interface ContactFormProps {
    title?: string
    title2?: string
    subtitle?: string
    subtitle2?: string
}

export default function ContactForm({
    title = "Register your Interest",
    title2 = "",
    subtitle = "",
    subtitle2 = ""
}: ContactFormProps) {
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        suburb: '',
        postcode: '',
        message: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async () => {
        // Validate all required fields
        if (!formData.firstName.trim()) {
            toast.error('Please enter your first name')
            return
        }
        if (!formData.lastName.trim()) {
            toast.error('Please enter your last name')
            return
        }
        if (!formData.email.trim()) {
            toast.error('Please enter your email address')
            return
        }
        if (!formData.mobile.trim()) {
            toast.error('Please enter your mobile number')
            return
        }
        if (!formData.suburb.trim()) {
            toast.error('Please enter your suburb')
            return
        }
        if (!formData.postcode.trim()) {
            toast.error('Please enter your postcode')
            return
        }
        if (!formData.message.trim()) {
            toast.error('Please enter a message')
            return
        }

        setIsLoading(true)
        try {
            const response = await fetch('/api/resend', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })

            // Check if response is JSON
            const contentType = response.headers.get('content-type')
            if (!contentType || !contentType.includes('application/json')) {
                throw new Error('Server error: Invalid response format')
            }

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error || 'Failed to send enquiry')
            }

            toast.success('Thank you! Your enquiry has been sent successfully. We will contact you soon.')
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                mobile: '',
                suburb: '',
                postcode: '',
                message: ''
            })
        } catch (error) {
            console.error('Form submission error:', error)
            toast.error(error instanceof Error ? error.message : 'Failed to send enquiry. Please try again.')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Box id="register" sx={{ bgcolor: '#0B1C33', pb: 10, pt: { xs: 5, md: 10 }, position: 'relative', fontFamily: 'var(--font-gotu)' }}>
            <Container maxWidth="md">
                <Paper
                    elevation={3}
                    sx={{
                        bgcolor: '#fff',
                        color: '#000',
                        p: { xs: 4, md: 8 },
                        borderRadius: 6,
                        position: 'relative',
                        zIndex: 2
                    }}
                >
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="h4" sx={{ fontFamily: 'var(--font-baskervville)' }}>
                            {title}
                        </Typography>
                        <Typography variant="h4" sx={{ fontFamily: 'var(--font-baskervville)' }}>
                            {title2}
                        </Typography>
                    </Box>
                    <Box textAlign='left' sx={{ pl: { xs: 4, md: 10 }, pr: { xs: 4, md: 18 } }}>
                        <Typography variant="h6" sx={{ fontFamily: 'var(--font-baskervville)', mt: 4 }}>
                            {subtitle}
                        </Typography>
                        <Typography variant="h6" sx={{ fontFamily: 'var(--font-baskervville)', mb: 6 }}>
                            {subtitle2}
                        </Typography>
                    </Box>
                    <Box sx={{ bgcolor: 'rgba(252, 230, 200, 0.16)', p: { xs: 3, md: 6 }, borderRadius: 2 }}>
                        <Grid container spacing={4}>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <TextField
                                    fullWidth
                                    label="First Name"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    variant="standard"
                                    required
                                    InputLabelProps={{ shrink: true, sx: { fontWeight: 'bold', color: '#000' } }}
                                />
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <TextField
                                    fullWidth
                                    label="Last Name"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    variant="standard"
                                    required
                                    InputLabelProps={{ shrink: true, sx: { fontWeight: 'bold', color: '#000' } }}
                                />
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <TextField
                                    fullWidth
                                    label="Email Address"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    variant="standard"
                                    type="email"
                                    required
                                    InputLabelProps={{ shrink: true, sx: { fontWeight: 'bold', color: '#000' } }}
                                />
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <TextField
                                    fullWidth
                                    label="Mobile Number"
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    variant="standard"
                                    required
                                    InputLabelProps={{ shrink: true, sx: { fontWeight: 'bold', color: '#000' } }}
                                />
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <TextField
                                    fullWidth
                                    label="Suburb"
                                    name="suburb"
                                    value={formData.suburb}
                                    onChange={handleChange}
                                    variant="standard"
                                    required
                                    InputLabelProps={{ shrink: true, sx: { fontWeight: 'bold', color: '#000' } }}
                                />
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <TextField
                                    fullWidth
                                    label="Postcode"
                                    name="postcode"
                                    value={formData.postcode}
                                    onChange={handleChange}
                                    variant="standard"
                                    required
                                    InputLabelProps={{ shrink: true, sx: { fontWeight: 'bold', color: '#000' } }}
                                />
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <TextField
                                    fullWidth
                                    label="Any message for us?"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    variant="standard"
                                    multiline
                                    rows={4}
                                    required
                                    InputLabelProps={{ shrink: true, sx: { fontWeight: 'bold', color: '#000' } }}
                                />
                            </Grid>
                            <Grid size={{ xs: 12 }} sx={{ mt: 2, mb: 4, mr:2 }}>
                                <Typography variant="body2" sx={{ fontSize: '0.875rem', lineHeight: 1.6, color: '#333' }}>
                                    By providing your information, you consent to receiving email and SMS updates from our associated partners regarding upcoming releases and project updates. You may opt out of these communications at any time.<br />
                                    We may also customise your on-site experience based on your interactions with our website. For further details on how your personal information is handled, please review our <Link href="/terms" sx={{ color: '#000', textDecoration: 'underline' }}>Terms&Conditions</Link> and <Link href="/privacy" sx={{ color: '#000', textDecoration: 'underline' }}>Privacy Policy</Link>.
                                </Typography>
                            </Grid>
                            <Grid size={{ xs: 12 }} sx={{ textAlign: 'center', mt: 4 }}>
                                <UnderlineButton
                                    fontSize="2rem"
                                    onClick={handleSubmit}
                                    disabled={isLoading}
                                    sx={{
                                        color: '#000',
                                        px: 4,
                                        '&:hover': { bgcolor: 'transparent', opacity: 0.7 },
                                        '&:disabled': { opacity: 0.5 }
                                    }}
                                >
                                    {isLoading ? 'Sending...' : 'Register'}
                                </UnderlineButton>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
            </Container>
        </Box>
    )
}
