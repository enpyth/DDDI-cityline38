import { Container, Typography, useTheme } from '@mui/material'

interface FloorplanTitleSectionProps {
    title: string
    lot?: string
    description: string[]
}

export default function FloorplanTitleSection({ title, lot, description }: FloorplanTitleSectionProps) {
    const theme = useTheme();
    
    return (
        <Container maxWidth="md" sx={{ mb: 8 }}>
            <Typography 
                variant="h4" 
                sx={{ 
                    fontFamily: 'var(--font-gotu)', 
                    mb: 2, 
                    textAlign: 'center',
                    [theme.breakpoints.down('md')]: {
                        fontSize: '1.5rem', // 移动端使用h5字号
                    }
                }} 
            >
                {title} {lot && <span><br />{lot}</span>}
            </Typography>
            {description.map((item, index) => (
                <Typography 
                    key={index} 
                    variant="h5" 
                    sx={{ 
                        lineHeight: 1.8, 
                        color: '#ccc', 
                        fontFamily: 'var(--font-gotu)', 
                        mx: 2, 
                        textAlign: 'center',
                        [theme.breakpoints.down('md')]: {
                            fontSize: '1.25rem', // 移动端使用h6字号
                        }
                    }}
                >
                    {item}
                </Typography>
            ))}
        </Container>
    )
}