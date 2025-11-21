'use client'

import { useState, useEffect } from 'react'
import { Box, Container, Typography, IconButton } from '@mui/material'

const images = [
    '/imgs/01.jpg',
    '/imgs/02.jpg',
    '/imgs/03.jpg',
    '/imgs/04.jpg',
    '/imgs/05.jpg',
]

const AUTO_PLAY_INTERVAL = 5000

export default function Cityline38AtAGlance() {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length)
        }, AUTO_PLAY_INTERVAL)

        return () => clearInterval(timer)
    }, [])

    const getIndex = (offset: number) => {
        return (currentIndex + offset + images.length) % images.length
    }

    const handleImageClick = (offset: number) => {
        setCurrentIndex(getIndex(offset))
    }

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
                        position: 'relative',
                        height: 500,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        mb: 10,
                        perspective: '1000px',
                    }}
                >
                    {images.map((src, index) => {
                        // Calculate position relative to current index
                        let position = (index - currentIndex + images.length) % images.length
                        if (position > images.length / 2) position -= images.length

                        // Determine styles based on position
                        let styles = {}
                        const isCenter = position === 0
                        const isLeft = position === -1 || position === images.length - 1
                        const isRight = position === 1 || position === -(images.length - 1)

                        // Only show center, immediate left, and immediate right images
                        // Hide others but keep them in DOM for smooth transition if needed, 
                        // or just handle the main 3 visible slots.
                        // For a true carousel feel with 5 images, we can handle:
                        // 0 (center), -1 (left), 1 (right), and others hidden behind or faded.

                        // Let's define states:
                        // 0: Center, large, z-index 10
                        // -1: Left, smaller, rotated, z-index 5
                        // 1: Right, smaller, rotated, z-index 5
                        // Others: Hidden/Opacity 0, scale 0.5, z-index 0

                        let transform = 'translateX(0) scale(0.5) rotateY(0deg)'
                        let opacity = 0
                        let zIndex = 0
                        let cursor = 'default'

                        if (isCenter) {
                            transform = 'translateX(0) scale(1) rotateY(0deg)'
                            opacity = 1
                            zIndex = 10
                            cursor = 'default'
                        } else if (position === -1) { // Left
                            transform = 'translateX(-550px) scale(0.8) rotateY(-25deg)'
                            opacity = 0.8
                            zIndex = 5
                            cursor = 'pointer'
                        } else if (position === 1) { // Right
                            transform = 'translateX(550px) scale(0.8) rotateY(25deg)'
                            opacity = 0.8
                            zIndex = 5
                            cursor = 'pointer'
                        } else if (position === -2 || (images.length === 5 && position === 3)) { // Far Left (hidden)
                            transform = 'translateX(-750px) scale(0.6) rotateY(45deg)'
                            opacity = 0
                            zIndex = 1
                        } else if (position === 2 || (images.length === 5 && position === -3)) { // Far Right (hidden)
                            transform = 'translateX(750px) scale(0.6) rotateY(-45deg)'
                            opacity = 0
                            zIndex = 1
                        }

                        return (
                            <Box
                                key={index}
                                onClick={() => {
                                    if (position === -1) handleImageClick(-1)
                                    if (position === 1) handleImageClick(1)
                                }}
                                sx={{
                                    position: 'absolute',
                                    width: 600,
                                    height: 400,
                                    backgroundImage: `url(${src})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                                    borderRadius: 2,
                                    boxShadow: opacity > 0 ? '0 20px 50px rgba(0,0,0,0.5)' : 'none',
                                    transform,
                                    opacity,
                                    zIndex,
                                    cursor,
                                    pointerEvents: opacity === 0 ? 'none' : 'auto',
                                    '&:hover': {
                                        transform: (position === -1 || position === 1) ?
                                            transform.replace('scale(0.8)', 'scale(0.85)') :
                                            transform
                                    }
                                }}
                            />
                        )
                    })}
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

