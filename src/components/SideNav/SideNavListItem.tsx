import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface SideNavListItemProps {
  children: string
  href: string
  imgSrc: string
}

export default function SideNavListItem({ children, href, imgSrc }: SideNavListItemProps) {
  return (
    <li>
      <Link href={href} className="my-4 flex">
        <Image className="mr-4" src={imgSrc} alt={children + ' icon'} width={18} height={18} />
        {children}
      </Link>
    </li>
  )
}
