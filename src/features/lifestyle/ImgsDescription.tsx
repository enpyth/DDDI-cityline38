'use client'

import React from 'react'
import { Box, Typography, Grid, Divider } from '@mui/material'
import Image from 'next/image'

const AMENITIES = [
    {
        title: "Transport",
        content: "Tram: Forestville (Stop 4)/ Black Forest(Stop 5)\nBus: Anzac Hwy (Stop 4)\nAnzac Highway",
        align: "left",
        offset: { md: '10%' }
    },
    {
        title: "Medical",
        content: "Ashford Hospital",
        align: "left",
        offset: { md: '5%' }
    },
    {
        title: "Education",
        content: "Adelaide High\nPlympton International College\nSturt Street Community School",
        align: "right",
        offset: { md: '15%' }
    },
    {
        title: "Retail & Leisure",
        content: "Kurralta Central\nWayville Showground (Adelaide Showground)\nGoodwood Road (Shopping Precinct)",
        align: "right",
        offset: { md: '15%' }
    }
]

const SERIES = [
    {
        title: "Connected Living, Simplified",
        description: "With the tram just minutes away and the CBD around 10 minutes from your door, daily travel becomes effortless. Cityline 38 offers rare urban connectivity while retaining the calm and order of a residential neighbourhood.",
        image: "/imgs/01.jpg",
        alt: "Connected Living, Simplified",
        align: "left"
    },
    {
        title: "Cafés, Walkability and a Calmer Rhythm",
        description: "Tree-lined paths, local cafés and nearby green spaces bring a gentle rhythm to everyday life. Whether it’s a morning walk, a weekend coffee, or exploring the dining spots of Goodwood Road, the neighbourhood feels warm, welcoming and effortlessly enjoyable.",
        image: "/imgs/02.jpg",
        alt: "Cafés, Walkability and a Calmer Rhythm",
        align: "right"
    },
    {
        title: "Daily Convenience Within Walking Distance",
        description: "Shops, schools, sports facilities and local markets sit comfortably within reach. Everyday essentials become simple, with most conveniences easily accessed.",
        image: "/imgs/02.jpg",
        alt: "Daily Convenience Within Walking Distance",
        align: "left"
    }
]

export default function ImgsDescription() {
    return (
        <Box sx={{ position: 'relative', pb: 2 }}>
            {/* Amenities Section - Desktop */}
            <Box sx={{ display: { xs: 'none', md: 'block' }, mb: 4 }}>
                <Box sx={{ mb: 4, position: 'relative' }}>
                    {/* Transport */}
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 8, pr: '29%' }}>
                        <DesktopAmenityItem item={AMENITIES[0]} />
                    </Box>

                    {/* Education (Left) & Medical (Right) */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 8 }}>
                        <Box sx={{ width: '42%', pl: '15%', mt: '2.5%' }}>
                            <DesktopAmenityItem item={AMENITIES[2]} />
                        </Box>
                        <Box sx={{ width: '45%', pr: '25%', display: 'flex', justifyContent: 'flex-end' }}>
                            <DesktopAmenityItem item={AMENITIES[1]} />
                        </Box>
                    </Box>

                    {/* Retail */}
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', pr: '25%' }}>
                        <DesktopAmenityItem item={AMENITIES[3]} />
                    </Box>
                </Box>
            </Box>

            {/* Amenities Section - Mobile */}
            <Box sx={{ display: { xs: 'block', md: 'none' }, mb: 4 }}>
                <Box sx={{ mb: 4, position: 'relative' }}>
                    {/* Transport - 左对齐，显示左border */}
                    <Box sx={{ display: 'flex', justifyContent: 'flex-start', mb: 8, pl: 2, pr: 2 }}>
                        <MobileAmenityItem item={AMENITIES[0]} />
                    </Box>

                    {/* Education - 右对齐，显示右border */}
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 8, pl: 2, pr: 2 }}>
                        <MobileAmenityItem item={AMENITIES[2]} />
                    </Box>

                    {/* Medical - 左对齐，显示左border */}
                    <Box sx={{ display: 'flex', justifyContent: 'flex-start', mb: 8, pl: 2, pr: 2 }}>
                        <MobileAmenityItem item={AMENITIES[1]} />
                    </Box>

                    {/* Retail - 右对齐，显示右border */}
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', pl: 2, pr: 2 }}>
                        <MobileAmenityItem item={AMENITIES[3]} />
                    </Box>
                </Box>
            </Box>

            {/* Series Section - Desktop */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'column', gap: 15 }}>
                <Divider sx={{ width: '70%', mx: 'auto', borderColor: '#FCE6C8', opacity: 0.5 }} />
                {SERIES.map((series, index) => (
                    <React.Fragment key={index}>
                        <DesktopSeriesItem item={series} />
                        {index < SERIES.length - 1 && (
                            <Divider sx={{ width: '70%', mx: 'auto', borderColor: '#FCE6C8', opacity: 0.3 }} />
                        )}
                    </React.Fragment>
                ))}
            </Box>

            {/* Series Section - Mobile */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'column', gap: 8 }}>
                <Divider sx={{ width: '70%', mx: 'auto', borderColor: '#FCE6C8', opacity: 0.5 }} />
                {SERIES.map((series, index) => (
                    <React.Fragment key={index}>
                        <MobileSeriesItem item={series} />
                        {index < SERIES.length - 1 && (
                            <Divider sx={{ width: '70%', mx: 'auto', borderColor: '#FCE6C8', opacity: 0.3 }} />
                        )}
                    </React.Fragment>
                ))}
            </Box>
        </Box>
    )
}

