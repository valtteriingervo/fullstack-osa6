import { useSelector, useDispatch } from 'react-redux'
import { giveVote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
  const compareAnecVotes = (anecA, anecB) => {
    return anecA.votes - anecB.votes
  }
  // Have the anecdotes be in vote order from highest to lowest
  //const anecdotes = useSelector(state => state.anecdotes.sort(compareAnecVotes).reverse())
  const anecdotes = useSelector(({ anecdotes }) => anecdotes.slice().sort(compareAnecVotes).reverse())
  const dispatch = useDispatch()

  return (
    <div>
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
    </div>
  )
}

export default AnecdoteList