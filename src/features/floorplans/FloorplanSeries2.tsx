'use client'

import { useState } from 'react'
import { Box, Typography, Container, Paper, Modal } from '@mui/material'
import { Check } from '@mui/icons-material'
import UnderlineButton from '../../components/utils/UnderlineButton'

interface FloorplanSeries2Props {
    title: string
    lot?: string
    description: string[]
    features: string[]
    images: string[]
}

export default function FloorplanSeries2({ title, lot, description, features, images }: FloorplanSeries2Props) {
    const [expanded, setExpanded] = useState(false)
    const [fullScreenImage, setFullScreenImage] = useState<string | null>(null)

    return (
        <Box sx={{ pb: { xs: 10, md: 2 } }}>
            <Container maxWidth="md" sx={{ mb: 8 }}>
                <Typography variant="h4" sx={{ fontFamily: 'var(--font-gotu)', mb: 2, textAlign: 'center' }}>
                    {title} {lot && <span><br />{lot}</span>}
                </Typography>
                {description.map((item, index) => (
                    <Typography 
                        key={index} 
                        variant="h5" 
                        sx={{ lineHeight: 1.8, color: '#ccc', fontFamily: 'var(--font-gotu)', mx: 2, textAlign: 'center' }}
                    >
                        {item}
                    </Typography>
                ))}
            </Container>

            {/* Features Card and Images Section */}
            <Container maxWidth="xl" sx={{ position: 'relative', minHeight: { xs: '500px', md: '800px' }, mb: 8 }}>
                {/* Overlapping Layout Container */}
                <Box 
                    sx={{ 
                    position: 'relative', 
                    width: '100%', 
                    height: '100%',
                    overflow: 'visible',
                    transition: 'all 0.5s ease-in-out'
                }}>
                    {/* Floorplan Card - Top-left (z-index: 3) */}
                    <Paper 
                        sx={{
                            position: expanded ? 'relative' : 'absolute',
                            top: expanded ? '0' : { xs: '30px', md: '50px' },
                            left: expanded ? '0' : { xs: '10px', md: '50px' },
                            zIndex: 3,
                            bgcolor: '#5D5D5D',
                            border: '1px solid rgba(252, 230, 200, 0.3)',
                            p: { xs: 2, md: 4 },
                            borderRadius: 2,
                            backdropFilter: 'blur(10px)',
                            width: expanded ? '100%' : { xs: '90%', md: '600px' },
                            transition: 'all 0.5s ease-in-out'
                        }}
                    >
                        <Typography variant="h6" sx={{ fontFamily: 'var(--font-baskervville)', mb: 3, color: '#fff' }}>
                            Floorplan Features
                        </Typography>
                        {features.map((feature, index) => (
                            <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', gap: { xs: 1, md: 2 }, mb: { xs: 1, md: 2 } }}>
                                <Check sx={{
                                    width: { xs: 16, md: 20 },
                                    height: { xs: 16, md: 20 },
                                    color: '#FCE6C8',
                                    mt: 0.5,
                                    flexShrink: 0
                                }} />
                                <Typography sx={{ fontFamily: 'var(--font-gotu)', color: '#fff', lineHeight: 1.6, fontSize: { xs: '0.875rem', md: '1rem' } }}>
                                    {feature}
                                </Typography>
                            </Box>
                        ))}
                        
                        {/* Expand/Collapse Button */}
                        <Box sx={{ mt: { xs: 2, md: 4 }, textAlign: 'center' }}>
                            <UnderlineButton 
                                onClick={() => setExpanded(!expanded)}
                                sx={{ fontSize: { xs: '1rem', md: '1.5rem' } }}
                            >
                                {expanded ? 'Collapse' : 'Expand the Floorplans'}
                            </UnderlineButton>
                        </Box>
                    </Paper>

                    {/* Image 1 - Bottom layer (z-index: 1) */}
                    {images[0] && (
                        <Box
                            component="img"
                            src={images[0]}
                            alt="Floorplan 1"
                            sx={{
                                position: expanded ? 'relative' : 'absolute',
                                top: expanded ? '20px' : { xs: '220px', md: '250px' },
                                left: expanded ? '0' : { xs: '5%', md: '15%' },
                                zIndex: 2,
                                width: expanded ? '70%' : { xs: '90%', md: '60%' },
                                marginX: expanded ? 'auto' : 0,
                                height: 'auto',
                                cursor: 'pointer',
                                border: '2px solid #FCE6C8',
                                borderRadius: 1,
                                opacity: expanded ? 1 : 0.8,
                                mb: expanded ? 4 : 0,
                                transition: 'all 0.5s ease-in-out'
                            }}
                            onClick={() => setFullScreenImage(images[0])}
                        />
                    )}

                    {/* Image 2 - Right side (z-index: 1) */}
                    {images[1] && (
                        <Box
                            component="img"
                            src={images[1]}
                            alt="Floorplan 2"
                            sx={{
                                position: expanded ? 'relative' : 'absolute',
                                top: expanded ? '20px' : { xs: '160px', md: '200px' },
                                right: expanded ? '0' : { xs: '10px', md: '80px' },
                                zIndex: 1,
                                width: expanded ? '70%' : { xs: '75%', md: '500px' },
                                marginX: expanded ? 'auto' : 0,
                                height: 'auto',
                                cursor: 'pointer',
                                border: '2px solid #FCE6C8',
                                borderRadius: 1,
                                opacity: expanded ? 1 : 0.8,
                                mb: expanded ? 4 : 0,
                                transition: 'all 0.5s ease-in-out'
                            }}
                            onClick={() => setFullScreenImage(images[1])}
                        />
                    )}

                    {/* Image 3 - Middle layer (z-index: 2) */}
                    {images[2] && (
                        <Box
                            component="img"
                            src={images[2]}
                            alt="Floorplan 3"
                            sx={{
                                position: expanded ? 'relative' : 'absolute',
                                top: expanded ? '20px' : { xs: '80px', md: '120px' },
                                right: expanded ? '0' : { xs: '20px', md: '250px' },
                                zIndex: 0,
                                width: expanded ? '70%' : { xs: '80%', md: '500px' },
                                marginX: expanded ? 'auto' : 0,
                                height: 'auto',
                                cursor: 'pointer',
                                border: '2px solid #FCE6C8',
                                borderRadius: 1,
                                opacity: expanded ? 1 : 0.9,
                                mb: expanded ? 4 : 0,
                                transition: 'all 0.5s ease-in-out'
                            }}
                            onClick={() => setFullScreenImage(images[2])}
                        />
                    )}
                </Box>
            </Container>

            {/* Full Screen Modal */}
            <Modal
                open={fullScreenImage !== null}
                onClose={() => setFullScreenImage(null)}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'rgba(0, 0, 0, 0.9)'
                }}
            >
                <Box sx={{ maxWidth: '90vw', maxHeight: '90vh' }}>
                    {fullScreenImage && (
                        <Box
                            component="img"
                            src={fullScreenImage}
                            alt="Full screen floorplan"
                            sx={{
                                width: '100%',
                                height: 'auto',
                                cursor: 'pointer'
                            }}
                            onClick={() => setFullScreenImage(null)}
                        />
                    )}
                </Box>
            </Modal>
        </Box>
    )
}
