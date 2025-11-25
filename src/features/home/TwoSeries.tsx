'use client'

import { useState } from 'react'
import { Box, Container, Typography, useTheme, useMediaQuery } from '@mui/material'
import UnderlineButton from '@/components/utils/UnderlineButton'

const seriesData = [
    {
        id: 'series-a',
        title: 'Balcony Light Living',
        shortTitle: 'Series A',
        description: 'A light and efficient three-bedroom layout featuring generous balconies and multi-aspect natural light — ideal for first homebuyers and investors.',
        image: '/imgs/06.jpg', // Placeholder
        linkText: 'View Balcony Light Living Series'
    },
    {
        id: 'series-b',
        title: 'Serene Master Living',
        shortTitle: 'Series B',
        description: 'A spacious four-bedroom layout with a private master suite and well-defined circulation, offering long-term comfort for growing families.',
        image: '/imgs/07.jpg', // Placeholder
        linkText: 'View Serene Master Living Series'
    }
]

export default function TwoSeries() {
    const [activeId, setActiveId] = useState('series-a')
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))

    const activeSeries = seriesData.find(s => s.id === activeId) || seriesData[0]

    return (
        <Box sx={{ bgcolor: '#0B1C33', color: '#fff', py: { xs: 8, md: 12 }, fontFamily: 'var(--font-gotu)' }}>
            <Container maxWidth="lg">
                {/* Header */}
                <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 10 } }}>
                    <Typography
                        variant="h3"
                        sx={{
                            fontFamily: 'var(--font-baskervville)',
                            mb: 3,
                            color: '#FCE6C8',
                            fontSize: { xs: '2rem', md: '3rem' }
                        }}
                    >
                        Two Series. Designed for Two Lifestyles.
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 300,
                            color: '#fff',
                            opacity: 0.9,
                            fontSize: { xs: '1rem', md: '1.25rem' },
                            mx: 'auto',
                            fontFamily: 'var(--font-baskervville)',
                        }}
                    >
                        From light and efficient to spacious and serene — choose the layout that matches your lifestyle.
                    </Typography>
                </Box>

                {/* Cards Section */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        gap: 2,
                        height: { xs: 'auto', md: 500 },
                        mb: { xs: 6, md: 8 }
                    }}
                >
                    {seriesData.map((series) => {
                        const isActive = series.id === activeId
                        return (
                            <Box
                                key={series.id}
                                onMouseEnter={() => !isMobile && setActiveId(series.id)}
                                onClick={() => isMobile && setActiveId(series.id)}
                                sx={{
                                    flex: { xs: 'none', md: isActive ? 1.5 : 0.5 },
                                    height: { xs: 300, md: '100%' },
                                    position: 'relative',
                                    borderRadius: 1,
                                    overflow: 'hidden',
                                    cursor: 'pointer',
                                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                            >
                                {/* Image Area */}
                                <Box
                                    sx={{
                                        flex: 1,
                                        backgroundImage: `url(${series.image})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        position: 'relative',
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            bgcolor: 'rgba(0,0,0,0.2)',
                                            transition: 'background-color 0.3s'
                                        },
                                        '&:hover::after': {
                                            bgcolor: 'rgba(0,0,0,0)'
                                        }
                                    }}
                                />

                                {/* Title Area */}
                                <Box
                                    sx={{
                                        bgcolor: '#fff',
                                        color: '#0B1C33',
                                        p: 3,
                                        height: { xs: 'auto', md: 100 },
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start'
                                    }}
                                >
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            fontFamily: 'var(--font-baskervville)',
                                            fontSize: { xs: '1.25rem', md: isActive ? '1.75rem' : '1.5rem' },
                                            whiteSpace: 'nowrap',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis'
                                        }}
                                    >
                                        {isActive ? series.title : series.shortTitle}
                                    </Typography>
                                </Box>
                            </Box>
                        )
                    })}
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        mt: { xs: 4, md: 6 },
                        px: 2
                    }}
                >
                    <Box sx={{ maxWidth: '800px', width: '100%' }}>
                        <Typography
                            variant="body1"
                            sx={{
                                color: '#fff',
                                fontSize: { xs: '1rem', md: '1.125rem' },
                                lineHeight: 1.8,
                                mb: 3,
                                fontFamily: 'var(--font-baskervville)',
                                fontWeight: 300,
                                borderLeft: { xs: 'none', md: '2px solid #fff' },
                                pl: { xs: 2, md: 4 },
                            }}
                        >
                            {activeSeries.description}
                        </Typography>

                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <UnderlineButton>
                                {activeSeries.linkText}
                            </UnderlineButton>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}
