'use client'

import { Box, Typography, TypographyProps, useTheme, useMediaQuery } from '@mui/material'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  titleVariant?: 'h3' | 'h4' | 'h5'
  subtitleVariant?: 'h4' | 'h5' | 'h6'
  sx?: any
  titleSx?: TypographyProps['sx']
  subtitleSx?: TypographyProps['sx']
}

export default function SectionHeader({
  title,
  subtitle,
  titleVariant,
  subtitleVariant = 'h6',
  sx,
  titleSx,
  subtitleSx
}: SectionHeaderProps) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  
  // Set default title variant to h5 on mobile, h4 on desktop
  // Respect explicitly passed titleVariant prop if provided
  const effectiveTitleVariant = titleVariant ?? (isMobile ? 'h5' : 'h4')
  return (
    <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 8 }, ...sx }}>
      <Typography
        variant={effectiveTitleVariant}
        sx={{
          fontFamily: 'var(--font-baskervville)',
          mb: subtitle ? 3 : 0,
          color: '#FCE6C8',
          lineHeight: 1.3,
          ...titleSx
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant={subtitleVariant}
          sx={{
            color: '#FCE6C8',
            mx: 'auto',
            fontFamily: 'var(--font-gotu)',
            lineHeight: 1.6,
            px: { xs: 8, md: 4 },
            ...subtitleSx
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  )
}
