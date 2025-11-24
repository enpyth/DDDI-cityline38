'use client'

import { Box, Container, Typography, Grid, Button } from '@mui/material'

export default function Floorplans() {
    return (
        <Box id="plans" sx={{ bgcolor: '#0B1C33', color: '#fff', py: 10, fontFamily: 'var(--font-gotu)' }}>
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography variant="h3" sx={{ fontFamily: 'var(--font-baskervville)', mb: 2 }}>
                        Floorplan Overview
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 300 }}>
                        A selection of two and three bedroom townhomes with generous open-plan living.
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box
                            sx={{
                                height: 360,
                                bgcolor: '#fff',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 1,
                                color: '#000',
                                backgroundImage: 'url(/imgs/02.jpg)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        />
                        <Typography variant="h5" sx={{ mt: 2, fontFamily: 'var(--font-baskervville)' }}>
                            Light Living Series
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.8 }}>
                            Dual-level homes oriented to maximise natural light and outlook.
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box
                            sx={{
                                height: 360,
                                bgcolor: '#fff',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 1,
                                color: '#000',
                                backgroundImage: 'url(/imgs/03.jpg)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        />
                        <Typography variant="h5" sx={{ mt: 2, fontFamily: 'var(--font-baskervville)' }}>
                            Balcony Living Series
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.8 }}>
                            Elevated layouts with generous balconies for outdoor entertaining.
                        </Typography>
                    </Grid>
                </Grid>

                <Box sx={{ textAlign: 'center', mt: 8 }}>
                    <Button variant="outlined" color="inherit" size="large">
                        View All Floorplans
                    </Button>
                </Box>
            </Container>
        </Box>
    )
}
