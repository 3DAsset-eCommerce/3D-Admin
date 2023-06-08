import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex fixed justify-between items-center z-10 w-[calc(100%-24.4rem)] h-[7.2rem] bg-bg-1 border-b border-solid border-transparent-navy-30 py-[1.1rem] px-[2.3rem]">
      <div className="flex w-[66.3%] h-[5rem] bg-bg-2 px-[1.2rem] rounded-[0.4rem] border border-transparent-navy-30"></div>
      <ul className="flex items-center before:w-[0.2rem] before:h-[3.4rem] before:bg-transparent-navy-30 before:mr-[1rem]"></ul>
    </header>
  )
}
