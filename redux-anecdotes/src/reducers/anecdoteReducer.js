import { createSlice } from '@reduxjs/toolkit'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    giveVote(state, action) {
      const id = action.payload
      const anecdoteToVote = state.find(a => a.id === id)
      const changedAnecdote = {
        ...anecdoteToVote,
        votes: anecdoteToVote.votes + 1
      }
      return state.map(a =>
        a.id !== id ? a : changedAnecdote
      )
    },
    newAnecdote(state, action) {
      const anecdoteAsObject = { content: action.payload, votes: 0 }
      state.push(anecdoteAsObject)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const { giveVote, newAnecdote, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer
