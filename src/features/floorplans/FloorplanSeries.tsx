'use client'

import { Box, Typography, Grid, Divider } from '@mui/material'
import UnderlineButton from '@/components/utils/UnderlineButton'

const FLOORPLAN_SERIES = [
    {
        title: "Balcony Light Living Series",
        lot: "(Lot 1-7)",
        description: "A light and efficient three-bedroom layout featuring generous balconies and multi-aspect natural light — ideal for first homebuyers and investors.",
        image: "/imgs/01.jpg",
        alt: "Balcony Light Living Series",
        link: "#"
    },
    {
        title: "Serene Master Living Series",
        lot: "(Lot 8-13)",
        description: "A spacious four-bedroom layout with a private master suite and well-defined circulation, offering long-term comfort for growing families.",
        image: "/imgs/02.jpg",
        alt: "Serene Master Living Series",
        link: "#"
    }
]

export default function FloorplanSeries() {
    return (
        <>
            {FLOORPLAN_SERIES.map((series, index) => {
                const isEven = index % 2 === 0
                return (
                    <Box key={index}>
                        <Grid container spacing={6} alignItems="center" sx={{ mb: index !== FLOORPLAN_SERIES.length - 1 ? 10 : 0 }}>
                            <Grid size={{ xs: 12, md: 6 }} sx={{ order: { xs: 1, md: isEven ? 1 : 2 } }}>
                                <Box
                                    border={2}
                                    borderColor="#FCE6C8"
                                    component="img"
                                    src={series.image}
                                    alt={series.alt}
                                    sx={{
                                        width: '100%',
                                        borderRadius: 2,
                                        height: '100%',
                                        aspectRatio: '16/9',
                                        objectFit: 'cover'
                                    }}
                                />
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }} sx={{ order: { xs: 2, md: isEven ? 2 : 1 } }}>
                                <Typography variant="h4" sx={{ fontFamily: 'var(--font-baskervville)', mb: 2 }}>
                                    {series.title} <br /> {series.lot}
                                </Typography>
                                <Typography variant="h5" sx={{ lineHeight: 1.8, color: '#ccc', fontFamily: 'var(--font-gotu)' }}>
                                    {series.description}
                                </Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
                                    <UnderlineButton fontSize="2rem" href={series.link}>
                                        Learn More
                                    </UnderlineButton>
                                </Box>
                            </Grid>
                        </Grid>

                        {index !== FLOORPLAN_SERIES.length - 1 && (
                            <Box sx={{ mb: 10 }}>
                                <Divider sx={{ width: '70%', mx: 'auto', borderColor: '#FCE6C8', opacity: 0.5 }} />
                            </Box>
                        )}
                    </Box>
                )
            })}
        </>
    )
}
