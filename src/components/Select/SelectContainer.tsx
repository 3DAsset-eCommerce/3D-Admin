"use client"
import { useState } from 'react'
import { Listbox} from '@headlessui/react'
import { DropDownIcon } from '../../../public/icons/icons'

type Category = {
  id: number,
  categoryName: string,
  subCategory?: Category[]

}

interface SelectContainerProps {
  categoryList : Category[],
  setSelectedCategory: Function,
}

export default function SelectContainer({categoryList, setSelectedCategory}:SelectContainerProps) {
  const [selectedList, setSelectedList] = useState(categoryList[0])
  const [disabled, setDisabled] = useState(true)
  return (
    <div className='flex gap-[1.6rem]'>
      <Listbox value={selectedList} onChange={setSelectedList} by="id" as='div' className='flex flex-col gap-0 relative'>
        <Listbox.Button as='div' className='flex justify-between min-w-[24rem] min-h-[4.2rem] py-[0.9rem] rounded border border-[#474E57] bg-neutral-navy-950 px-[2rem] text-[1.4rem] focus:border-neutral-navy-200'><span>대분류</span><DropDownIcon/></Listbox.Button>
        <Listbox.Options className='border border-[#474E57] bg-neutral-navy-950 text-[1.4rem] rounded absolute top-[4.2rem] z-10'>
            {categoryList.map((item) => (
              <Listbox.Option
                key={item.id}
                value={item}
                className='min-w-[24rem] min-h-[3.5rem] flex items-center py-[0.9rem] px-[2rem] border border-[rgba(0,0,0,0)] hover:border-neutral-navy-200'
              >
              {item.categoryName}
              </Listbox.Option>
            ))}
        </Listbox.Options>
      </Listbox>
      <Listbox value={selectedList} onChange={setSelectedList} by="id" as='div' className='flex flex-col gap-0 relative ' disabled={disabled}>
        <Listbox.Button as='div' className={ disabled ? 'bg-neutral-navy-850 flex justify-between min-w-[24rem] min-h-[4.2rem] py-[0.9rem] rounded border border-[#474E57] px-[2rem] text-[1.4rem] focus:border-neutral-navy-200' :'bg-neutral-navy-950 flex justify-between min-w-[24rem] min-h-[4.2rem] py-[0.9rem] rounded border border-[#474E57] px-[2rem] text-[1.4rem] focus:border-neutral-navy-200'}>
          <span>소분류</span>
          <DropDownIcon/>
        </Listbox.Button>
        {!disabled && <Listbox.Options className='border border-[#474E57] bg-neutral-navy-950 text-[1.4rem] rounded absolute top-[4.2rem]'>
            {categoryList.map((item) => (
              <Listbox.Option
                key={item.id}
                value={item}
                className='min-w-[24rem] min-h-[3.5rem] flex items-center py-[0.9rem] px-[2rem] border border-[rgba(0,0,0,0)] hover:border-neutral-navy-200'
              >
              {item.categoryName}
              </Listbox.Option>
            ))}
        </Listbox.Options>}
      </Listbox>
    </div>
  )
}
