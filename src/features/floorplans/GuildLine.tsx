import { Box, Typography, useTheme, useMediaQuery } from '@mui/material'
import { useEffect, useState } from 'react'

interface Point {
  x: number  // 固定像素值
  y: number  // 固定像素值
}

interface BranchConfig {
  // 分支线的交汇点坐标（像素值）
  point: Point
  // 分支线长度（像素值，从交汇点向右延伸的长度）
  length?: number
  // 文本内容
  text?: string
  // 文本位置偏移量（像素，相对交汇点）
  textOffset?: { x: number; y: number }
}

interface GuildLineProps {
  // 起点坐标（像素值）
  startPoint?: Point
  // 垂直线终点坐标（像素值）
  endPoint?: Point
  // 三个分支线的配置
  branches?: BranchConfig[]
  // 默认分支线长度（像素值）
  defaultBranchLength?: number
  // 线条颜色
  color?: string
  // 主线宽度
  mainLineWidth?: number
  // 分支线宽度
  branchLineWidth?: number
  // 容器高度
  containerHeight?: string
}

export default function GuildLine({
  startPoint = { x: 200, y: 20 },     // 默认起点：x=200px, y=20px
  endPoint,                         // 如果不提供，将使用最后一个分支点
  branches = [
    {
      point: { x: 200, y: 200 },     // 第一个分支交汇点
      length: 400,                   // 向右延伸400px
      text: '第一阶段',
      textOffset: { x: -100, y: -20 }
    },
    {
      point: { x: 200, y: 400 },     // 第二个分支交汇点
      length: 300,
      text: '第二阶段',
      textOffset: { x: -100, y: -20 }
    },
    {
      point: { x: 200, y: 600 },     // 第三个分支交汇点
      length: 500,
      text: '第三阶段',
      textOffset: { x: -100, y: -20 }
    }
  ],
  defaultBranchLength = 400,
  color = '#FCE6C8',
  mainLineWidth = 3,     // 主线更粗
  branchLineWidth = 2,   // 分支线细一点
  containerHeight = '700px',
}: GuildLineProps) {
  const [windowWidth, setWindowWidth] = useState(1200)
  
  // 监听窗口大小变化
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    
    window.addEventListener('resize', handleResize)
    handleResize() // 初始化
    
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  // 确保只有3个分支
  const validBranches = branches.slice(0, 3)
  
  // 确定垂直线的终点
  const calculatedEndPoint = endPoint || 
    (validBranches.length > 0 ? 
      { 
        x: validBranches[validBranches.length - 1].point.x, 
        y: validBranches[validBranches.length - 1].point.y
      } : 
      { x: startPoint.x, y: startPoint.y + 600 }
    )
  
  // 计算容器宽度（基于最长的分支线）
  const maxBranchLength = Math.max(...validBranches.map(branch => branch.length || defaultBranchLength))
  const containerWidth = startPoint.x + maxBranchLength + 100
  
  // 计算文本字体大小（响应式）
  const getFontSize = () => {
    if (windowWidth < 600) return '0.75rem'
    if (windowWidth < 900) return '0.875rem'
    return '1.5rem'
  }

  return (
    <Box
      sx={{
        position: 'absolute',
        width: `${containerWidth}px`,
        height: containerHeight,
        minHeight: '400px',
        overflow: 'visible',
        margin: '0 auto',
        left: '50%',
      }}
    >
      {/* SVG 容器 - 使用固定像素值 */}
      <svg
        width={containerWidth}
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          overflow: 'visible'
        }}
      >
        {/* 垂直线（主干线） - 使用固定像素坐标，更粗 */}
        <line
          x1={startPoint.x}
          y1={startPoint.y}
          x2={calculatedEndPoint.x}
          y2={calculatedEndPoint.y}
          stroke={color}
          strokeWidth={mainLineWidth}
        />
        
        {/* 分支线 - 使用固定像素坐标，细一点 */}
        {validBranches.map((branch, index) => {
          const branchLength = branch.length || defaultBranchLength
          return (
            <line
              key={index}
              x1={branch.point.x}
              y1={branch.point.y}
              x2={branch.point.x + branchLength}
              y2={branch.point.y}
              stroke={color}
              strokeWidth={branchLineWidth}
            />
          )
        })}
      </svg>
      
      {/* 分支文本 */}
      {validBranches.map((branch, index) => {
        const text = branch.text || `分支 ${index + 1}`
        const textOffset = branch.textOffset || { x: -100, y: -20 }
        
        return (
          <Typography
            key={index}
            sx={{
              position: 'absolute',
              left: `${branch.point.x + textOffset.x}px`,
              top: `${branch.point.y + textOffset.y}px`,
              fontFamily: 'var(--font-baskervville)',
              fontSize: getFontSize(),
              color: color,
              maxWidth: '180px',
              textAlign: 'right',  // 文字右对齐，更适合放在线条左侧
              whiteSpace: 'nowrap',
            }}
          >
            {text}
          </Typography>
        )
      })}
      
    </Box>
  )
}