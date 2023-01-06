import { createSlice } from '@reduxjs/toolkit'

let lastTimerID = null
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

    // Clear the previous timer (if there has been one)
    if (lastTimerID) {
      clearTimeout(lastTimerID)
    }
    // Start a new timer
    const timeoutID = setTimeout(() => {
      dispatch(clearNotif())
    }, timeInSec * 1000)

    console.log('lastTimerID', lastTimerID)
    console.log('timeoutID', timeoutID)

    // Set the global variable holding the previous timer ID
    lastTimerID = timeoutID

  }
}

export default notificationSlice.reducer
