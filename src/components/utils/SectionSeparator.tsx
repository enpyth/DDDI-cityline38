'use client'

import { Box, Divider } from '@mui/material'

export default function SectionSeparator() {
    return (
        <Box sx={{ bgcolor: '#0B1C33', width: '100%' }}>
            <Divider sx={{ width: '70%', mx: 'auto', borderColor: '#FCE6C8', opacity: 0.5 }} />
        </Box>
    )
}
