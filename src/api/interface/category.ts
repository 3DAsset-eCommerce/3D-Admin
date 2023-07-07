interface Category {
  id: number
  categoryName: string
  subCategory?: SubCategory[]
}
interface SubCategory {
  id: number
  subCategoryName: string
}
interface CategoryList {
  categoryList: Category[]
} 