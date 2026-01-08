'use client'

import { useRef } from 'react'
import { Box, Container, Typography, useTheme, useMediaQuery } from '@mui/material'
import SectionHeader from '@/components/utils/SectionHeader'
import UnderlineButton from '@/components/utils/UnderlineButton'


export default function LifeStyle() {
    const videoRef = useRef<HTMLVideoElement>(null)
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))

    const handleMouseEnter = () => {
        videoRef.current?.pause()
    }

    const handleMouseLeave = () => {
        videoRef.current?.play()
    }

    return (
        <Box sx={{ bgcolor: '#0B1C33', color: '#fff', py: { xs: 6, md: 6 }, fontFamily: 'var(--font-gotu)' }}>
            <Container maxWidth="lg">
                {/* Header */}
                <SectionHeader
                    title="Lifestyle, Connected and Effortless"
                    subtitle="Enjoy the benefits of a well-established neighbourhood with walkable access to the tram, shops, cafés and schools — convenience built into everyday living."
                />
            </Container>

            {/* Conditional Content: Video for Desktop, Button only for Mobile */}
            {!isMobile ? (
                <Box
                    sx={{
                        width: '100%',
                        position: 'relative',
                        overflow: 'hidden',
                        '&:hover .video-overlay': {
                            opacity: 1
                        }
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <video
                        ref={videoRef}
                        src="https://pub-c543d1efb0e045bb9db7fe75d0bdfd6e.r2.dev/60.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{
                            width: '62%',
                            height: 'auto',
                            display: 'block'
                        }}
                    />
                    <Box
                        className="video-overlay"
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            opacity: 0,
                            transition: 'opacity 0.3s ease',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)'
                        }}
                    >
                        <Typography
                            variant="h1"
                            sx={{
                                color: '#fff',
                                mb: 6,
                                fontFamily: 'var(--font-baskervville)',
                            }}
                        >
                            Cityline 38
                        </Typography>
                        <UnderlineButton
                            href="/lifestyle"
                            sx={{
                                fontSize: 'h4.fontSize',
                                color: '#fff',
                                // Replace underline with full border
                                border: '2px solid #fff',
                                borderBottom: '2px solid #fff',
                                // Add shadow black background with frosted effect
                                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                backdropFilter: 'blur(8px)',
                                // Adjust padding: decrease height (py) and increase width (px)
                                py: 1.25,
                                px: 5,
                                '&:hover': {
                                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                    opacity: 1,
                                },
                            }}
                        >
                            Find More
                        </UnderlineButton>
                    </Box>
                </Box>
            ) : (
                <Box
                    sx={{
                        width: '100%',
                        pb: 2,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <UnderlineButton
                        href="/lifestyle"
                        sx={{
                            fontSize: { xs: '1.75rem', md: 'h4.fontSize' },
                            color: '#fff',
                            border: '1px solid #fff',
                            backdropFilter: 'blur(8px)',
                            py: 1.5,
                            px: 6,
                            '&:hover': {
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            },
                        }}
                    >
                        View More
                    </UnderlineButton>
                </Box>
            )}
        </Box>
    )
}
