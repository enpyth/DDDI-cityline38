// Mobile device InteractiveCard 
// Expandable card with image, title, description, and link
// Click image to expand, click again to collapse

'use client'

import React, { useState } from 'react';
import { Box, Typography, Link } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface InteractiveCardProps {
    imageSrc: string;
    title: string;
    description?: string;
    linkText?: string;
    href: string;
    sx?: any;
}

export default function InteractiveCard({
    imageSrc,
    title,
    description,
    linkText = 'View More',
    href,
    sx,
}: InteractiveCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <Box
            mt={2}
            sx={{
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                borderRadius: 1,
                border: '1px solid #fff',
                borderColor: isExpanded ? '#FCE6C8' : '#fff',
                ...sx,
            }}
        >
            {/* Background Image with Gradient */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `linear-gradient(to bottom right, rgba(11, 28, 51, 0.8) 30%, rgba(11, 28, 51, 0.4) 70%, transparent 80% ), url(${imageSrc})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transition: 'all 0.5s ease',
                    opacity: isExpanded ? 1 : 0.5, // Clear when expanded
                    zIndex: 0,
                }}
            />
            {/* Subtle Overlay for Text Readability */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    bgcolor: 'rgba(0, 0, 0, 0.1)',
                    opacity: isExpanded ? 0.1 : 0,
                    transition: 'opacity 0.5s ease',
                    zIndex: 1,
                }}
            />

            {/* Collapsed State (State 1) */}
            {/* Title Button - Triggers Expansion */}
            <Box
                onClick={() => setIsExpanded(!isExpanded)}
                sx={{
                    padding: '1rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    zIndex: 1,
                    '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    },
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography
                        variant="h5"
                        component="h3"
                        sx={{
                            fontFamily: 'var(--font-baskervville)',
                            color: '#FCE6C8',
                            textAlign: 'left',
                            my: 2
                        }}
                    >
                        {title}
                    </Typography>
                    {isExpanded ? <ExpandLessIcon sx={{ color: '#FCE6C8', fontSize: 45 }} /> : <ExpandMoreIcon sx={{ color: '#FCE6C8', fontSize: 45 }} />}
                </Box>
            </Box>

            {/* Expanded State (State 2) - Only visible when expanded */}
            <Box
                sx={{
                    opacity: isExpanded ? 1 : 0,
                    height: isExpanded ? 'auto' : 0,
                    overflow: 'hidden',
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                {/* Content Area */}
                <Box sx={{ px: 4, minHeight: 250, display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 1 }}>
                    {/* Description */}
                    {description && (
                        <Typography
                            variant="h6"
                            sx={{
                                color: 'rgba(255, 255, 255, 0.9)',
                                fontFamily: 'var(--font-gotu)',
                                lineHeight: 1.5,
                            }}
                        >
                            {description}
                        </Typography>
                    )}

                    {/* View More Button */}
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8, mb: 4 }}>
                        <Link
                            href={href}
                            sx={{
                                display: 'inline-block',
                                padding: '0.75rem 1.7rem',
                                borderRadius: 1,
                                textDecoration: 'none',
                                transition: 'all 0.3s ease',
                                backgroundColor: 'transparent',
                                backdropFilter: 'blur(2px)',
                                border: '1px solid rgba(255, 255, 255, 0.8)',
                                color: '#fff',
                                fontWeight: 700,
                                fontFamily: 'var(--font-baskervville)',
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    borderColor: '#fff',
                                },
                            }}
                        >
                            {linkText}
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};
