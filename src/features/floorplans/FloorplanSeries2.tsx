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
        <Box sx={{ 
            pb: expanded ? { xs: '450px', md: '1200px' } : { xs: '0px', md: '2px' }, 
            position: 'relative', 
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
            height: 'auto',
            overflow: 'visible'
        }}>
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
                            left: expanded ? { xs: '0', md: '200px' } : { xs: '0', md: '100px' },
                            zIndex: 3,
                            bgcolor: '#5D5D5D',
                            p: { xs: 2, md: 4 },
                            borderRadius: 0,
                            backdropFilter: 'blur(10px)',
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
                                {expanded ? 'Collapse' : 'Expand the Floorplans'}
                            </UnderlineButton>
                        </Box>
                    </Paper>

                    {/* Image 1 - 从初始位置滑动到顶部位置 */}
                    {images[0] && (
                        <Box
                            component="img"
                            src={images[0]}
                            alt="Floorplan 1"
                            sx={{
                                position: 'absolute',
                                top: expanded ? { xs: '105%', md: '130%' } : { xs: '100px', md: '350px' },
                                left: expanded ? { xs: '15%', md: '25%' } : { xs: '15%', md: '21%' },
                                zIndex: 2,
                                width: { xs: '70%', md: '50%' },
                                height: 'auto',
                                cursor: 'pointer',
                                boxShadow: expanded ? 'none' : '0 4px 20px rgba(255, 255, 255, 0.1)',
                                borderRadius: 1,
                                opacity: expanded ? 1 : 0.8,
                                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                                transform: expanded ? 'translateX(0)' : 'translateX(0)',
                                marginX: 'auto',
                                display: 'block'
                            }}
                            onClick={() => expanded ? setFullScreenImage(images[0]) : setExpanded(true)}
                        />
                    )}

                    {/* Image 2 - 从右侧位置滑动到中间位置 */}
                    {images[1] && (
                        <Box
                            component="img"
                            src={expanded ? images[1] : "/imgs/Floorplans/color_bg1.png"}
                            alt={expanded ? "Floorplan 2" : "Color background 1"}
                            sx={{
                                position: 'absolute',
                                top: expanded ? { xs: '145%', md: '230%' } : { xs: '100px', md: '230px' },
                                left: expanded ? { xs: '15%', md: '25%' } : { xs: '15%', md: '28%' },
                                zIndex: 1,
                                width: { xs: '70%', md: '50%' },
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
                            onClick={() => expanded ? setFullScreenImage(images[1]) : setExpanded(true)}
                        />
                    )}

                    {/* Image 3 - 从中间位置滑动到底部位置 */}
                    {images[2] && (
                        <Box
                            component={expanded ? "img" : "img"}
                            src={expanded ? images[2] : "/imgs/Floorplans/color_bg2.png"}
                            alt={expanded ? "Floorplan 3" : "Color background 2"}
                            sx={{
                                position: 'absolute',
                                top: expanded ? { xs: '185%', md: '330%' } : { xs: '100px', md: '100px' },
                                left: expanded ? { xs: '15%', md: '25%' } : { xs: '15%', md: '16%' },
                                zIndex: 0,
                                width: { xs: '70%', md: '50%' },
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
                            onClick={() => expanded ? setFullScreenImage(images[2]) : setExpanded(true)}
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