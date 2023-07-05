import React from 'react'

interface DividerProps {
  width?: string
  height?: number
}

export default function Divider({ width = '100%', height = 0.1 }: DividerProps) {
  return (
    <div
      style={{ width: `${width}`, height: `${height}rem` }}
      className="mt-[1.8rem] bg-[#474E57]"
    ></div>
  )
}
