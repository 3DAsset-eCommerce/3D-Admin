import React from 'react'

interface DividerProps {
  width?: string,
  height?: string,

}

export default function Divider({width='100%',height='0.1rem'}:DividerProps) {
  return (
    <div style={{width: `${width}`, height: `${height}`}} className='bg-[#474E57] mt-[1.8rem]'></div>
  )
}
