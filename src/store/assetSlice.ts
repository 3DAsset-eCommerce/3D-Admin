import { createSlice } from "@reduxjs/toolkit";



const assetSlice = createSlice({
  name: 'asset',
  initialState: {
    asset : {
      assetName: '',
      assetDescription: '',
      price: 0,
      discount: 0,
      category: '',
      subCategory: '',
      addTagList: [],
      fileUrl: '',
      fileSize: 0,
      extension: '',
      thumbnailUrl: '',
      previewUrlList: [],
    },
  },
  reducers: {
    createAsset: (state,action) => {
      state.asset = action.payload
    },
    
  }
})

export const {} = assetSlice.actions
export default assetSlice.reducer