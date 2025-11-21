'use client'

import Link from 'next/link'
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Floorplans', href: '/floorplans' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Register', href: '/register' },
  ]

  const isHome = pathname === '/'

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: '#0B1C33',
        boxShadow: 'none',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', minHeight: 100, px: 0 }}>
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/imgs/logo1.svg" alt="Cityline 38" style={{ height: '60px' }} />
          </Link>

          {/* Navigation */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            {navItems.map((item, index) => (
              <Box key={item.label} sx={{ display: 'flex', alignItems: 'center' }}>
                <Button
                  component={Link}
                  href={isHome ? item.href : `${item.href}`}
                  sx={{
                    color: '#FCE6C8',
                    textTransform: 'none',
                    fontSize: '1rem',
                    letterSpacing: '0.05em',
                    fontWeight: 300,
                    opacity: 0.9,
                    minWidth: 'auto',
                    px: 2,
                    '&:hover': {
                      backgroundColor: 'transparent',
                      opacity: 1,
                    },
                  }}
                >
                  {item.label}
                </Button>
                {index < navItems.length - 1 && (
                  <Box
                    component="span"
                    sx={{
                      color: '#FCE6C8',
                      mx: 2,
                      opacity: 0.5,
                      fontSize: '1.2rem',
                      fontWeight: 300
                    }}
                  >
                    |
                  </Box>
                )}
              </Box>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
