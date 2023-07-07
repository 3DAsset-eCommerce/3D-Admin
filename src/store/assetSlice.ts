import { createSlice } from '@reduxjs/toolkit'

type AssetState = {
  assetName: string | null
  assetDescription: string | null
  price: number
  discount: number
  category: string | null
  subCategory: string 
  addTagList: string[]
  fileUrl: string
  fileSize: number
  extension: string | null
  thumbnailUrl: string | null
  previewUrlList: string[]
}

const initialState: AssetState = {
  assetName: null,
  assetDescription: null,
  price: 0.0,
  discount: 0,
  category: null,
  subCategory: '',
  addTagList: [],
  fileUrl: '',
  fileSize: 0.0,
  extension: '.zip',
  thumbnailUrl: null,
  previewUrlList: [],
}

const assetSlice = createSlice({
  name: 'asset',
  initialState,
  reducers: {
    createAssetName: (state: AssetState, action) => {
      state.assetName = action.payload
    },
    createAssetDescription: (state: AssetState, action) => {
      state.assetDescription = action.payload
    },
    createAssetPrice: (state: AssetState, action) => {
      state.price = action.payload
    },
    createAssetDiscount: (state: AssetState, action) => {
      state.discount = action.payload
    },
    createAssetCategory: (state: AssetState, action) => {
      state.category = action.payload
    },
    createAssetSubCategory: (state: AssetState, action) => {
      state.subCategory = action.payload
    },
    createTagList: (state: AssetState, action) => {
      state.addTagList = action.payload
    },
    createFileUrl: (state: AssetState, action) => {
      state.fileUrl = action.payload
    },
    createFileSize: (state: AssetState, action) => {
      state.fileSize = action.payload
    },
    createFileExtension: (state: AssetState, action) => {
      state.extension = action.payload
    },
    createThumbnailSrc: (state: AssetState, action) => {
      state.thumbnailUrl = action.payload
    },
    createPreviewUrlList: (state: AssetState, action) => {
      state.previewUrlList = action.payload
    },
  },
})

export const {
  createAssetName,
  createAssetDescription,
  createAssetPrice,
  createAssetDiscount,
  createAssetCategory,
  createAssetSubCategory,
  createTagList,
  createFileUrl,
  createFileSize,
  createFileExtension,
  createThumbnailSrc,
  createPreviewUrlList,
} = assetSlice.actions

export default assetSlice.reducer
