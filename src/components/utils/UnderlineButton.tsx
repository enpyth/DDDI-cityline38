import { Button, ButtonProps } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

interface UnderlineButtonProps extends ButtonProps {
    fontSize?: string | number
}

export default function UnderlineButton({ fontSize = '1rem', sx, children, ...props }: UnderlineButtonProps) {
    return (
        <Button
            variant="text"
            // endIcon={<ArrowForwardIcon />}
            sx={{
                color: '#fff',
                textTransform: 'none',
                fontSize: fontSize,
                fontFamily: 'var(--font-baskervville)',
                borderBottom: '2px solid currentColor',
                borderRadius: 0,
                px: 2,
                pb: 0.5,
                '&:hover': {
                    bgcolor: 'transparent',
                    color: '#FCE6C8',
                    opacity: 1
                },
                ...sx
            }}
            {...props}
        >
            {children}
        </Button>
    )
}
