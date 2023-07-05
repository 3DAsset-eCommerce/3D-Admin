'use client'
import { useEffect, useState } from 'react'
import ListBox from './ListBox'
import { getFullCategoryList } from '@/api/service/category'

export default function SelectContainer() {
  const getSubCategoryList = () => {}
  const [categoryList, setCategoryList] = useState<Category[]>([])
  const initialState = { main: '대분류', sub: '소분류' }
  const [selectedOption, setSelectedOption] = useState(initialState)
  const [disabled, setDisabled] = useState(true)

  const handleOptionClick = (e: any) => {
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
        <ListBox title="대분류" array={categoryList}>
          <p className=" mt-[0.8rem] text-mm">
            선택한 카테고리: {selectedOption.main} {' > '}
            {selectedOption.sub}
          </p>
        </ListBox>
        {/* <ListBox title='소분류' disabled={true} array={subCategoryList}/> */}
      </div>
    </>
  )
}
