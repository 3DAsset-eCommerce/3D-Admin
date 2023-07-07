import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function SideNavLogo() {
  return (
    <Link href="/assets/enroll">
      <div className="my-[1rem] py-[1rem] pl-[1.6rem]">
        <Image src="/logo-title.svg" alt="로고" width={156} height={36} />
      </div>
    </Link>
  )
}
