'use client'

import Link from 'next/link'
import { Box, Container, Typography, Grid, Button } from '@mui/material'

const galleryItems = [
    { src: '/imgs/04.jpg', description: 'Balcony Light Living' },
    { src: '/imgs/05.jpg', description: 'Series A' },
    { src: '/imgs/06.jpg', description: 'Series B' },
    { src: '/imgs/07.jpg', description: 'Courtyard Living / Series A' },
    { src: '/imgs/08.jpg', description: '...' },
]

export default function Gallery() {
    return (
        <Box id="gallery" sx={{ bgcolor: '#0B1C33', color: '#fff', py: { xs: 6, md: 10 }, fontFamily: 'var(--font-gotu)' }}>
            <Container maxWidth="lg">
                <Typography
                    variant="h3"
                    sx={{ fontFamily: 'var(--font-baskervville)', textAlign: 'center', mb: { xs: 4, md: 6 }, color: '#FCE6C8', fontSize: { xs: '2rem', md: '3rem' } }}
                >
                    Two Series. Designed for Two Lifestyles.
                </Typography>

                <Typography
                    variant="h5"
                    sx={{
                        textAlign: 'center',
                        mx: 'auto',
                        mb: { xs: 4, md: 6 },
                        opacity: 0.8,
                        color: '#FCE6C8',
                        fontSize: { xs: '1.25rem', md: '1.5rem' },
                        fontFamily: 'var(--font-Gotu)',
                    }}
                >
                    From light and efficient to spacious and serene — choose the layout that matches your lifestyle.
                </Typography>

                <Grid container spacing={2}>
                    {galleryItems.map((item, index) => (
                        <Grid key={index} size={{ xs: 12, sm: 6, md: index === 0 ? 12 : 4 }}>
                            <Box
                                sx={{
                                    position: 'relative',
                                    height: index === 0 ? { xs: 240, md: 320 } : 220,
                                    backgroundImage: `url(${item.src})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    borderRadius: 1,
                                    overflow: 'hidden',
                                    '&:hover .overlay': {
                                        opacity: 1,
                                    },
                                }}
                            >
                                <Box
                                    className="overlay"
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        bgcolor: 'rgba(0,0,0,0.6)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        opacity: 0,
                                        transition: 'opacity 0.3s ease',
                                    }}
                                >
                                    <Typography variant="h6" sx={{ color: '#FCE6C8', fontWeight: 300 }}>
                                        {item.description}
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>

                <Box sx={{ mt: { xs: 6, md: 8 }, textAlign: 'center' }}>
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 300,
                            maxWidth: '800px',
                            mx: 'auto',
                            mb: 4,
                            opacity: 0.9,
                            borderLeft: { xs: 'none', md: '2px solid #fff' },
                            textAlign: { xs: 'center', md: 'left' },
                            pl: { xs: 0, md: 4 },
                            fontSize: { xs: '1rem', md: '1.25rem' },
                            fontFamily: 'var(--font-Gotu)',
                        }}
                    >
                        A light and efficient three-bedroom layout featuring generous balconies and multi-aspect natural light — ideal for first homebuyers and investors.
                    </Typography>
                    <Button
                        variant="outlined"
                        component={Link}
                        href="/floorplans"
                        sx={{
                            color: '#fff',
                            borderColor: '#fff',
                            borderRadius: 0,
                            px: 4,
                            py: 1.5,
                            textTransform: 'none',
                            fontSize: '1rem',
                            fontFamily: 'var(--font-baskervville)',
                            '&:hover': {
                                borderColor: '#fff',
                                bgcolor: 'rgba(255,255,255,0.1)',
                            },
                        }}
                    >
                        View Balcony Light Living Series
                    </Button>
                </Box>
            </Container>
        </Box>
    )
}
