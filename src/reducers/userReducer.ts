import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserState, User } from '@types'


const initialState : UserState = {
  user:null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state : UserState, action: PayloadAction<User>) => {
      state.user = {
        username: action.payload.username,
        name: action.payload.name,
        token: action.payload.token,
        id: action.payload.id
      }
    },
    logout: (state : UserState) => {
      state.user = null
    }
  }
})

export const { login, logout} = userSlice.actions
export default userSlice.reducer
