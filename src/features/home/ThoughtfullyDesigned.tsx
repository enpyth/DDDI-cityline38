'use client'

import { Box, Container, Typography, Grid, useMediaQuery, useTheme } from '@mui/material'
import Image from 'next/image'

export default function ThoughtfullyDesigned() {
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down('sm'));

    if (isXs) {
        return (
            <Box
                id="about"
                sx={{
                    bgcolor: '#0B1C33',
                    color: '#FCE6C8',
                    pt: 6,
                    pb: 6,
                }}
            >
                <Container maxWidth="lg">
                    <Box sx={{ textAlign: 'center', mb: 8 }}>
                        <Typography variant="h3" sx={{ fontFamily: 'var(--font-baskervville)', mb: 2, color: '#FCE6C8' }}>
                            A Thoughtfully Balanced Living Layout
                        </Typography>
                        <Typography variant="h4" sx={{ mx: 'auto', opacity: 0.9, color: '#FCE6C8', fontFamily: 'var(--font-baskervville)' }}>
                            Where urban convenience meets a calm and orderly neighbourhood.
                        </Typography>
                    </Box>
                    {/* XS layout - only 3 paragraphs without image */}
                    <Box sx={{ textAlign: 'center', mx: 'auto', maxWidth: '60%' }}>
                        <Typography variant="h6" sx={{ lineHeight: 1.5, opacity: 0.9, fontFamily: 'var(--font-gotu)', mb: 4 }}>
                            Cityline 38 introduces a collection of 13 modern three-storey townhouses designed for comfort, convenience and everyday balance.
                        </Typography>
                        <Typography variant="h6" sx={{ lineHeight: 1.5, opacity: 0.9, fontFamily: 'var(--font-gotu)', mb: 4 }}>
                            Set along the Anzac Highway corridor, the project offers effortless access to the tram, local shops, parks and schools, while maintaining a calm, well-organised neighbourhood feel.
                        </Typography>
                        <Typography variant="h6" sx={{ lineHeight: 1.5, opacity: 0.9, fontFamily: 'var(--font-gotu)' }}>
                            Cityline 38 offers a choice of three- and four-bedroom layouts, each featuring a double garage, generous glazing and functional living zones arranged over three levels.
                        </Typography>
                    </Box>
                </Container>
            </Box>
        );
    }

    // MD layout - original design without xs config
    return (
        <Box
            id="about"
            sx={{
                bgcolor: '#0B1C33',
                color: '#fff',
                pt: 10,
                fontFamily: 'var(--font-baskervville)'
            }}
        >
            <Container maxWidth="lg">
                {/* First paragraph */}
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography variant="h3" sx={{ fontFamily: 'var(--font-baskervville)', mb: 2, color: '#FCE6C8', fontSize: '3rem' }}>
                        A Thoughtfully Balanced Living Layout
                    </Typography>
                    <Typography variant="h4" sx={{ mx: 'auto', opacity: 0.9, color: '#FCE6C8', fontSize: '2.125rem', fontFamily: 'var(--font-baskervville)' }}>
                        Where urban convenience meets a calm and orderly neighbourhood.
                    </Typography>
                </Box>

                {/* Second paragraph */}
                <Box sx={{ textAlign: 'left', mb: 8, mx: 'auto', maxWidth: '80%' }}>
                    <Typography variant="h4" sx={{ lineHeight: 1.5, opacity: 0.9, fontSize: '1.5rem', fontFamily: 'var(--font-gotu)' }}>
                        Cityline 38 introduces a collection of 13 modern three-storey townhouses designed for comfort, convenience and everyday balance.
                    </Typography>
                </Box>

                {/* Third paragraph */}
                <Box sx={{ textAlign: 'left', mb: 8, mx: 'auto', maxWidth: '80%' }}>
                    <Typography variant="h4" sx={{ lineHeight: 1.5, opacity: 0.9, fontSize: '1.5rem', fontFamily: 'var(--font-gotu)', maxWidth: '80%', mb: 0 }}>
                        Set along the Anzac Highway corridor, the project offers
                    </Typography>
                    <Typography variant="h4" sx={{ lineHeight: 1.5, opacity: 0.9, fontSize: '1.5rem', fontFamily: 'var(--font-gotu)', maxWidth: '70%', mb: 0 }}>
                        effortless access to the tram, local shops, parks
                    </Typography>
                    <Typography variant="h4" sx={{ lineHeight: 1.5, opacity: 0.9, fontSize: '1.5rem', fontFamily: 'var(--font-gotu)', maxWidth: '60%', mb: 0 }}>
                        and schools, while maintaining a calm,
                    </Typography>
                    <Typography variant="h4" sx={{ lineHeight: 1.5, opacity: 0.9, fontSize: '1.5rem', fontFamily: 'var(--font-gotu)', maxWidth: '50%', mb: 0 }}>
                        well-organised neighbourhood feel.
                    </Typography>
                </Box>

                {/* Fourth paragraph - same font as third paragraph, text left & image right */}
                <Box sx={{ mx: 'auto', maxWidth: '80%' }}>
                    <Grid container spacing={6} justifyContent="space-between" alignItems="flex-start">
                        <Grid size={{ md: 6 }}>
                            <Typography
                                variant="h4"
                                sx={{ opacity: 0.9, lineHeight: 1.5, color: '#fff', fontSize: '1.5rem', fontFamily: 'var(--font-gotu)' }}
                            >
                                Cityline 38 offers a choice of three- and four-bedroom layouts, each featuring a double garage, generous glazing and functional living zones arranged over three levels.
                            </Typography>
                        </Grid>
                        <Grid size={{ md: 6 }}>
                            <Box sx={{ position: 'relative', width: '120%', height: 'auto', aspectRatio: 1, transform: 'translateY(-23%)' }}>
                                <Image
                                    src="/imgs/MasterPlan.png"
                                    alt="Cityline 38 Master Plan"
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    priority
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

            </Container>
        </Box>
    )
}
