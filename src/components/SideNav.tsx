import Image from 'next/image'
import Link from 'next/link'

export default function SideNav() {
  return (
    <aside className="fixed h-full left-0 min-w-[24rem] z-10 bg-bg-1 border-r border-solid border-transparent-navy-30 pt-[2.4rem] pb-16 text-mm">
      <div className="pl-[1.6rem]"></div>
      <div className="flex justify-end px-8 py-[0.4rem]"></div>
      <ul className="p-[0.8rem]">
        <li className="py-[0.4rem] leading-[2.4rem] border-b border-neutral-navy-200">
          <ul>
            <li></li>
            <li></li>
          </ul>
        </li>
        <li className="py-[0.4rem] leading-[2.4rem] border-b border-neutral-navy-200">
          <div>
            <div className="flex p-[0.8rem] text-neutral-navy-200">
              <p>카테고리별</p>
            </div>
          </div>
        </li>
      </ul>
    </aside>
  )
}
