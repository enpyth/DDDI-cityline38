'use client'

import { Box, Container, Typography, List, ListItem, ListItemIcon, ListItemText, Grid } from '@mui/material'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'

export default function Location() {
    const address = '38 Anzac Hwy, Everard Park SA 5035'
    const encodedAddress = encodeURIComponent(address)
    const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

    const advantages = [
        'Tram access nearby',
        'Approx. 10 minutes to CBD',
        'Close to schools, cafes, retail, and parks',
        'Well-established neighborhood',
        'Walkable access to amenities',
    ]

    // Use Google Maps Embed API if API key is available, otherwise use a static map
    const mapUrl = googleMapsApiKey
        ? `https://www.google.com/maps/embed/v1/place?key=${googleMapsApiKey}&q=${encodedAddress}&zoom=15`
        : `https://www.google.com/maps?q=${encodedAddress}&output=embed`

    return (
        <Box sx={{ bgcolor: '#0B1C33', color: '#fff', py: { xs: 6, md: 10 }, fontFamily: 'var(--font-gotu)' }}>
            <Container maxWidth="lg">
                <Typography
                    variant="h3"
                    sx={{
                        fontFamily: 'var(--font-baskervville)',
                        textAlign: 'center',
                        mb: { xs: 4, md: 6 },
                        color: '#FCE6C8',
                        fontSize: { xs: '2rem', md: '3rem' }
                    }}
                >
                    Lifestyle, Connected and Effortless
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        textAlign: 'center',
                        maxWidth: 800,
                        mx: 'auto',
                        mb: { xs: 4, md: 6 },
                        color: '#FCE6C8',
                        opacity: 0.8,
                        fontSize: { xs: '1rem', md: '1.25rem' },
                        fontFamily: 'var(--font-gotu)',
                    }}
                >
                    Enjoy the benefits of a well-established neighbourhood with walkable access to the tram, shops, cafés and schools — convenience built into everyday living.
                </Typography>
                <Grid container spacing={4} alignItems="center">
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, fontFamily: 'var(--font-gotu)' }}>
                            <Box>
                                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, color: '#FCE6C8', fontFamily: 'var(--font-baskervville)' }}>Education</Typography>
                                <Typography variant="body1">Adelaide High</Typography>
                                <Typography variant="body1">Plympton International College</Typography>
                                <Typography variant="body1">Sturt Street Community School</Typography>
                            </Box>

                            <Box>
                                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, color: '#FCE6C8', fontFamily: 'var(--font-baskervville)' }}>Transport</Typography>
                                <Typography variant="body1">Tram: Forestville (Stop 4) / Black Forest (Stop 5)</Typography>
                                <Typography variant="body1">Bus: Anzac Hwy (Stop 4)</Typography>
                                <Typography variant="body1">Anzac Highway</Typography>
                            </Box>

                            <Box>
                                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, color: '#FCE6C8', fontFamily: 'var(--font-baskervville)' }}>Retail & Leisure</Typography>
                                <Typography variant="body1">Kurralta Central</Typography>
                                <Typography variant="body1">Wayville Showground (Adelaide Showground)</Typography>
                                <Typography variant="body1">Goodwood Road (Shopping Precint)</Typography>
                            </Box>

                            <Box>
                                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, color: '#FCE6C8', fontFamily: 'var(--font-baskervville)' }}>Medical</Typography>
                                <Typography variant="body1">Ashford Hospital</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box
                            sx={{
                                height: { xs: 300, md: 500 },
                                borderRadius: 1,
                                overflow: 'hidden',
                                position: 'relative',
                            }}
                        >
                            <iframe
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                loading="lazy"
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                                src={mapUrl}
                                title="Cityline 38 Location Map"
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
