import { Box, Typography, TypographyProps } from '@mui/material'

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
  titleVariant = 'h4',
  subtitleVariant = 'h5',
  sx,
  titleSx,
  subtitleSx
}: SectionHeaderProps) {
  return (
    <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 }, ...sx }}>
      <Typography
        variant={titleVariant}
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
            px: { xs: 2, md: 0 },
            ...subtitleSx
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  )
}
