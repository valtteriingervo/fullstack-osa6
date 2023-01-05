import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    changeNotif(state, action) {
      return `New anecdote added: '${action.payload}'`
    },
    changeNotifForVote(state, action) {
      const voteNotif = `you voted '${action.payload}'`
      return voteNotif
    },
    clearNotif(state, action) {
      return ''
    }
  }
})

export const { changeNotif, changeNotifForVote, clearNotif } = notificationSlice.actions
export default notificationSlice.reducer
