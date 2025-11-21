'use client'

import { useState } from 'react'
import Link from 'next/link'
import { AppBar, Toolbar, Button, Box, Container, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Floorplans', href: '/floorplans' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Register', href: '/register' },
  ]

  const isHome = pathname === '/'

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', bgcolor: '#0B1C33', height: '100%', color: '#fff', pt: 4 }}>
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center' }}>
        <img src="/imgs/logo1.svg" alt="Cityline 38" style={{ height: '50px' }} />
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton component={Link} href={item.href} sx={{ textAlign: 'center', py: 2 }}>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  sx: {
                    color: '#FCE6C8',
                    fontFamily: 'serif',
                    fontSize: '1.2rem'
                  }
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

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
        <Toolbar sx={{ justifyContent: 'space-between', minHeight: { xs: 70, md: 100 }, px: 0 }}>
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/imgs/logo1.svg" alt="Cityline 38" style={{ height: '40px', maxHeight: '60px' }} className="h-[40px] md:h-[60px]" />
          </Link>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 4 }}>
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

          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' }, color: '#FCE6C8' }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240, bgcolor: '#0B1C33' },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  )
}
