'use client'

import { useState } from 'react'
import { Box, Container, Grid, Modal, IconButton } from '@mui/material'
import Image from 'next/image'
import CloseIcon from '@mui/icons-material/Close'

export default function GalleryGrid() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    const handleImageClick = (src: string) => {
        setSelectedImage(src)
    }

    const handleCloseModal = () => {
        setSelectedImage(null)
    }

    return (
        <Box sx={{ bgcolor: '#435663', py: 4, px: 1}}>
            <Container maxWidth="xl">
                <Grid container spacing={4}>
                    {/* Row 1 */}
                    {/* Aerial View - Large Left */}
                    <Grid size={{ xs: 12, md: 8 }} sx={{ minHeight: { xs: 300, md: 600 } }}>
                        <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
                            <Box
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    position: 'relative',
                                    cursor: 'pointer',
                                    '&:hover': {
                                        opacity: 0.9,
                                        transition: 'opacity 0.3s ease'
                                    }
                                }}
                                onClick={() => handleImageClick('/imgs/07.jpg')}
                            >
                                <Image
                                    src="/imgs/07.jpg"
                                    alt="Aerial View"
                                    fill
                                    style={{
                                        objectFit: 'cover',
                                        borderRadius: '4px'
                                    }}
                                    sizes="(max-width: 768px) 100vw, 80vw"
                                />
                            </Box>
                        </Box>
                    </Grid>

                    {/* Right Column - Living & Street */}
                    <Grid size={{ xs: 12, md: 4 }} sx={{ minHeight: { xs: 600, md: 600 } }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, height: '100%' }}>
                            <Box sx={{ width: '100%', flex: 1, position: 'relative' }}>
                                <Box
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        position: 'relative',
                                        cursor: 'pointer',
                                        '&:hover': {
                                            opacity: 0.9,
                                            transition: 'opacity 0.3s ease'
                                        }
                                    }}
                                    onClick={() => handleImageClick('/imgs/04.jpg')}
                                >
                                    <Image
                                        src="/imgs/04.jpg"
                                        alt="Living Room"
                                        fill
                                        style={{
                                            objectFit: 'cover',
                                            borderRadius: '4px'
                                        }}
                                        sizes="(max-width: 768px) 100vw, 40vw"
                                    />
                                </Box>
                            </Box>
                            <Box sx={{ width: '100%', flex: 1, position: 'relative' }}>
                                <Box
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        position: 'relative',
                                        cursor: 'pointer',
                                        '&:hover': {
                                            opacity: 0.9,
                                            transition: 'opacity 0.3s ease'
                                        }
                                    }}
                                    onClick={() => handleImageClick('/imgs/08.jpg')}
                                >
                                    <Image
                                        src="/imgs/08.jpg"
                                        alt="Street View"
                                        fill
                                        style={{
                                            objectFit: 'cover',
                                            borderRadius: '4px'
                                        }}
                                        sizes="(max-width: 768px) 100vw, 40vw"
                                    />
                                </Box>
                            </Box>
                        </Box>
                    </Grid>

                    {/* Row 2 - Full Width Exterior */}
                    <Grid size={{ xs: 12 }} sx={{ minHeight: { xs: 300, md: 500 } }}>
                        <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
                            <Box
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    position: 'relative',
                                    cursor: 'pointer',
                                    '&:hover': {
                                        opacity: 0.9,
                                        transition: 'opacity 0.3s ease'
                                    }
                                }}
                                onClick={() => handleImageClick('/imgs/06.jpg')}
                            >
                                <Image
                                    src="/imgs/06.jpg"
                                    alt="Exterior"
                                    fill
                                    style={{
                                        objectFit: 'cover',
                                        borderRadius: '4px'
                                    }}
                                    sizes="100vw"
                                />
                            </Box>
                        </Box>
                    </Grid>

                    {/* Row 3 - Bath & Bed */}
                    <Grid size={{ xs: 12, md: 6 }} sx={{ minHeight: { xs: 300, md: 500 } }}>
                        <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
                            <Box
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    position: 'relative',
                                    cursor: 'pointer',
                                    '&:hover': {
                                        opacity: 0.9,
                                        transition: 'opacity 0.3s ease'
                                    }
                                }}
                                onClick={() => handleImageClick('/imgs/03.jpg')}
                            >
                                <Image
                                    src="/imgs/03.jpg"
                                    alt="Bathroom"
                                    fill
                                    style={{
                                        objectFit: 'cover',
                                        borderRadius: '4px'
                                    }}
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }} sx={{ minHeight: { xs: 300, md: 500 } }}>
                        <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
                            <Box
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    position: 'relative',
                                    cursor: 'pointer',
                                    '&:hover': {
                                        opacity: 0.9,
                                        transition: 'opacity 0.3s ease'
                                    }
                                }}
                                onClick={() => handleImageClick('/imgs/02.jpg')}
                            >
                                <Image
                                    src="/imgs/02.jpg"
                                    alt="Bedroom"
                                    fill
                                    style={{
                                        objectFit: 'cover',
                                        borderRadius: '4px'
                                    }}
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </Box>
                        </Box>
                    </Grid>

                    {/* Row 4 - Full Width Kitchen */}
                    <Grid size={{ xs: 12 }} sx={{ minHeight: { xs: 300, md: 600 } }}>
                        <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
                            <Box
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    position: 'relative',
                                    cursor: 'pointer',
                                    '&:hover': {
                                        opacity: 0.9,
                                        transition: 'opacity 0.3s ease'
                                    }
                                }}
                                onClick={() => handleImageClick('/imgs/01.jpg')}
                            >
                                <Image
                                    src="/imgs/01.jpg"
                                    alt="Kitchen"
                                    fill
                                    style={{
                                        objectFit: 'cover',
                                        borderRadius: '4px'
                                    }}
                                    sizes="100vw"
                                />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            {/* Image Modal */}
            <Modal
                open={selectedImage !== null}
                onClose={handleCloseModal}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'rgba(0, 0, 0, 0.9)'
                }}
            >
                <Box sx={{ position: 'relative', maxWidth: '90vw', maxHeight: '90vh' }}>
                    <IconButton
                        onClick={handleCloseModal}
                        sx={{
                            position: 'absolute',
                            top: -30,
                            right: -30,
                            color: '#fff',
                            bgcolor: 'rgba(0, 0, 0, 0.5)',
                            '&:hover': {
                                bgcolor: 'rgba(0, 0, 0, 0.8)'
                            }
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    {selectedImage && (
                        <Image
                            src={selectedImage}
                            alt="Enlarged view"
                            width={1200}
                            height={800}
                            style={{
                                objectFit: 'contain',
                                borderRadius: '8px'
                            }}
                            priority
                        />
                    )}
                </Box>
            </Modal>
        </Box>
    )
}
