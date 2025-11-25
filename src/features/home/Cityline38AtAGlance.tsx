'use client'

import { useState, useEffect } from 'react'
import { Box, Container, Typography, useTheme, useMediaQuery } from '@mui/material'

const images = [
    {
        src: '/imgs/07.jpg',
        title: 'Location Advantage',
        description: 'Located on 38 Anzac Highway, Everard Park <br />— with tram access and approx. 10 minutes to the CBD. <br />Schools, cafés, retail and parks are all within walking distance.'
    },
    {
        src: '/imgs/06.jpg',
        title: 'Home Configuration',
        description: '13 three-storey townhouses with 3–4 bedroom configurations and private double garages, offering well-organised spaces ideal for long-term family living.'
    },
    {
        src: '/imgs/02.jpg',
        title: 'Quality Build',
        description: 'Featuring double-glazed windows, multiple light aspects and flexible lounge spaces for comfort, energy efficiency and daily practicality.'
    },
    {
        src: '/imgs/08.jpg',
        title: 'Lifestyle Convenience',
        description: 'Medical services, shopping, dining and community amenities are close by, offering everyday convenience right at your doorstep.'
    },
]

const AUTO_PLAY_INTERVAL = 5000

export default function Cityline38AtAGlance() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))

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
        <Box sx={{ bgcolor: '#0B1C33', color: '#fff', py: { xs: 6, md: 10 }, overflow: 'hidden', fontFamily: 'var(--font-gotu)' }}>
            <Container maxWidth="lg">
                <Typography
                    variant="h3"
                    sx={{
                        fontFamily: 'var(--font-baskervville)',
                        textAlign: 'center',
                        mb: { xs: 4, md: 8 },
                        color: '#FCE6C8',
                        fontSize: { xs: '2rem', md: '3rem' }
                    }}
                >
                    Cityline 38 at a Glance
                </Typography>

                <Box
                    sx={{
                        position: 'relative',
                        height: { xs: 300, md: 500 },
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        mb: { xs: 6, md: 10 },
                        perspective: '1000px',
                    }}
                >
                    {images.map((image, index) => {
                        // Calculate position relative to current index
                        let position = (index - currentIndex + images.length) % images.length
                        if (position > images.length / 2) position -= images.length

                        // Determine styles based on position
                        const isCenter = position === 0

                        // Responsive translation values
                        const xOffset = isMobile ? 40 : 550
                        const scaleSide = isMobile ? 0.9 : 0.8
                        const scaleHidden = 0.6

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
                            transform = `translateX(-${xOffset}px) scale(${scaleSide}) rotateY(${isMobile ? 0 : -25}deg)`
                            opacity = isMobile ? 0 : 0.8 // Hide side images on mobile to avoid clutter or overlap if space is tight, or adjust
                            // Actually, for mobile, a simple stack or just showing the center one might be better.
                            // Let's try showing them but with much smaller offset and opacity, or just hiding them.
                            // If we hide them, it's just a fader.
                            // Let's try a small offset for "peek" effect if desired, but 40px is small.
                            // Let's keep them visible but behind.
                            if (isMobile) {
                                transform = `translateX(0) scale(0.9) rotateY(0deg)` // Just behind
                                zIndex = 5
                                opacity = 0 // Hide them for now to keep it clean on mobile, or maybe just slide effect?
                                // Let's go with: Mobile = simple fade/slide.
                                // But the code logic is position based.
                                // Let's make side images hidden on mobile for simplicity and clean look.
                                opacity = 0
                            } else {
                                opacity = 0.8
                            }
                        } else if (position === 1) { // Right
                            transform = `translateX(${xOffset}px) scale(${scaleSide}) rotateY(${isMobile ? 0 : 25}deg)`
                            if (isMobile) {
                                transform = `translateX(0) scale(0.9) rotateY(0deg)`
                                zIndex = 5
                                opacity = 0
                            } else {
                                opacity = 0.8
                            }
                            cursor = 'pointer'
                        } else { // Far Left/Right (hidden)
                            transform = `translateX(${position < 0 ? -xOffset * 1.5 : xOffset * 1.5}px) scale(${scaleHidden}) rotateY(${position < 0 ? 45 : -45}deg)`
                            opacity = 0
                            zIndex = 1
                        }

                        return (
                            <Box
                                key={index}
                                onClick={() => {
                                    if (!isMobile) {
                                        if (position === -1) handleImageClick(-1)
                                        if (position === 1) handleImageClick(1)
                                    }
                                }}
                                sx={{
                                    position: 'absolute',
                                    width: { xs: '100%', md: 600 },
                                    height: { xs: '100%', md: 400 },
                                    backgroundImage: `url(${image.src})`,
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
                                    left: { xs: 0, md: 'calc(50% - 300px)' }, // Center it manually on desktop if using absolute
                                    // On mobile width is 100%, so left 0 is fine.
                                    // On desktop width is 600. The parent is flex center, but position absolute removes it from flow.
                                    // The original code relied on flex center alignment but position absolute might mess it up if not careful.
                                    // Actually, if parent is flex center and child is absolute, it defaults to top left unless specified?
                                    // No, flexbox centering works on absolute children in some browsers but usually you need left/top/transform.
                                    // The original code didn't specify left/top, so it might have been relying on default placement.
                                    // Let's be explicit.
                                }}
                            />
                        )
                    })}
                </Box>

                {/* Dynamic Text Section */}
                <Box sx={{
                    mt: { xs: 6, md: 10 },
                    pl: { xs: 0, md: 4 },
                    ml: { xs: 0, md: 20 },
                    borderLeft: { xs: 'none', md: '2px solid #fff' },
                    textAlign: { xs: 'center', md: 'left' }
                }}>
                    <Typography
                        variant="h4"
                        sx={{
                            fontFamily: 'var(--font-baskervville)',
                            mb: 2,
                            color: '#fff',
                            fontSize: { xs: '1.75rem', md: '2.125rem' }
                        }}
                    >
                        {images[currentIndex].title}
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 300,
                            maxWidth: '800px',
                            color: '#fff',
                            lineHeight: 1.6,
                            opacity: 0.9,
                            fontSize: { xs: '1rem', md: '1.25rem' },
                            mx: { xs: 'auto', md: 0 },
                            fontFamily: 'var(--font-baskervville)',
                        }}
                        dangerouslySetInnerHTML={{ __html: images[currentIndex].description }}
                    />
                </Box>
            </Container>
        </Box>
    )
}

