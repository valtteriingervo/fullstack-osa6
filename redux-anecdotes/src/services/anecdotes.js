import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
  const object = { content, votes: 0 }
  const response = await axios.post(baseUrl, object)
  // Returns the whole anecdote object which we can directly push in the anecdoteReducer
  return response.data
}

const changeVote = async (anecdoteObject) => {
  const id = anecdoteObject.id
  const updatedAnecdote = { ...anecdoteObject, votes: anecdoteObject.votes + 1 }
  const response = await axios.put(`${baseUrl}/${id}`, updatedAnecdote)
  return response.data
}

export default {
  getAll,
  createNew,
  changeVote
}