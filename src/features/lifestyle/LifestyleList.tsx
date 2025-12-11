'use client'

import { Box, Container, Divider } from '@mui/material'
import LifestyleContent from './LifestyleContent'
import Glance from './Glance'
import PrincessCraftNoodle from './PrincessCraftNoodle'
import ImgsDescription from './ImgsDescription'
import SectionHeader from '@/components/utils/SectionHeader'

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
                <Box textAlign={'center'} sx={{ mx: { xs: 2, md: 30 } }}>
                    <SectionHeader title="Everard Park offers a calm, well-established neighbourhood feel, enriched by effortless access to the tram, shops, cafés, schools and green spaces."/>
                    <SectionHeader title="This is everyday living made simple — a lifestyle that balances urban connectivity with a quiet, welcoming community rhythm." />
                </Box>

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

