import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    email: ''
  },
  reducers: {
    changeUser: (state, action) => {
      state.email = action.payload.email
      console.log(action.payload.email)
      console.log(state)
    }
  }
})

export const { changeUser } = authSlice.actions

export default authSlice.reducer