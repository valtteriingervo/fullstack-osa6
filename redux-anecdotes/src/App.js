import { useSelector, useDispatch } from 'react-redux'
import { giveVote, newAnecdote } from './reducers/anecdoteReducer'

const App = () => {
  const compareAnecVotes = (anecA, anecB) => {
    return anecA.votes - anecB.votes
  }

  // Have the anecdotes be in vote order from highest to lowest
  const anecdotes = useSelector(state => state.sort(compareAnecVotes).reverse())
  const dispatch = useDispatch()

  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(newAnecdote(content))
  }



  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button
              onClick={() => dispatch(giveVote(anecdote.id))}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <input name="anecdote" />
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default App