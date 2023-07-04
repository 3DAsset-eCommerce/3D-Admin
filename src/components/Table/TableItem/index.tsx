import React, { Children, cloneElement } from 'react'

interface TableItemProps {
  title: string
  required: boolean

  children: any
}

export default function TableItem({ children, title, required }: TableItemProps) {
  return (
    <li className="flex h-fit">
      <div className="flex w-[32rem] justify-start gap-[0.9rem] pt-[1.2rem]">
        <span className="text-[1.6rem] font-[600] text-neutral-navy-100">{title}</span>
        {required && <span className="text-primary-newlloyd-button">•</span>}
      </div>
      <div className="w-[142rem]">
        {Children.map(children, (child, index) => {
          return cloneElement(child, {
            key: index,
          })
        })}
      </div>
    </li>
  )
}
