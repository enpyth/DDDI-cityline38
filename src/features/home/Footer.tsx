'use client'

import Link from 'next/link'
import { Box, Container, Typography, Grid } from '@mui/material'

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#0B1C33',
        color: '#fff',
        pt: 8,
        pb: 6,
        mt: 'auto',
        borderTop: '1px solid rgba(255,255,255,0.1)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Column 1: Logos */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'flex-start' }}>
              <img src="/imgs/logo1.svg" alt="Cityline 38" style={{ height: 40 }} />
              <img src="/imgs/logo2.svg" alt="DDDI Group" style={{ height: 40 }} />
              <img src="/imgs/logo3.svg" alt="Cyberate Project Management" style={{ height: 40 }} />
            </Box>
          </Grid>

          {/* Column 2: Contact Info */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                  Development and Project Management
                </Typography>
                <Typography variant="body2" color="grey.400">
                  Cyberate Project Management
                </Typography>
              </Box>

              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                  Sales and Marketing Management
                </Typography>
                <Typography variant="body2" color="grey.400">
                  DDDI Group
                </Typography>
              </Box>

              <Box>
                <Typography variant="body2" sx={{ mb: 0.5 }}>
                  Address: L2/135 Fullarton Rd, Rose Park, SA 5067
                </Typography>
                <Typography variant="body2" sx={{ mb: 0.5 }}>
                  Phone: (08) 7110 0111
                </Typography>
                <Typography variant="body2">
                  Email: <Link href="mailto:info@dddi.com.au" style={{ color: 'inherit', textDecoration: 'underline' }}>info@dddi.com.au</Link>
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Column 3: Legal & Acknowledgement */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: { xs: 'flex-start', md: 'flex-end' }, textAlign: { xs: 'left', md: 'right' } }}>
              <Link href="#" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.875rem' }}>
                Terms & Conditions
              </Link>
              <Link href="#" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.875rem' }}>
                Privacy Policy
              </Link>

              <Typography variant="caption" color="grey.400" sx={{ mt: 4, maxWidth: '300px' }}>
                Acknowledgement of Country We acknowledge the Kaurna people as the Traditional Custodians of this land, and pay our respects to Elders past, present, and emerging.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
