'use client'

import { Box, Container, Typography, Grid, Button } from '@mui/material'
import Link from 'next/link'
import SectionSeparator from '@/components/SectionSeparator'

export default function FloorplanList() {
    return (
        <Box sx={{ bgcolor: '#0B1C33', color: '#fff', py: 10 }}>
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography variant="body1" sx={{ mb: 4, fontSize: '1.2rem', fontWeight: 300 }}>
                        Select a series below to explore detailed layouts, room configurations and dimensions for each home.
                    </Typography>
                </Box>

                {/* Series 1 */}
                <Grid container spacing={6} alignItems="center" sx={{ mb: 10 }}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box
                            component="img"
                            src="/imgs/01.jpg"
                            alt="Balcony Light Living Series"
                            sx={{ width: '100%', borderRadius: 2, height: 'auto' }}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography variant="h4" sx={{ fontFamily: 'serif', mb: 2 }}>
                            Balcony Light Living Series <br /> (Lot 1–7)
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, color: '#ccc' }}>
                            A light and efficient three-bedroom layout featuring generous balconies and multi-aspect natural light — ideal for first homebuyers and investors.
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Button
                                component={Link}
                                href="#"
                                sx={{
                                    color: '#fff',
                                    fontSize: '1.2rem',
                                    fontFamily: 'serif',
                                    textTransform: 'none',
                                    borderBottom: '1px solid #fff',
                                    borderRadius: 0,
                                    px: 0,
                                    '&:hover': { bgcolor: 'transparent', opacity: 0.8 }
                                }}
                            >
                                Learn More
                            </Button>
                        </Box>
                    </Grid>
                </Grid>

                <Box sx={{ mb: 10 }}>
                    <SectionSeparator />
                </Box>

                {/* Series 2 */}
                <Grid container spacing={6} alignItems="center">
                    <Grid size={{ xs: 12, md: 6 }} sx={{ order: { xs: 2, md: 1 } }}>
                        <Typography variant="h4" sx={{ fontFamily: 'serif', mb: 2 }}>
                            Serene Master Living Series <br /> (Lot 8–13)
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, color: '#ccc' }}>
                            A spacious four-bedroom layout with a private master suite and well-defined circulation, offering long-term comfort for growing families.
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                            <Button
                                component={Link}
                                href="#"
                                sx={{
                                    color: '#fff',
                                    fontSize: '1.2rem',
                                    fontFamily: 'serif',
                                    textTransform: 'none',
                                    borderBottom: '1px solid #fff',
                                    borderRadius: 0,
                                    px: 0,
                                    '&:hover': { bgcolor: 'transparent', opacity: 0.8 }
                                }}
                            >
                                Learn More
                            </Button>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }} sx={{ order: { xs: 1, md: 2 } }}>
                        <Box
                            component="img"
                            src="/imgs/02.jpg"
                            alt="Serene Master Living Series"
                            sx={{ width: '100%', borderRadius: 2, height: 'auto' }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
