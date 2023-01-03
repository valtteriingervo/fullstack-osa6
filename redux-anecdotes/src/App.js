import { useSelector, useDispatch } from 'react-redux'
import { giveVote } from './reducers/anecdoteReducer'

/*
6.3: anekdootit, step1
Toteuta mahdollisuus anekdoottien äänestämiseen. Äänien määrä tulee tallettaa Redux-storeen.
*/

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

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
      <form>
        <div><input /></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default App