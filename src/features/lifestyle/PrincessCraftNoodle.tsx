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
const PATH_SEGMENTS = [
    // --- 第 1 段：超长、超宽的右弯（主线起始）---
    // 高度：80 → 1200 (高度约1120，是标准段的2倍多)
    // 宽度：从X=200向右拉到X=700，水平跨度500
    {
        start: [200, 80],      // 起始点：中心轴偏下开始
        c1: [700, 300],        // 控制点1：向右大幅拉动，在Y=300处
        c2: [700, 800],       // 控制点2：保持在右侧，Y=1050（距终点垂直距离150）
        end: [200, 1000]       // 结束点：回到中心轴，为下一段做准备
    },

    // --- 第 2 段：长幅左弯（对称于第1段）---
    // 高度：1200 → 2000 (高度800)
    // 宽度：从X=200向左拉到X=-800，水平跨度1000
    // 计算逻辑：保持与第1段对称平滑
    // 第1段控制点c2在[700, 1050]，距终点X差500，Y差150
    // 因此本段c1取对称：[200-500, 1200+150] = [-300, 1350]
    {
        start: [200, 1000],    // 起始点：承接上一段终点
        c1: [-800, 1400],      // 控制点1：向左对称，距离起点X差500，Y差150
        c2: [-800, 1850],      // 控制点2：保持左侧，Y=1850（距终点垂直距离150）
        end: [200, 2000]       // 结束点：回到中心轴
    },

    // --- 第 3 段：中幅右弯（平滑过渡）---
    // 高度：2000 → 2600 (高度600，比前两段更紧凑)
    // 宽度：从X=200向右拉到X=500，水平跨度300（幅度减小）
    // 平滑要点：控制点c1需与上一段c2保持切线连续
    {
        start: [200, 2000],    // 起始点：承接第2段终点
        c1: [700, 2150],       // 控制点1：向右拉动，幅度300（保持与上一段c2的切线连续性）
        c2: [700, 2250],       // 控制点2：保持在右侧，Y=2450（距终点垂直距离150）
        end: [200, 2400]       // 结束点：回到中心轴
    },

    // --- 第 4 段：中幅左弯（对称于第3段）---
    // 高度：2600 → 3200 (高度600，与第3段对称)
    // 宽度：从X=200向左拉到X=-100，水平跨度300
    // 平滑要点：控制点c1需与第3段c2保持对称
    // 第3段c2在[500, 2450]，距终点X差300，Y差150
    // 对称计算：本段c1取[200-300, 2600+150] = [-100, 2750]
    {
        start: [200, 2400],    // 起始点：承接第3段终点
        c1: [-400, 2550],      // 控制点1：向左对称，距离起点X差300，Y差150
        c2: [-600, 2750],      // 控制点2：保持左侧，Y=3050（距终点垂直距离150）
        end: [600, 3100]       // 结束点：回到中心轴，完成波浪
    },
]

// Define connectors by segment index and 't' value (0-1)
// This ensures they stick to the curve even if we change the curve coordinates
const CONNECTORS = [
    // Transport (Right)
    { segmentIndex: 0, t: 0.8, length: 400, direction: -1 },
    // Education (Left)
    { segmentIndex: 1, t: 0, length: 250, direction: 1 },
    // Medical (Right)
    { segmentIndex: 1, t: 0.03, length: 370, direction: -1 },
    // Retail (Right)
    { segmentIndex: 1, t: 0.15, length: 500, direction: 1 },
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
            viewBox="0 0 400 3300"  // 增加高度以完整显示最后一段曲线
            // preserveAspectRatio="none"
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
