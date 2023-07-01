import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: 'category',
  initialState: {
      main: '대분류', 
      sub: '소분류'
  },
  reducers: {
    clickMain: (state, action) => {
      state.main = action.payload
    },
    clickSub : (state, action) => {
      state.sub = action.payload
    }
  }
})

export const {} = categorySlice.actions
export default categorySlice.reducer