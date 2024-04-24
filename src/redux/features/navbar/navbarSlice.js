import { createSlice } from '@reduxjs/toolkit'

export const navbarSlice = createSlice({
  name: 'navbar',
  initialState: {
    valueInactive: -1,
    selectedIcon: -1
  },
  reducers: {
    changeIcon: (state, action) => {
      state.selectedIcon = action.payload.value
    }
  }
})

export const { changeIcon } = navbarSlice.actions

export default navbarSlice.reducer