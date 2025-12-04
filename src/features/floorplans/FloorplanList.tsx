'use client'

import { Box, Container } from '@mui/material'
import FloorplanHeader from './FloorplanHeader'
import FloorplanSeries from './FloorplanSeries'

export default function FloorplanList() {
    return (
        <Box sx={{ bgcolor: '#0B1C33', color: '#fff', py: 10 }}>
            <Container maxWidth="xl">
                <FloorplanHeader />
                <FloorplanSeries />
            </Container>
        </Box>
    )
}
