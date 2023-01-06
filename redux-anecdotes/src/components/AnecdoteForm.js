import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {

  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    props.createAnecdote(content)
    // Change notif to the new anecdote added
    props.setNotification(`new anecdote: '${content}'`, 3)
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

export default connect(
  null, // Component doesn't need to know about state
  { createAnecdote, setNotification }
)(AnecdoteForm)