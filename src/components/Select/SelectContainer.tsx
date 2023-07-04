'use client'
import { useEffect, useState } from 'react'
import { Listbox } from '@headlessui/react'
import { DropDownIcon } from '../../../public/icons/icons'
import { getFullCategoryList } from '@/api/service/category'
type Category = {
  id: number
  categoryName: string
  subCategory?: Category[]
}

interface SelectContainerProps {
  categoryList: Category[]
}

export default function SelectContainer() {
  const getSubCategoryList = () => {}
  const [categoryList, setCategoryList] = useState<Category[]>([])
  const initialState = { main: '대분류', sub: '소분류' }
  const [selectedOption, setSelectedOption] = useState(initialState)
  const [disabled, setDisabled] = useState(true)

  const handleOptionClick = (e) => {
    console.log(e.target.textContent)
    if ((e.target.id = 'mainCategory')) {
      setSelectedOption((prev) => ({
        ...prev,
        ['main']: e.target.textContent,
      }))
    } else {
      setSelectedOption((prev) => ({
        ...prev,
        ['sub']: e.target.textContent,
      }))
    }
  }

  useEffect(() => {
    ;(async () => {
      const res = await getFullCategoryList()
      const mainCategoryList = res?.data.categoryList
      console.log(res.data.categoryList)
      setCategoryList(mainCategoryList)
    })()
  }, [])

  return (
    <>
      <div className="flex gap-[1.6rem]">
        <Listbox
          // value={selectedList}
          // onChange={setSelectedList}
          by="id"
          as="div"
          className="relative flex flex-col gap-0"
        >
          <Listbox.Button
            id="mainCategory"
            className="flex min-h-[4.2rem] min-w-[24rem] justify-between rounded border border-[#474E57] bg-neutral-navy-950 px-[2rem] py-[0.9rem] text-[1.4rem]  text-neutral-navy-200 focus:border-neutral-navy-200"
          >
            <span>{selectedOption.main}</span>
            <DropDownIcon />
          </Listbox.Button>
          <Listbox.Options className="absolute top-[4.2rem] z-10 rounded border border-[#474E57] bg-neutral-navy-950 text-[1.4rem]">
            {categoryList.map((item) => (
              <Listbox.Option
                key={item.id}
                value={item}
                className="flex min-h-[3.5rem] min-w-[24rem] items-center border border-[rgba(0,0,0,0)] px-[2rem] py-[0.9rem] text-neutral-navy-200 hover:border-neutral-navy-200"
                onClick={handleOptionClick}
              >
                {item.categoryName}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
        <Listbox
          // value={selectedList}
          // onChange={setSelectedList}
          by="id"
          as="div"
          className="relative flex flex-col gap-0 "
          disabled={disabled}
        >
          <Listbox.Button
            as="div"
            id="subCategory"
            className={
              disabled
                ? 'flex min-h-[4.2rem] min-w-[24rem] justify-between rounded border border-[#474E57] bg-neutral-navy-850 px-[2rem] py-[0.9rem] text-[1.4rem] text-neutral-navy-200 focus:border-neutral-navy-200'
                : 'flex min-h-[4.2rem] min-w-[24rem] justify-between rounded border border-[#474E57] bg-neutral-navy-950 px-[2rem] py-[0.9rem] text-[1.4rem] text-neutral-navy-200 focus:border-neutral-navy-200'
            }
          >
            <span>{selectedOption.sub}</span>
            <DropDownIcon />
          </Listbox.Button>
          {!disabled && (
            <Listbox.Options className="absolute top-[4.2rem] rounded border border-[#474E57] bg-neutral-navy-950 text-[1.4rem]">
              {subCategoryList?.map((item) => (
                <Listbox.Option
                  key={item.id}
                  value={item}
                  onClick={handleOptionClick}
                  className="flex min-h-[3.5rem] min-w-[24rem] items-center border border-[rgba(0,0,0,0)] px-[2rem] py-[0.9rem] hover:border-neutral-navy-200"
                >
                  {item.categoryName}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          )}
        </Listbox>
      </div>
      <p className="absolute mt-[0.8rem] text-mm text-neutral-navy-200">
        선택한 카테고리: {selectedOption.main} {' > '}
        {selectedOption.sub}
      </p>
    </>
  )
}
