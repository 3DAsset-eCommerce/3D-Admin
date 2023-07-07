import React, { ReactNode } from 'react'

interface SideNavListItemsWrapperProps {
  children: ReactNode
}

export default function SideNavListItemsWrapper({ children }: SideNavListItemsWrapperProps) {
  return <ul className="m-2 pl-[2.8rem]">{children}</ul>
}
