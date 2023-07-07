'use client'
import { useEffect, useState } from 'react'
import ListBox from './ListBox'
import { getFullCategoryList, getSubCategoryList } from '@/api/service/category'

export default function AssetCategorySelectContainer() {
  const [mainCategory, setMainCategory] = useState<string[]>([])
  const [subCategory, setSubCategory] = useState<string[]>([])
  const [selectedMainOption, setSelectedMainOption] = useState('대분류')
  const [selectedSubOption, setSelectedSubOption] = useState('소분류')

  const getMainCategory = async () => {
    const res = await getFullCategoryList()
    console.log('main:', res.data.categoryList)
    setMainCategory(res.data.categoryList)
  }
  const getSubCategory = async (mainCategory: string) => {
    const res = await getSubCategoryList(mainCategory)
    console.log('sub:', res.data.subCategoryList)
    setSubCategory(res.data.subCategoryList)
  }
  useEffect(() => {
    getMainCategory()
    selectedMainOption && getSubCategory(selectedMainOption)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <div className="flex gap-[1.6rem]">
        <ListBox
          array={mainCategory}
          selectedOption={selectedMainOption}
          setSelectedOption={setSelectedMainOption}
        >
          <p className=" mt-[0.8rem] text-mm">
            선택한 카테고리: {selectedMainOption} {' > '}
            {selectedSubOption}
          </p>
        </ListBox>
        <ListBox
          array={subCategory}
          selectedOption={selectedSubOption}
          setSelectedOption={setSelectedSubOption}
          disabled={subCategory.length !== 0 ? false : true}
        />
      </div>
    </>
  )
}
