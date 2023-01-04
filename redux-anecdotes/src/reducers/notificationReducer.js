import { createSlice } from '@reduxjs/toolkit'

const initialState = 'initial notification'

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    changeNotif(state, action) {
      console.log(action.payload)
      return action.payload
    }
  }
})

export const { changeNotif } = notificationSlice.actions
export default notificationSlice.reducer
