'use client'

import { Box, Container, ImageList, ImageListItem, useMediaQuery, useTheme } from '@mui/material'

const itemData = [
    { img: '/imgs/01.jpg', title: 'Exterior' },
    { img: '/imgs/02.jpg', title: 'Living Room' },
    { img: '/imgs/03.jpg', title: 'Kitchen' },
    { img: '/imgs/04.jpg', title: 'Bedroom' },
    { img: '/imgs/05.jpg', title: 'Bathroom' },
    { img: '/imgs/06.jpg', title: 'Balcony' },
    { img: '/imgs/07.jpg', title: 'Detail' },
    { img: '/imgs/08.jpg', title: 'Street View' },
]

export default function GalleryGrid() {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const isTablet = useMediaQuery(theme.breakpoints.down('md'))

    const cols = isMobile ? 1 : isTablet ? 2 : 3

    return (
        <Box sx={{ bgcolor: '#0B1C33', py: 10 }}>
            <Container maxWidth="lg">
                <ImageList variant="masonry" cols={cols} gap={16}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                                style={{ borderRadius: '8px' }}
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Container>
        </Box>
    )
}
