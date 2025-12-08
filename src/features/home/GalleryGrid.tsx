'use client'

import { Box, Container, Grid } from '@mui/material'
import Image from 'next/image'

export default function GalleryGrid() {
    return (
        <Box sx={{ bgcolor: '#435663', py: 2 }}>
            <Container maxWidth="xl">
                <Grid container spacing={2}>
                    {/* Row 1 */}
                    {/* Aerial View - Large Left */}
                    <Grid size={{ xs: 12, md: 8 }} sx={{ minHeight: { xs: 300, md: 600 } }}>
                        <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
                            <Image
                                src="/imgs/07.jpg"
                                alt="Aerial View"
                                fill
                                style={{
                                    objectFit: 'cover',
                                    borderRadius: '4px'
                                }}
                                sizes="(max-width: 768px) 100vw, 80vw"
                            />
                        </Box>
                    </Grid>

                    {/* Right Column - Living & Street */}
                    <Grid size={{ xs: 12, md: 4 }} sx={{ minHeight: { xs: 600, md: 600 } }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, height: '100%' }}>
                            <Box sx={{ width: '100%', flex: 1, position: 'relative' }}>
                                <Image
                                    src="/imgs/04.jpg"
                                    alt="Living Room"
                                    fill
                                    style={{
                                        objectFit: 'cover',
                                        borderRadius: '4px'
                                    }}
                                    sizes="(max-width: 768px) 100vw, 40vw"
                                />
                            </Box>
                            <Box sx={{ width: '100%', flex: 1, position: 'relative' }}>
                                <Image
                                    src="/imgs/08.jpg"
                                    alt="Street View"
                                    fill
                                    style={{
                                        objectFit: 'cover',
                                        borderRadius: '4px'
                                    }}
                                    sizes="(max-width: 768px) 100vw, 40vw"
                                />
                            </Box>
                        </Box>
                    </Grid>

                    {/* Row 2 - Full Width Exterior */}
                    <Grid size={{ xs: 12 }} sx={{ minHeight: { xs: 300, md: 500 } }}>
                        <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
                            <Image
                                src="/imgs/06.jpg"
                                alt="Exterior"
                                fill
                                style={{
                                    objectFit: 'cover',
                                    borderRadius: '4px'
                                }}
                                sizes="100vw"
                            />
                        </Box>
                    </Grid>

                    {/* Row 3 - Bath & Bed */}
                    <Grid size={{ xs: 12, md: 6 }} sx={{ minHeight: { xs: 300, md: 500 } }}>
                        <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
                            <Image
                                src="/imgs/03.jpg"
                                alt="Bathroom"
                                fill
                                style={{
                                    objectFit: 'cover',
                                    borderRadius: '4px'
                                }}
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }} sx={{ minHeight: { xs: 300, md: 500 } }}>
                        <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
                            <Image
                                src="/imgs/02.jpg"
                                alt="Bedroom"
                                fill
                                style={{
                                    objectFit: 'cover',
                                    borderRadius: '4px'
                                }}
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </Box>
                    </Grid>

                    {/* Row 4 - Full Width Kitchen */}
                    <Grid size={{ xs: 12 }} sx={{ minHeight: { xs: 300, md: 600 } }}>
                        <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
                            <Image
                                src="/imgs/01.jpg"
                                alt="Kitchen"
                                fill
                                style={{
                                    objectFit: 'cover',
                                    borderRadius: '4px'
                                }}
                                sizes="100vw"
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