// 桌面端 AmenityItem 组件
function DesktopAmenityItem({ item }: { item: typeof AMENITIES[0] }) {
    // 保持原来的文本对齐方式，不受align属性修改的影响
    const originalAligns: { [key: string]: string } = {
        "Transport": "right",
        "Medical": "left",
        "Education": "right",
        "Retail & Leisure": "left"
    }
    const isRight = originalAligns[item.title] === 'right'
    return (
        <Box sx={{ 
            textAlign: isRight ? 'right' : 'left', 
            maxWidth: '400px'
        }}>
            <Typography variant="h5" sx={{ fontFamily: 'var(--font-baskervville)', mb: 1 }}>
                {item.title}
            </Typography>
            <Typography
                variant="h6"
                sx={{
                    whiteSpace: 'pre-wrap',
                    fontFamily: 'var(--font-gotu)',
                    fontSize: '1rem',
                    lineHeight: 1.6,
                    color: '#ccc'
                }}
            >
                {item.content}
            </Typography>
        </Box>
    )
}

// 移动端 AmenityItem 组件
function MobileAmenityItem({ item }: { item: typeof AMENITIES[0] }) {
    const isRight = item.align === 'right'
    return (
        <Box sx={{ 
            textAlign: 'left', 
            maxWidth: '400px',
            position: 'relative',
            paddingLeft: isRight ? 0 : '20px',
            paddingRight: isRight ? '20px' : 0,
            marginLeft: isRight ? 0 : '20px',
            marginRight: isRight ? '20px' : 0
        }}>
            {/* 移动端添加装饰条（左右交替） */}
            <Box sx={{ 
                position: 'absolute',
                left: isRight ? 'auto' : '-20px',
                right: isRight ? '-20px' : 'auto',
                top: 0,
                height: '100%',
                width: '2px',
                backgroundColor: '#FCE6C8'
            }} />
            
            <Typography variant="h5" sx={{ fontFamily: 'var(--font-baskervville)', mb: 1 }}>
                {item.title}
            </Typography>
            <Typography
                variant="h6"
                sx={{
                    whiteSpace: 'pre-wrap',
                    fontFamily: 'var(--font-gotu)',
                    fontSize: '0.9rem',
                    lineHeight: 1.6,
                    color: '#ccc'
                }}
            >
                {item.content}
            </Typography>
        </Box>
    )
}

// 桌面端 SeriesItem 组件
function DesktopSeriesItem({ item }: { item: typeof SERIES[0] }) {
    const isRight = item.align === 'right'

    return (
        <Grid container spacing={4} alignItems="center">
            {/* Image Side */}
            <Grid size={{ md: 6 }} sx={{ order: isRight ? 2 : 1 }}>
                <Box
                    sx={{
                        position: 'relative',
                        width: '100%',
                        aspectRatio: '16/9',
                        borderRadius: 2,
                        overflow: 'hidden',
                        border: '2px solid #FCE6C8'
                    }}
                >
                    <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </Box>
            </Grid>

            {/* Text Side */}
            <Grid size={{ md: 6 }} sx={{ order: isRight ? 1 : 2 }}>
                <Box sx={{ textAlign: isRight ? 'right' : 'left', px: 4 }}>
                    <Typography variant="h4" sx={{ fontFamily: 'var(--font-baskervville)', mb: 3 }}>
                        {item.title}
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            fontFamily: 'var(--font-gotu)',
                            lineHeight: 1.8,
                            color: '#ccc',
                            fontSize: '1.1rem'
                        }}
                    >
                        {item.description}
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    )
}

// 移动端 SeriesItem 组件
function MobileSeriesItem({ item }: { item: typeof SERIES[0] }) {
    return (
        <Box>
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    borderRadius: 2,
                    overflow: 'hidden',
                    border: '2px solid #FCE6C8',
                    mb: 4
                }}
            >
                <Image
                    src={item.image}
                    alt={item.alt}
                    width={1000}
                    height={600}
                    style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                />
            </Box>
            <Box sx={{ 
                border: '2px solid #FCE6C8', 
                borderRadius: 2, 
                padding: 4,
                backgroundColor: 'rgba(0, 0, 0, 0.3)'
            }}>
                <Typography variant="h5" sx={{ fontFamily: 'var(--font-baskervville)', mb: 2, color: '#FCE6C8' }}>
                    {item.title}
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        fontFamily: 'var(--font-gotu)',
                        lineHeight: 1.8,
                        color: '#ccc',
                        fontSize: '0.95rem'
                    }}
                >
                    {item.description}
                </Typography>
            </Box>
        </Box>
    )
}


