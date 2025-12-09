'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AppBar, Toolbar, Button, Box, Container, IconButton, Fade, Menu, MenuItem, Backdrop } from '@mui/material'
import SegmentIcon from '@mui/icons-material/Segment';
import KeyboardCapslockIcon from '@mui/icons-material/KeyboardCapslock';
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const navItems = [
    { label: 'Home', href: '/' },
    { label: ' |', href: '/' },
    { label: 'Lifestyle', href: '/lifestyle' },
    { label: '| ', href: '/' },
    { label: 'Floorplans', href: '/floorplans' },
    { label: '| ', href: '/' },
    { label: 'Gallery', href: '/gallery' },
    { label: '| ', href: '/' },
    { label: 'Register', href: '/register' },
  ]

  const isHome = pathname === '/'

  const handleDrawerToggle = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setMobileOpen(true);
  }

  const handleClose = () => {
    setAnchorEl(null);
    setMobileOpen(false);
  }

  // 过滤掉包含'|'的导航项用于移动端显示
  const filteredMobileNavItems = navItems.filter(item => !item.label.includes('|'))
  // 添加一个空位（无跳转）
  const mobileNavItems = [...filteredMobileNavItems, { label: '', href: '#' }]

  const menuSx = {
    '& .MuiPaper-root': {
      width: 200,
      background: 'linear-gradient(180deg, rgba(11, 28, 51, 0.85) 0%, rgba(173, 181, 195, 0.6) 100%)',
      backdropFilter: 'blur(1px)',
      marginTop: '0px !important',
      borderRadius: 0,
      position: 'fixed',
      top: '90px !important',
      right: '0 !important',
      left: 'auto !important',
      transform: 'none !important',
      '& .MuiList-root': {
        padding: 0,
      },
      '& .MuiMenuItem-root': {
        justifyContent: 'flex-end',
        textAlign: 'right',
        color: '#FCE6C8',
        fontFamily: 'var(--font-Gotu)',
        fontSize: '1.2rem',
        padding: '15px 24px',
        '&:hover': {
          backgroundColor: 'rgba(252, 230, 200, 0.1)',
        },
      },
    },
  }

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: '#0B1C33',
        boxShadow: 'none',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
      }}
    >
      <Container maxWidth={false} sx={{ px: { xs: 2, md: 6 } }}>
        <Toolbar sx={{ justifyContent: 'space-between', minHeight: { xs: 90, md: 120 }, px: 0 }}>
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
            <Image
              src="/imgs/logo1.svg"
              alt="Cityline 38"
              width={240}
              height={80}
              priority
              style={{ height: 'auto', width: 'auto', maxHeight: '80px' }}
              className="h-[60px] md:h-[80px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'space-around', width: '80%', mx: 4 }}>
            {navItems.map((item, index) => (
              <Box key={`${item.label}-${index}`} sx={{ display: 'flex', alignItems: 'center' }}>
                {item.label === '|' ? (
                  <Box
                    component="span"
                    sx={{
                      color: '#FCE6C8',
                      fontFamily: 'var(--font-gotu)',
                      lineHeight: 1,
                      cursor: 'default'
                    }}
                  >
                    |
                  </Box>
                ) : (
                  <Button
                    component={Link}
                    href={isHome ? item.href : `${item.href}`}
                    disableRipple
                    sx={{
                      color: '#FCE6C8',
                      textTransform: 'none',
                      fontSize: '1.3rem',
                      fontFamily: 'var(--font-gotu)',
                      letterSpacing: '0.05em',
                      minWidth: 'auto',
                      px: 1,
                      borderRadius: 0,
                      borderBottom: '1px solid transparent',
                      '&:hover': {
                        backgroundColor: 'transparent',
                        opacity: 1,
                        borderBottom: '1px solid #FCE6C8',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                )}
              </Box>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            aria-label={mobileOpen ? "close drawer" : "open drawer"}
            edge="end"
            onClick={handleDrawerToggle}
            sx={{
              display: { md: 'none' },
              color: '#FCE6C8',
              mr: 0, // 移除右边距
            }}
          >
            <Box sx={{ position: 'relative', width: '24px', height: '24px' }}>
              {/* SegmentIcon with Fade transition */}
              <Fade
                in={!mobileOpen}
                timeout={300}
                unmountOnExit
              >
                <Box sx={{ position: 'absolute', top: 0, left: 0 }}>
                  <SegmentIcon />
                </Box>
              </Fade>

              {/* KeyboardCapslockIcon with Fade transition */}
              <Fade
                in={mobileOpen}
                timeout={300}
                unmountOnExit
              >
                <Box sx={{ position: 'absolute', top: 0, left: 0 }}>
                  <KeyboardCapslockIcon />
                </Box>
              </Fade>
            </Box>
          </IconButton>
        </Toolbar>
      </Container>

      {/* Mobile Dropdown Menu */}
      <Menu
        anchorEl={anchorEl}
        open={mobileOpen}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        sx={menuSx}
        // 禁用默认的位置计算，使用我们自定义的固定定位
        disableScrollLock
      >
        {/* Navigation Items */}
        {mobileNavItems.map((item) => (
          <MenuItem
            key={item.label}
            component={Link}
            href={item.href}
            onClick={handleClose}
            disableRipple
          >
            {item.label}
          </MenuItem>
        ))}
      </Menu>

      {/* Backdrop for menu */}
      <Backdrop
        open={mobileOpen}
        onClick={handleClose}
        sx={{
          display: { xs: 'block', md: 'none' },
          zIndex: (theme) => theme.zIndex.drawer - 1,
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
        }}
      />

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </AppBar>
  )
}
