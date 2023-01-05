import { useDispatch } from 'react-redux'
import { newAnecdote } from '../reducers/anecdoteReducer'
import { changeNotif, clearNotif } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = () => {

  const dispatch = useDispatch()

  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    // Add the new note to Database
    const addedAnecdote = await anecdoteService.createNew(content)
    dispatch(newAnecdote(addedAnecdote))
    // Change notif to the new anecdote added
    dispatch(changeNotif(addedAnecdote))
    // After 5 seconds set the notif state to empty which hides it
    setTimeout(() => dispatch(clearNotif()), 5000)
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <input name="anecdote" />
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm