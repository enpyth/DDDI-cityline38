import type React from 'react'

type PrincessCraftNoodleProps = {
    className?: string
}

// Cubic Bezier helper
// B(t) = (1-t)^3 P0 + 3(1-t)^2 t P1 + 3(1-t) t^2 P2 + t^3 P3
const getCubicBezierPoint = (t: number, p0: number[], p1: number[], p2: number[], p3: number[]) => {
    const c0 = Math.pow(1 - t, 3)
    const c1 = 3 * Math.pow(1 - t, 2) * t
    const c2 = 3 * (1 - t) * Math.pow(t, 2)
    const c3 = Math.pow(t, 3)

    const x = c0 * p0[0] + c1 * p1[0] + c2 * p2[0] + c3 * p3[0]
    const y = c0 * p0[1] + c1 * p1[1] + c2 * p2[1] + c3 * p3[1]

    return { x, y }
}

// Define the main curve segments explicitly
// This allows us to calculate exact points along the curve
// All coordinates are within viewBox: 0 0 1200 3300 (x from 0 to 1200, y from 0 to 3300)
const PATH_SEGMENTS = [
    // --- Segment 1: Large right curve (main line start) ---  
    {
        start: [800, 80],      // Start: center axis, lower position
        c1: [1100, 300],       // Control1: pull right significantly at Y=300
        c2: [1100, 800],       // Control2: keep right, at Y=800
        end: [800, 1000]       // End: back to center axis
    },

    // --- Segment 2: Large left curve (symmetric to segment 1) ---  
    {
        start: [800, 1000],    // Start: connect to segment 1 end
        c1: [200, 1400],       // Control1: pull left significantly at Y=1400
        c2: [200, 1850],       // Control2: keep left, at Y=1850
        end: [800, 2200]       // End: back to center axis
    },

    // --- Segment 3: Medium right curve (smooth transition) ---  
    {
        start: [800, 2200],    // Start: connect to segment 2 end
        c1: [1350, 2450],      // Control1: pull right moderately at Y=2150
        c2: [1350, 2550],      // Control2: keep right, at Y=2250
        end: [800, 2800]       // End: back to center axis
    },

    // --- Segment 4: Medium left curve (symmetric to segment 3) ---  
    {
        start: [800, 2800],    // Start: connect to segment 3 end
        c1: [100, 3050],       // Control1: pull left moderately at Y=3150
        c2: [100, 3250],       // Control2: keep left, at Y=2350
        end: [1100, 3350]       // End: back to center axis, complete the wave
    },
]

// Define connectors by segment index and 't' value (0-1)
// This ensures they stick to the curve even if we change the curve coordinates
const CONNECTORS = [
    // Transport (Right)
    { segmentIndex: 1, t: 0.025, length: 400, direction: -1 },
    // Education (Left)
    { segmentIndex: 1, t: 0.175, length: 350, direction: 1 },
    // Medical (Right)
    { segmentIndex: 1, t: 0.205, length: 370, direction: -1 },
    // Retail (Right)
    { segmentIndex: 1, t: 0.35, length: 500, direction: 1 },
]

/**
 * Decorative lifestyle connector line inspired by Figma "Vector 2".
 * This implementation dynamically calculates connector points on the curve
 * to ensure perfect alignment without gaps.
 */
export default function PrincessCraftNoodle({ className }: PrincessCraftNoodleProps) {
    // Generate the main path string d attribute
    const mainPathD = PATH_SEGMENTS.map((seg, i) => {
        if (i === 0) {
            return `M ${seg.start[0]} ${seg.start[1]} C ${seg.c1[0]} ${seg.c1[1]} ${seg.c2[0]} ${seg.c2[1]} ${seg.end[0]} ${seg.end[1]}`
        }
        // For subsequent segments, we can just output the C command
        return `C ${seg.c1[0]} ${seg.c1[1]} ${seg.c2[0]} ${seg.c2[1]} ${seg.end[0]} ${seg.end[1]}`
    }).join(' ')

    return (
        <svg
            className={className}
            viewBox="0 0 1200 3500"  // 简化为更直观的范围
            preserveAspectRatio="xMidYMin meet"
            width="100%"
            height="100%"
            aria-hidden="true"
        >
            <defs>
                {/* 棱形标记 - 用于曲线起点 */}
                <marker
                    id="vector2-diamond"
                    markerWidth="5"
                    markerHeight="5"
                    refX="2.5"
                    refY="2.5"
                    orient="auto"
                >
                    <path d="M2.5 0 L5 2.5 L2.5 5 L0 2.5 z" fill="#FCE6C8" />
                </marker>
                
                {/* 箭头标记 - 用于曲线终点 */}
                <marker
                    id="vector2-arrow"
                    markerWidth="12"
                    markerHeight="12"
                    refX="6"
                    refY="6"
                    orient="auto"
                >
                    <path d="M0 0 L12 6 L0 12 z" fill="#FCE6C8" />
                </marker>
            </defs>

            {/* Main flowing curve */}
            <path
                d={mainPathD}
                fill="none"
                stroke="#FCE6C8"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                markerStart="url(#vector2-diamond)"  // 起点添加棱形标记
                markerEnd="url(#vector2-arrow)"      // 终点添加箭头标记
            />

            {/* Dynamic Connector Lines */}
            {CONNECTORS.map((conn, i) => {
                const seg = PATH_SEGMENTS[conn.segmentIndex]
                const point = getCubicBezierPoint(conn.t, seg.start, seg.c1, seg.c2, seg.end)
                const endX = point.x + (conn.length * conn.direction)

                return (
                    <path
                        key={i}
                        d={`M ${point.x} ${point.y} L ${endX} ${point.y}`}
                        fill="none"
                        stroke="#FCE6C8"
                        strokeWidth="2"
                        strokeLinecap="round"
                        markerEnd="url(#vector2-diamond)"
                    />
                )
            })}
        </svg>
    )
}
