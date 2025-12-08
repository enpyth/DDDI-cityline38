'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Box, Container, Typography, useTheme, useMediaQuery } from '@mui/material'
import UnderlineButton from '@/components/utils/UnderlineButton'
import SectionHeader from '@/components/utils/SectionHeader'

const seriesData = [
    {
        id: 'series-a',
        title: 'Balcony Light Living Series',
        shortTitle: 'Series A',
        description: 'A light and efficient three-bedroom layout featuring generous balconies and multi-aspect natural light — ideal for first homebuyers and investors.',
        image: '/imgs/Home/SeriesA.png',
        linkText: 'Learn More',
        url: '/floorplans'
    },
    {
        id: 'series-b',
        title: 'Serene Master Living',
        shortTitle: 'Series B',
        description: 'A spacious four-bedroom layout with a private master suite and well-defined circulation, offering long-term comfort for growing families.',
        image: '/imgs/Home/SeriesB.png',
        linkText: 'Learn More',
        url: '/floorplans'
    }
]

export default function TwoSeries() {
    const [activeId, setActiveId] = useState('series-a')
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))

    const activeSeries = seriesData.find(s => s.id === activeId) || seriesData[0]

    return (
        <Box sx={{ bgcolor: '#0B1C33', color: '#fff', py: { xs: 6, md: 6 }, fontFamily: 'var(--font-gotu)' }}>
            <Container maxWidth="lg">
                {/* Header */}
                <SectionHeader
                    title="Two Series. Designed for Two Lifestyles."
                    subtitle="From light and efficient to spacious and serene — choose the layout that matches your lifestyle."
                />

                {/* Mobile Layout - Vertical Stacked Cards */}
                {isMobile ? (
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                        {seriesData.map((series) => (
                            <Box
                                key={series.id}
                                sx={{
                                    borderRadius: 2,
                                    overflow: 'hidden',
                                    bgcolor: '#fff',
                                    color: '#0B1C33'
                                }}
                            >
                                {/* Image */}
                                <Box
                                    sx={{
                                        height: 240,
                                        backgroundImage: `url(${series.image})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center'
                                    }}
                                />

                                {/* Content */}
                                <Box sx={{ p: 3 }}>
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            fontFamily: 'var(--font-baskervville)',
                                            fontSize: '1.5rem',
                                            mb: 2,
                                            color: '#0B1C33'
                                        }}
                                    >
                                        {series.title}
                                    </Typography>

                                    <Typography
                                        variant="body1"
                                        sx={{
                                            fontFamily: 'var(--font-baskervville)',
                                            fontSize: '0.95rem',
                                            lineHeight: 1.7,
                                            mb: 3,
                                            color: '#0B1C33'
                                        }}
                                    >
                                        {series.description}
                                    </Typography>

                                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <UnderlineButton
                                            component={Link}
                                            href={series.url}
                                            sx={{
                                                color: '#0B1C33',
                                                '&::after': {
                                                    bgcolor: '#0B1C33'
                                                }
                                            }}
                                        >
                                            {series.linkText}
                                        </UnderlineButton>
                                    </Box>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                ) : (
                    /* Desktop Layout - Interactive Cards */
                    <>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                gap: 2,
                                height: 500,
                                mb: 8
                            }}
                        >
                            {seriesData.map((series) => {
                                const isActive = series.id === activeId
                                return (
                                    <Box
                                        key={series.id}
                                        onMouseEnter={() => setActiveId(series.id)}
                                        sx={{
                                            flex: isActive ? 1.5 : 0.5,
                                            height: '100%',
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
                                                height: 100,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'flex-start'
                                            }}
                                        >
                                            <Typography
                                                variant="h5"
                                                sx={{
                                                    fontFamily: 'var(--font-baskervville)',
                                                    fontSize: isActive ? '1.75rem' : '1.5rem',
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

                        {/* Desktop Description */}
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                mt: 6,
                                px: 2
                            }}
                        >
                            <Box sx={{ maxWidth: '800px', width: '100%' }}>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: '#fff',
                                        fontSize: '1.125rem',
                                        lineHeight: 1.8,
                                        mb: 3,
                                        fontFamily: 'var(--font-baskervville)',
                                        fontWeight: 300,
                                        borderLeft: '2px solid #fff',
                                        pl: 4,
                                    }}
                                >
                                    {activeSeries.description}
                                </Typography>

                                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <UnderlineButton component={Link} href={activeSeries.url}>
                                        View {activeSeries.title}
                                    </UnderlineButton>
                                </Box>
                            </Box>
                        </Box>
                    </>
                )}
            </Container>
        </Box>
    )
}
