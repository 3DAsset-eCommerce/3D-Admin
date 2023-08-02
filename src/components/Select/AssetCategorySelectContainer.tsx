'use client'
import { useEffect, useState } from 'react'
import ListBox from './ListBox'
import { getFullCategoryList, getSubCategoryList } from '@/api/service/category'
import { createAssetCategory, createAssetSubCategory } from '@/store/assetSlice'

export default function AssetCategorySelectContainer() {
  const [mainCategory, setMainCategory] = useState<object[]>([])
  const [subCategory, setSubCategory] = useState<object[]>([])
  const [selectedMainOption, setSelectedMainOption] = useState('대분류')
  const [selectedSubOption, setSelectedSubOption] = useState('소분류')

  const getMainCategory = async () => {
    const res = await getFullCategoryList()
    const category = res.data.categoryList
    const categoryArr = category?.map((item:Category) => item.categoryName)
    setMainCategory(categoryArr)
  }
  const getSubCategory = async (mainCategory: string) => {
    const res = await getSubCategoryList(mainCategory)
    const category = res.data.subCategoryList
    const categoryArr = category.map((item:SubCategory) => item.subCategoryName)
    setSubCategory(categoryArr)
  }
  useEffect(() => {
    getMainCategory()
    selectedMainOption !== '대분류' && getSubCategory(selectedMainOption)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedMainOption])
  return (
    <>
      <div className="flex gap-[1.6rem]">
        <ListBox
          array={mainCategory}
          selectedOption={selectedMainOption}
          setSelectedOption={setSelectedMainOption}
          dispatchFunc={createAssetCategory}
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
          dispatchFunc={createAssetSubCategory}
        />
      </div>
    </>
  )
}
