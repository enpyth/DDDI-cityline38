'use client'

import { Box, Container, Typography } from '@mui/material'

interface DetailItem {
    section: string
    description: string
}

interface SeriesDetailsProps {
    subtitle: string
    details: DetailItem[]
}

export default function SeriesDetails({ subtitle, details }: SeriesDetailsProps) {

    return (
        <Box sx={{ bgcolor: '#0B1C33', color: '#fff', py: { xs: 6, md: 10 }, fontFamily: 'var(--font-gotu)' }}>
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 300,
                            color: '#FCE6C8',
                            opacity: 0.9,
                            fontSize: { xs: '1rem', md: '1.25rem' },
                            mx: 'auto',
                            maxWidth: '800px',
                            fontFamily: 'var(--font-baskervville)',
                        }}
                    >
                        {subtitle}
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, maxWidth: '800px', mx: 'auto' }}>
                    {details.map((item, index) => (
                        <Box
                            key={index}
                            sx={{
                                border: '1px solid #FCE6C8',
                                borderRadius: 2,
                                p: 3,
                                display: 'flex',
                                gap: 3,
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    borderColor: 'rgba(252, 230, 200, 0.6)',
                                    bgcolor: 'rgba(252, 230, 200, 0.05)'
                                }
                            }}
                        >
                            <Typography
                                sx={{
                                    fontFamily: 'var(--font-baskervville)',
                                    fontSize: { xs: '0.9rem', md: '1rem' },
                                    color: '#FCE6C8',
                                    minWidth: { xs: '80px', md: '100px' },
                                    flexShrink: 0
                                }}
                            >
                                {item.section}
                            </Typography>
                            <Typography
                                sx={{
                                    fontFamily: 'var(--font-baskervville)',
                                    fontSize: { xs: '0.9rem', md: '1rem' },
                                    color: '#fff',
                                    opacity: 0.9
                                }}
                            >
                                {item.description}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    )
}
