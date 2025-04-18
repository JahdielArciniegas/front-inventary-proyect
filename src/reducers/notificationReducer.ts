import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AppDispatch } from "../store"

interface NotificationState {
  notification: string | null
  error: string | null
}

const initialState: NotificationState = {
  notification: null,
  error: null
}

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    showNotification(state, action : PayloadAction<string | null>) {
      state.notification = action.payload
    },
    showError(state, action : PayloadAction<string | null>) {
      state.error = action.payload
    }
  }
})

export const { showNotification, showError } = notificationSlice.actions

export const setNotification = (notification: string, time: number) =>{
  const sec = time * 1000;
  return (dispatch: AppDispatch) => {
    dispatch(showNotification(notification))
    setTimeout(() =>{
      dispatch(showNotification(null))
    }, sec)
  } 
}

export const setError = (error: string, time: number) =>{
  const sec = time * 1000
  return (dispatch: AppDispatch) => {
    dispatch(showError(error))
    setTimeout(() => {
      dispatch(showError(null))
    }, sec)
  }
}

export default notificationSlice.reducer