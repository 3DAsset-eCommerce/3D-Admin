import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from './categorySlice'
import assetReducer from './assetSlice'

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    createAsset: assetReducer, //
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
