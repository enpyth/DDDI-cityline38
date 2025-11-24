'use client'

import { Box, Container, Typography, Grid } from '@mui/material'

export default function ThoughtfullyDesigned() {
    return (
        <Box
            id="about"
            sx={{
                bgcolor: '#0B1C33',
                color: '#fff',
                py: { xs: 6, md: 10 },
                fontFamily: 'var(--font-baskervville)'
            }}
        >
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 8 } }}>
                    <Typography variant="h3" sx={{ fontFamily: 'var(--font-baskervville)', mb: 2, color: '#FCE6C8', fontSize: { xs: '2rem', md: '3rem' } }}>
                        A Thoughtfully Designed Living Layout
                    </Typography>
                    <Typography
                        variant="h4"
                        sx={{ mx: 'auto', opacity: 0.9, color: '#FCE6C8', fontSize: { xs: '1.25rem', md: '2.125rem' }, fontFamily: 'var(--font-baskervville)' }}
                    >
                        Where urban convenience meets a calm and orderly neighbourhood.
                    </Typography>
                </Box>

                <Grid container spacing={6} justifyContent="center">
                    <Grid size={{ xs: 12, md: 8 }}>
                        <Typography
                            variant="h6"
                            sx={{ textAlign: 'center', lineHeight: 1.8, mb: 3, color: '#FCE6C8', fontSize: { xs: '1rem', md: '1.25rem' }, fontFamily: 'var(--font-baskervville)' }}
                        >
                            Perfectly positioned between the city and the coast, Cityline 38 introduces a collection of 13 modern three-storey townhouses designed for comfort, convenience and everyday balance.
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{ textAlign: 'center', lineHeight: 1.8, mb: 3, color: '#FCE6C8', fontSize: { xs: '1rem', md: '1.25rem' }, fontFamily: 'var(--font-baskervville)' }}
                        >
                            Set along the Anzac Highway corridor, the project offers effortless access to the tram, local shops, parks and schools, while maintaining a calm, well-organised neighbourhood feel.
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{ textAlign: 'center', lineHeight: 1.8, mb: 3, color: '#FCE6C8', fontSize: { xs: '1rem', md: '1.25rem' }, fontFamily: 'var(--font-baskervville)' }}
                        >
                            Across two thoughtfully planned series, the homes offer a choice of three- and four-bedroom layouts, each featuring a private double garage, generous glazing and functional living zones arranged over three levels.
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{ textAlign: 'center', lineHeight: 1.8, mb: 3, color: '#FCE6C8', fontSize: { xs: '1rem', md: '1.25rem' }, fontFamily: 'var(--font-baskervville)' }}
                        >
                            Whether you prefer the light, airy feel of the balcony-focused designs or the spacious comfort of a dedicated master suite, each residence is crafted for modern families seeking both practicality and long-term liveability.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
