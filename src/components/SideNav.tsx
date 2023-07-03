import Image from 'next/image'
import Link from 'next/link'

export default function SideNav() {
  return (
    <aside className="fixed left-0 z-10 h-full min-w-[24rem] border-r border-solid border-transparent-navy-30 bg-bg-1 pb-16 pt-[2.4rem] text-mm text-neutral-navy-200">
      <div className="pl-[1.6rem]">
        <Image src="/logo-title.svg" alt="로고" width={156} height={36} />
      </div>
      <div className="flex cursor-pointer justify-end px-8 py-[0.4rem]">
        <Image src="/icons/minimizeMenu.svg" alt="메뉴" width={24} height={24} />
      </div>
      <div className="py-[0.4rem] leading-[2.4rem]">
        <div className="flex p-[0.8rem] ">
          <Image className="mr-4" src="/icons/settings.svg" alt="관리" width={18} height={18} />
          <p>에셋관리</p>
        </div>
      </div>
      <div className="m-2 pl-6 pr-3">
        <Link href="/enroll" className="my-4 flex">
          <Image className="mr-4" src="/icons/plus.svg" alt="등록" width={18} height={18} />
          에셋 등록
        </Link>
        <Link href="/assets" className="my-4 flex">
          <Image className="mr-4" src="/icons/search.svg" alt="조회/수정" width={18} height={18} />
          에셋 조회/수정
        </Link>
      </div>
      <div className="mx-2 my-6 w-auto border-b border-neutral-navy-200"></div>
      <div className="mx-auto w-[20rem] bg-neutral-navy-900 leading-[3.8rem] text-primary-main">
        <Link href="/" className="flex justify-center ">
          Log out
        </Link>
      </div>
    </aside>
  )
}
