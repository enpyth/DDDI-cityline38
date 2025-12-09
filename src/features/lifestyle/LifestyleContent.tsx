'use client'

import { Box, Container, Typography, Divider } from '@mui/material'

export default function LifestyleContent() {
    return (
        <Box sx={{ bgcolor: '#0B1C33', color: '#fff', py: 4 }}>
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 8 } }}>
                    <Typography variant="h4" sx={{ mb: 4, color: '#FCE6C8', fontFamily: 'var(--font-baskervville)' }}>
                        Everard Park offers a calm, well-established neighbourhood feel, enriched by effortless access to the tram, shops, cafés, schools and green spaces.
                    </Typography>
                    <Typography variant="h4" sx={{
                        fontSize: { xs: '24px'},
                        color: '#FCE6C8',
                        fontFamily: 'var(--font-baskervville)'
                    }}>
                        This sssis everyday living made simple — a lifestyle that balances urban connectivity with a quiet, welcoming community rhythm.
                    </Typography>
                </Box>

            </Container>
        </Box>
    )
}



