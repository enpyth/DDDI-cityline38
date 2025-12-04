'use client'

import { Box, Typography } from '@mui/material'

export default function FloorplanHeader() {
    return (
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 10 } }}>
            <Typography variant="h4" sx={{ mb: 1, color: '#FCE6C8', fontFamily: 'var(--font-baskervville)' }}>
                Select a series below to explore detailed layouts,
            </Typography>
            <Typography variant="h4" sx={{ color: '#FCE6C8', fontFamily: 'var(--font-baskervville)' }}>
                room configurations and dimensions for each home.
            </Typography>
        </Box>
    )
}
