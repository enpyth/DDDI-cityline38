'use client'

import Link from 'next/link'
import { Box, Container, Typography, Grid, Divider } from '@mui/material'
import Image from 'next/image'

export default function Footer() {
  return (
    <Box component="footer" sx={{ mt: 'auto' }}>
      {/* Top Section - Grey Background */}
      <Box sx={{ bgcolor: '#54565A', color: '#fff', py: { xs: 2, md: 4 } }}>
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            {/* Column 1: Logo */}
            <Grid size={{ xs: 4, md: 3 }} sx={{ position: 'relative', mb: { xs: 0, md: 0 } }}>
              {/* <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: { xs: 'flex-start', md: 'flex-start' }, height: '100%', pr: { xs: 2, md: 4 } }}> */}
                <Image src="/imgs/white.png" alt="Cityline 38" width={150} height={50} style={{ height: 'auto', width: 'auto', maxHeight: '300px' }} priority />
              {/* </Box> */}
              {/* Vertical Divider for Desktop and Mobile */}
              <Box
                sx={{
                  position: 'absolute',
                  right: 0,
                  top: '0%',
                  bottom: { xs: '0%', md: '20%' },
                  width: '2px',
                  bgcolor: 'rgba(255,255,255,0.3)',
                  display: 'block'
                }}
              />
            </Grid>

            {/* Column 2: Quick Links */}
            <Grid size={{ xs: 4, md: 2 }} sx={{ pl: { xs: 0, md: 4 } }}>
              <Typography variant="h6" sx={{ fontFamily: 'var(--font-gotu)', mb: 2, fontSize: { xs: '1rem', md: '1.5rem' } }}>
                Quick Links
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 1, md: 1.5 } }}>
                {['Home', 'Floorplans', 'Gallery', 'Register'].map((text) => (
                  <Link
                    key={text}
                    href={`/${text.toLowerCase() === 'home' ? '' : text.toLowerCase()}`}
                    style={{ color: '#fff', textDecoration: 'none', fontFamily: 'var(--font-gotu)' }}
                  >
                    <Typography sx={{ fontSize: { xs: '0.85rem', md: '1rem' } }}>{text}</Typography>
                  </Link>
                ))}
              </Box>
            </Grid>

            {/* Column 3: Terms */}
            <Grid size={{ xs: 4, md: 2 }} sx={{ pl: { xs: 1, md: 0 } }}>
              <Typography variant="h6" sx={{ fontFamily: 'var(--font-gotu)', mb: 2, fontSize: { xs: '1rem', md: '1.5rem' } }}>
                Terms
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 1, md: 1.5 } }}>
                <Link href="/terms" style={{ color: '#fff', textDecoration: 'none', fontFamily: 'var(--font-gotu)' }}>
                  <Typography sx={{ fontSize: { xs: '0.85rem', md: '1rem' } }}>Terms & Conditions</Typography>
                </Link>
                <Link href="/privacy" style={{ color: '#fff', textDecoration: 'none', fontFamily: 'var(--font-gotu)' }}>
                  <Typography sx={{ fontSize: { xs: '0.85rem', md: '1rem' } }}>Privacy Policy</Typography>
                </Link>
              </Box>
            </Grid>

            {/* Column 4: Contact Info */}
            <Grid size={{ xs: 12, md: 5 }} sx={{ mt: { xs: 4, md: 0 } }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Box>
                  <Typography variant="body1" sx={{ fontFamily: 'var(--font-gotu)', mb: 0.5, fontSize: '1.1rem' }}>
                    Development and Project Management:
                  </Typography>
                  <Typography variant="h6" sx={{ fontFamily: 'var(--font-gotu)', textDecoration: 'underline', textUnderlineOffset: '8px', fontSize: '1.25rem' }}>
                    <a href="https://pm.dddi.com.au/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                      Cyberate Project Management
                    </a>
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="body1" sx={{ fontFamily: 'var(--font-gotu)', mb: 0.5, fontSize: '1.1rem' }}>
                    Sales and Marketing Management
                  </Typography>
                  <Typography variant="h6" sx={{ fontFamily: 'var(--font-gotu)', textDecoration: 'underline', textUnderlineOffset: '8px', fontSize: '1.25rem' }}>
                    <a href="https://www.dddi.com.au/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                      DDDI Group
                    </a>
                  </Typography>
                </Box>

                <Box sx={{ fontFamily: 'var(--font-gotu)', mt: 1, color: 'rgba(255,255,255,0.9)' }}>
                  <Typography variant="body1" sx={{ mb: 0.5, whiteSpace: 'nowrap' }}>
                    Address: L2/135 Fullarton Rd, Rose Park, SA 5067
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 0.5 }}>
                    Phone: (08) 7110 0111
                  </Typography>
                  <Typography variant="body1">
                    Email: <a href="mailto:info@dddi.com.au" style={{ color: 'inherit' }}>info@dddi.com.au</a>
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Bottom Section - Dark Blue Background */}
      <Box sx={{ bgcolor: '#0B1C33', color: '#fff', py: 2 }}>
        <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
          <Typography variant="body1" sx={{ mb: 1, fontFamily: 'var(--font-gotu)' }}>
            Acknowledgement of Country
          </Typography>
          <Typography variant="body2" sx={{ display: 'block', color: 'grey.400', mx: 'auto', fontFamily: 'var(--font-gotu)' }}>
            We acknowledge the Kaurna people as the Traditional Custodians of this land, and pay our respects to Elders past, present, and emerging.
          </Typography>

          <Divider sx={{ bgcolor: 'rgba(255,255,255,0.2)', my: 1, width: '60%', mx: 'auto' }} />

          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, flexWrap: 'wrap', color: '#FCE6C8' }}>
            <Typography variant="caption" sx={{ fontFamily: 'var(--font-gotu)', fontSize: '0.8rem' }}>
              All renders are artist impressions and indicative only
            </Typography>
            <Typography variant="caption" sx={{ fontFamily: 'var(--font-gotu)', fontSize: '0.8rem' }}>
              Copyright 2025
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}
