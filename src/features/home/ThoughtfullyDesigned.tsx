'use client'

import { Box, Container, Typography, Grid } from '@mui/material'

export default function ThoughtfullyDesigned() {
    return (
        <Box
            id="about"
            sx={{
                bgcolor: '#0B1C33',
                color: '#fff',
                py: 10,
            }}
        >
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography variant="h3" sx={{ fontFamily: 'serif', mb: 2, color: '#FCE6C8' }}>
                        A Thoughtfully Designed Living Layout
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{ fontWeight: 300, maxWidth: '780px', mx: 'auto', opacity: 0.9, color: '#FCE6C8' }}
                    >
                        Where urban convenience meets a calm and orderly neighbourhood.
                    </Typography>
                </Box>

                <Grid container spacing={6} justifyContent="center">
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Typography
                            variant="h6"
                            sx={{ textAlign: 'center', lineHeight: 1.8, mb: 3, color: '#FCE6C8' }}
                        >
                            The Cityline 38 features 13 three-storey townhouses arranged in a north–south configuration, each with its own double garage.
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{ textAlign: 'center', lineHeight: 1.8, mb: 3, color: '#FCE6C8' }}
                        >
                            A central internal driveway provides straightforward vehicle access to every residence, ensuring smooth entry and exit at all times.
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{ textAlign: 'center', lineHeight: 1.8, mb: 3, color: '#FCE6C8' }}
                        >
                            The master plan achieves a thoughtful balance of circulation, greenery and functional amenity—offering residents an orderly, comfortable living environment just moments from the city’s main corridor.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
