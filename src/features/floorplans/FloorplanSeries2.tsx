'use client'

import { useState } from 'react'
import { Box, Typography, Container, Paper, Modal } from '@mui/material'
import { Check } from '@mui/icons-material'
import UnderlineButton from '../../components/utils/UnderlineButton'
import GuildLine from './GuildLine'

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
        <Box sx={{
            pb: expanded ? { xs: '550px', md: '1000px' } : 0,
            position: 'relative',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
            height: 'auto',
            overflow: 'visible'
        }}>

            {/* Features Card and Images Section */}
            <Container maxWidth="xl" sx={{
                position: 'relative',
                minHeight: { xs: '480px', md: '800px' },
                mb: 8,
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
            }}>
                {/* Overlapping Layout Container */}
                <Box
                    sx={{
                        position: 'relative',
                        width: '100%',
                        overflow: 'visible',
                        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                >
                    {/* Floorplan Card */}
                    <Paper
                        sx={{
                            position: 'relative',
                            top: expanded ? { xs: '0', md: '100px' } : { xs: '0', md: '20px' },
                            left: expanded ? { xs: '0', md: '150px' } : { xs: '0', md: '50px' },
                            zIndex: 4,
                            bgcolor: '#5D5D5D',
                            p: { xs: 2, md: 3 },
                            borderRadius: 0,
                            width: expanded ? { xs: '100%', md: '750px' } : { xs: '100%', md: '750px' },
                            transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                            marginBottom: expanded ? { xs: 4, md: 6 } : 0
                        }}
                    >
                        <Typography variant="h6" sx={{ fontFamily: 'var(--font-baskervville)', mb: 3, color: '#fff' }}>
                            Floorplan Features
                        </Typography>
                        {features.map((feature, index) => (
                            <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', gap: { xs: 1, md: 2 }, mb: 1 }}>
                                <Check sx={{
                                    width: { xs: 16, md: 20 },
                                    height: { xs: 16, md: 20 },
                                    color: '#FCE6C8',
                                    mt: 0.5,
                                    flexShrink: 0
                                }} />
                                <Typography sx={{ fontFamily: 'var(--font-gotu)', color: '#fff', lineHeight: 1.5, fontSize: { xs: '0.875rem', md: '1rem' } }}>
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
                                {expanded ? 'Hide the Floorplans' : 'Expand the Floorplans'}
                            </UnderlineButton>
                        </Box>
                    </Paper>

                    {expanded && (
                        <Box sx={{ position: 'absolute', top: '100%', display: { xs: 'none', md: 'none', lg: 'block', zIndex: 3 } }}>
                            <GuildLine
                                startPoint={{ x: 340, y: 1 }}
                                branches={[
                                    {
                                        point: { x: 340, y: 570 },
                                        length: 230,
                                        text: 'Ground Floor',
                                        textOffset: { x: 50, y: -40 }
                                    },
                                    {
                                        point: { x: 340, y: 1000 },
                                        length: 280,
                                        text: 'First Floor',
                                        textOffset: { x: 150, y: -40 }
                                    },
                                    {
                                        point: { x: 340, y: 1380 },
                                        length: 380,
                                        text: 'Second Floor',
                                        textOffset: { x: 220, y: -40 }
                                    }
                                ]}
                                color="#FFF"
                                mainLineWidth={3}
                                branchLineWidth={1}
                                containerHeight="1300px"
                            />
                        </Box>
                    )}

                    {/* Expand the image to the third */}
                    {images[3] && (
                        <Box
                            component="img"
                            src={expanded ? images[3] : images[0]}
                            alt="Floorplan 1"
                            sx={{
                                position: 'absolute',
                                top: expanded ? { xs: '190%', md: '320%' } : { xs: '100px', md: '350px' },
                                left: expanded ? { xs: '12%', md: '32%' } : { xs: '12%', md: '27%' },
                                zIndex: 2,
                                width: { xs: '300px', md: '600px' },
                                height: 'auto',
                                cursor: 'pointer',
                                borderRadius: 1,
                                opacity: expanded ? 1 : 0.8,
                                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                                transform: expanded ? 'translateX(0)' : 'translateX(0)',
                                marginX: 'auto',
                                display: 'block'
                            }}
                            onClick={() => expanded ? setFullScreenImage(images[3]) : setExpanded(true)}
                        />
                    )}

                    {/* Expand the image to the second */}
                    {images[2] && (
                        <Box
                            component="img"
                            src={expanded ? images[2] : "/imgs/Floorplans/color_bg1.png"}
                            alt={expanded ? "Floorplan 2" : "Color background 1"}
                            sx={{
                                position: 'absolute',
                                top: expanded ? { xs: '150%', md: '230%' } : { xs: '100px', md: '230px' },
                                left: expanded ? { xs: '12%', md: '32%' } : { xs: '12%', md: '35%' },
                                zIndex: 1,
                                width: { xs: '300px', md: '600px' },
                                height: 'auto',
                                cursor: 'pointer',
                                boxShadow: expanded ? 'none' : '0 4px 20px rgba(255, 255, 255, 0.4)',
                                opacity: expanded ? 1 : 0.8,
                                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                                border: 'none',
                                outline: 'none',
                                transitionDelay: expanded ? '0.1s' : '0s',
                                marginX: 'auto',
                                display: 'block',
                                bgcolor: 'transparent'
                            }}
                            onClick={() => expanded ? setFullScreenImage(images[2]) : setExpanded(true)}
                        />
                    )}

                    {/* Expand the image to the first */}
                    {images[1] && (
                        <Box
                            component={expanded ? "img" : "img"}
                            src={expanded ? images[1] : "/imgs/Floorplans/color_bg2.png"}
                            alt={expanded ? "Floorplan 3" : "Color background 2"}
                            sx={{
                                position: 'absolute',
                                top: expanded ? { xs: '105%', md: '130%' } : { xs: '100px', md: '100px' },
                                left: expanded ? { xs: '12%', md: '32%' } : { xs: '12%', md: '22%' },
                                zIndex: 0,
                                width: { xs: '300px', md: '600px' },
                                height: 'auto',
                                cursor: 'pointer',
                                borderRadius: 0,
                                opacity: expanded ? 1 : 0.9,
                                transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)',
                                transitionDelay: expanded ? '0.2s' : '0s',
                                marginX: 'auto',
                                display: 'block',
                                bgcolor: 'transparent'
                            }}
                            onClick={() => expanded ? setFullScreenImage(images[1]) : setExpanded(true)}
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