'use client'

import { Box, Container, Typography, TextField, Button, Grid, Paper } from '@mui/material'

interface ContactFormProps {
    title?: string
    subtitle?: string
}

export default function ContactForm({
    title = "Register your Interest",
    subtitle = "Be the first to know about new releases and updates."
}: ContactFormProps) {
    return (
        <Box id="register" sx={{ bgcolor: '#0B1C33', pb: 10, pt: { xs: 5, md: 10 }, position: 'relative' }}>
            <Container maxWidth="md">
                <Paper
                    elevation={3}
                    sx={{
                        bgcolor: '#fff',
                        color: '#000',
                        p: { xs: 4, md: 8 },
                        borderRadius: 2,
                        position: 'relative',
                        zIndex: 2
                    }}
                >
                    <Typography variant="h4" sx={{ fontFamily: 'serif', textAlign: 'center', mb: 1 }}>
                        {title}
                    </Typography>
                    <Typography variant="h6" sx={{ fontFamily: 'serif', textAlign: 'center', mb: 6, fontWeight: 400 }}>
                        {subtitle}
                    </Typography>

                    <Grid container spacing={4}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <TextField
                                fullWidth
                                label="First Name"
                                variant="standard"
                                InputLabelProps={{ shrink: true, sx: { fontWeight: 'bold', color: '#000' } }}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <TextField
                                fullWidth
                                label="Last Name"
                                variant="standard"
                                InputLabelProps={{ shrink: true, sx: { fontWeight: 'bold', color: '#000' } }}
                            />
                        </Grid>
                        <Grid size={{ xs: 12 }}>
                            <TextField
                                fullWidth
                                label="Email Address"
                                variant="standard"
                                type="email"
                                InputLabelProps={{ shrink: true, sx: { fontWeight: 'bold', color: '#000' } }}
                            />
                        </Grid>
                        <Grid size={{ xs: 12 }}>
                            <TextField
                                fullWidth
                                label="Mobile Number"
                                variant="standard"
                                InputLabelProps={{ shrink: true, sx: { fontWeight: 'bold', color: '#000' } }}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <TextField
                                fullWidth
                                label="Suburb"
                                variant="standard"
                                InputLabelProps={{ shrink: true, sx: { fontWeight: 'bold', color: '#000' } }}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <TextField
                                fullWidth
                                label="Postcode"
                                variant="standard"
                                InputLabelProps={{ shrink: true, sx: { fontWeight: 'bold', color: '#000' } }}
                            />
                        </Grid>
                        <Grid size={{ xs: 12 }}>
                            <TextField
                                fullWidth
                                label="Any messege for us?"
                                variant="standard"
                                multiline
                                rows={4}
                                InputLabelProps={{ shrink: true, sx: { fontWeight: 'bold', color: '#000' } }}
                            />
                        </Grid>
                        <Grid size={{ xs: 12 }} sx={{ textAlign: 'center', mt: 4 }}>
                            <Button
                                variant="text"
                                size="large"
                                sx={{
                                    color: '#000',
                                    fontSize: '1.5rem',
                                    fontFamily: 'serif',
                                    textTransform: 'none',
                                    borderBottom: '1px solid #000',
                                    borderRadius: 0,
                                    px: 4,
                                    '&:hover': { bgcolor: 'transparent', opacity: 0.7 }
                                }}
                            >
                                Register
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </Box>
    )
}
