'use client'

import { Box, Typography, Container } from '@mui/material'

interface HeroProps {
    title: string
    subtitle?: string
    subtitle2?: string
    backgroundImage?: string
    height?: string | number
    bgSize?: string
    bgPosition?: string
}

export default function Hero({
    title,
    subtitle,
    subtitle2,
    backgroundImage = '/imgs/05.jpg',
    height = '60vh',
    bgSize = 'cover',
    bgPosition = 'center'
}: HeroProps) {
    return (
        <Box
            sx={{
                height: height,
                width: '100%',
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: bgSize,
                backgroundPosition: bgPosition,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(to bottom, rgba(20, 169, 196, 0.2) 0%, rgba(3, 0, 0, 0.56) 100%)',
                },
            }}
        >
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, textAlign: 'center', color: '#fff', px: { xs: 2, md: 4 } }}>
                <Typography
                    variant="h1"
                    sx={{
                        fontFamily: 'var(--font-baskervville)',
                        fontSize: { xs: '2.5rem', sm: '3rem', md: '5rem' },
                        mb: { xs: 1, md: 2 },
                        lineHeight: 1.2
                    }}
                >
                    {title}
                </Typography>
                {subtitle && (
                    <Typography
                        variant="h5"
                        sx={{
                            fontFamily: 'var(--font-baskervville)',
                            fontWeight: 300,
                            letterSpacing: '0.1em',
                            maxWidth: '800px',
                            mx: 'auto',
                            lineHeight: 1.5,
                            fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
                            mb: { xs: 1, md: 0 }
                        }}
                    >
                        {subtitle}
                    </Typography>
                )}
                {subtitle2 && (
                    <Typography
                        variant="h5"
                        sx={{
                            fontFamily: 'var(--font-baskervville)',
                            fontWeight: 300,
                            letterSpacing: '0.1em',
                            maxWidth: '1000px',
                            mx: 'auto',
                            lineHeight: 1.5,
                            fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
                        }}
                    >
                        {subtitle2}
                    </Typography>
                )}
            </Container>
        </Box>
    )
}
