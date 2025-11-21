'use client'

import { useState, useEffect } from 'react'
import { Box, Container, Typography, IconButton } from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import Image from 'next/image'

const images = [
    '/imgs/01.jpg',
    '/imgs/02.jpg',
    '/imgs/03.jpg',
]

const AUTO_PLAY_INTERVAL = 5000

export default function Cityline38AtAGlance() {
    // Images are static for this design
    // const [currentIndex, setCurrentIndex] = useState(0)

    return (
        <Box sx={{ bgcolor: '#0B1C33', color: '#fff', py: 10, overflow: 'hidden' }}>
            <Container maxWidth="lg">
                <Typography
                    variant="h3"
                    sx={{
                        fontFamily: 'serif',
                        textAlign: 'center',
                        mb: 8,
                        color: '#FCE6C8',
                    }}
                >
                    Cityline 38 at a Glance
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 4,
                        mb: 10,
                        perspective: '1000px',
                    }}
                >
                    {/* Left Image */}
                    <Box
                        sx={{
                            width: 300,
                            height: 400,
                            backgroundImage: `url(${images[2]})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            transform: 'rotateY(-25deg) scale(0.9)',
                            transition: 'transform 0.5s ease',
                            boxShadow: '-10px 10px 30px rgba(0,0,0,0.5)',
                            '&:hover': {
                                transform: 'rotateY(0deg) scale(1)',
                                zIndex: 10,
                            },
                        }}
                    />

                    {/* Center Image */}
                    <Box
                        sx={{
                            width: 400,
                            height: 500,
                            backgroundImage: `url(${images[1]})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            zIndex: 5,
                            boxShadow: '0px 20px 40px rgba(0,0,0,0.6)',
                        }}
                    />

                    {/* Right Image */}
                    <Box
                        sx={{
                            width: 300,
                            height: 400,
                            backgroundImage: `url(${images[0]})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            transform: 'rotateY(25deg) scale(0.9)',
                            transition: 'transform 0.5s ease',
                            boxShadow: '10px 10px 30px rgba(0,0,0,0.5)',
                            '&:hover': {
                                transform: 'rotateY(0deg) scale(1)',
                                zIndex: 10,
                            },
                        }}
                    />

                </Box>

                {/* Location Advantage Section */}
                <Box sx={{ mt: 10, pl: 4, ml: 20, borderLeft: '2px solid #fff' }}>
                    <Typography
                        variant="h4"
                        sx={{
                            fontFamily: 'serif',
                            mb: 2,
                            color: '#fff',
                        }}
                    >
                        Location Advantage
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 300,
                            maxWidth: '800px',
                            color: '#fff',
                            lineHeight: 1.6,
                            opacity: 0.9,
                        }}
                    >
                        Located on 38 Anzac Highway, Everard Park <br />
                        — with tram access and approx. 10 minutes to the CBD. <br />
                        Schools, cafés, retail and parks are all within walking distance.
                    </Typography>
                </Box>
            </Container>
        </Box>
    )
}

