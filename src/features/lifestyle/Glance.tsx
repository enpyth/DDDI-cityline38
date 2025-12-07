import { Box, Typography, Divider, Grid } from '@mui/material'
import Image from 'next/image'

export default function Glance() {
    return (
        <>
            <Typography
                variant="h4"
                sx={{
                    fontFamily: 'var(--font-baskervville)',
                    textAlign: 'center',
                    mb: { xs: 4, md: 8 },
                    color: '#FCE6C8',
                    fontSize: { xs: '2rem', md: '3rem' }
                }}
            >
                Local Amenities at a Glance
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    mb: { xs: 4, md: 8 }
                }}
            >
                <Image
                    src="/imgs/LocalAmenities.jpg"
                    alt="Local Amenities at a Glance"
                    style={{ objectFit: 'cover' }}
                    width={1000}
                    height={1000}
                />
            </Box>
        </>
    )
}