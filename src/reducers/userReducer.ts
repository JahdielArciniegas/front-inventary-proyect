import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../App'

interface UserState {
  user : User | null
}

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
        token: action.payload.token
      }
    },
    logout: (state : UserState) => {
      state.user = null
    }
  }
})

export const { login, logout} = userSlice.actions
export default userSlice.reducer
