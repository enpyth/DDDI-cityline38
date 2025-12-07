'use client'

import { Box, Container, Divider } from '@mui/material'
import LifestyleContent from './LifestyleContent'
import Glance from './Glance'
import PrincessCraftNoodle from './PrincessCraftNoodle'
import ImgsDescription from './ImgsDescription'

export default function LifestyleList() {
    return (
        <Box
            sx={{
                position: 'relative',
                bgcolor: '#0B1C33',
                color: '#fff',
                py: 10,
                overflow: 'hidden'
            }}
        >
            <Container maxWidth={false} >
                <LifestyleContent />
                <Box sx={{ mb: 10 }}>
                    <Divider sx={{ width: '70%', mx: 'auto', borderColor: '#FCE6C8', opacity: 0.5 }} />
                </Box>

                <Box sx={{ position: 'relative' }}>
                    {/* PrincessCraftNoodle作为背景元素 */}
                    <Box sx={{ 
                        position: 'absolute', 
                        top: 0, 
                        left: '50%', 
                        transform: 'translateX(-50%)', 
                        zIndex: 0, 
                        height: '3600px',
                        width: '1200px', // Fixed width matching SVG viewBox
                        display: { xs: 'none', md: 'none', lg: 'block' } // 在移动端隐藏
                    }}>
                        <PrincessCraftNoodle
                            className="lifestyle-vector2"
                        />
                    </Box>
                    
                    {/* Glance组件 */}
                    <Box sx={{ position: 'relative', zIndex: 1 }}>
                        <Glance />
                    </Box>
                    
                    <Box sx={{ mb: 10 }}>
                        <Divider sx={{ width: '70%', mx: 'auto', borderColor: '#FCE6C8', opacity: 0.5 }} />
                    </Box>
                    
                    {/* ImgsDescription组件 - 添加padding-bottom确保曲线完整显示 */}
                    <Box sx={{ position: 'relative', zIndex: 1, pb: 10 }}>
                        <ImgsDescription />
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

