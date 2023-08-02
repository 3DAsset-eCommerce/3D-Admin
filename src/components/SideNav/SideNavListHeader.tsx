import React from 'react'
import Image from 'next/image'

interface SideNavListHeaderProps {
  children: string
  imgSrc: string
}

export default function SideNavListHeader({ children, imgSrc }: SideNavListHeaderProps) {
  return (
    <div className=" leading-[2.4rem]">
      <div className="flex justify-between py-[0.8rem]">
        <div className="flex">
          <Image className="mr-4" src={imgSrc} alt={children + ' icon'} width={18} height={18} />
          <p>{children}</p>
        </div>
        <button>
          <Image src="/icons/minimizeMenu.svg" alt="메뉴" width={18} height={18} />
        </button>
      </div>
    </div>
  )
}
