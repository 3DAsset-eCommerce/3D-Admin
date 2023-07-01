import { ApiResponse} from './'

export interface AssetDetail {
  assetId: number
  assetName: string
  price: number
  description: string
  discount: number
  discountPrice: number
  extension: string
  fileSize: number
  fileUrl: string
  creator: string
  rating: number
  reviewCount: number
  wishCount: number
  visitCount: number
  wishlistId: null
  previewList: string[]
  tagList: string[]
}  

export interface AssetUploadRequest {
  assetName: string
  assetDescription: string
  price: number
  discount: number
  category: string
  subCategory: string
  addTagList: string[]
  fileUrl: string
  fileSize: number
  extension: string
  thumbnailUrl: string
  previewUrlList: string[]
}
export interface AssetEditRequest {
  assetId: number
  assetName?: string
  assetContent?: string
  price?: number
  assetDiscount?: number
  category?: string
  subCategory?: string
  deleteTag: string[] | null
  addTag?: string[]
  fileUrl?: string
  thumbnailUrl?: string
  previewUrl?: string[]
}

export interface AssetInactiveRequest {
  assets: number[]
}
export interface AssetActiveRequest {
  assets: number[]
}



export type AssetDetailResponse = ApiResponse<AssetDetail>

