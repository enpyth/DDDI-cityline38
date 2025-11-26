'use client'

import { Box, Container, Grid } from '@mui/material'

export default function GalleryGrid() {
    return (
        <Box sx={{ bgcolor: '#435663', py: 2 }}>
            <Container maxWidth="xl">
                <Grid container spacing={2}>
                    {/* Row 1 */}
                    {/* Aerial View - Large Left */}
                    <Grid size={{ xs: 12, md: 8 }}>
                        <Box
                            component="img"
                            src="/imgs/07.jpg"
                            alt="Aerial View"
                            sx={{
                                width: '100%',
                                height: '100%',
                                minHeight: { xs: 300, md: 600 },
                                objectFit: 'cover',
                                borderRadius: 1
                            }}
                        />
                    </Grid>

                    {/* Right Column - Living & Street */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, height: '100%' }}>
                            <Box
                                component="img"
                                src="/imgs/04.jpg"
                                alt="Living Room"
                                sx={{
                                    width: '100%',
                                    flex: 1,
                                    height: { xs: 300, md: 'auto' },
                                    objectFit: 'cover',
                                    borderRadius: 1
                                }}
                            />
                            <Box
                                component="img"
                                src="/imgs/08.jpg"
                                alt="Street View"
                                sx={{
                                    width: '100%',
                                    flex: 1,
                                    height: { xs: 300, md: 'auto' },
                                    objectFit: 'cover',
                                    borderRadius: 1
                                }}
                            />
                        </Box>
                    </Grid>

                    {/* Row 2 - Full Width Exterior */}
                    <Grid size={{ xs: 12 }}>
                        <Box
                            component="img"
                            src="/imgs/06.jpg"
                            alt="Exterior"
                            sx={{
                                width: '100%',
                                height: { xs: 300, md: 500 },
                                objectFit: 'cover',
                                borderRadius: 1
                            }}
                        />
                    </Grid>

                    {/* Row 3 - Bath & Bed */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box
                            component="img"
                            src="/imgs/03.jpg"
                            alt="Bathroom"
                            sx={{
                                width: '100%',
                                height: { xs: 300, md: 500 },
                                objectFit: 'cover',
                                borderRadius: 1
                            }}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box
                            component="img"
                            src="/imgs/02.jpg"
                            alt="Bedroom"
                            sx={{
                                width: '100%',
                                height: { xs: 300, md: 500 },
                                objectFit: 'cover',
                                borderRadius: 1
                            }}
                        />
                    </Grid>

                    {/* Row 4 - Full Width Kitchen */}
                    <Grid size={{ xs: 12 }}>
                        <Box
                            component="img"
                            src="/imgs/01.jpg"
                            alt="Kitchen"
                            sx={{
                                width: '100%',
                                height: { xs: 300, md: 600 },
                                objectFit: 'cover',
                                borderRadius: 1
                            }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
