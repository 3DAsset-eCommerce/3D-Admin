import { configureStore } from '@reduxjs/toolkit'

import categoryReducer from './categorySlice'
import assetReducer from './assetSlice'
import userReducer from './userSlice'
export const store = configureStore({
  reducer: {
    category: categoryReducer,
    createAsset: assetReducer, //
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['asset/createFileUrl'],
        // Ignore these field paths in all actions
        ignoredActionPaths: ['payload.file'],
        // Ignore these paths in the state
        ignoredPaths: ['createAsset.fileUrl'],
      },
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
