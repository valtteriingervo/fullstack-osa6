import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    changeNotif(state, action) {
      return action.payload
    },
    clearNotif(state, action) {
      return ''
    }
  }
})

export const { changeNotif, changeNotifForVote, clearNotif } = notificationSlice.actions

export const setNotification = (notifText, timeInSec) => {
  return async dispatch => {
    dispatch(changeNotif(notifText))
    setTimeout(() => {
      dispatch(clearNotif())
    }, timeInSec * 1000)
  }
}

export default notificationSlice.reducer
