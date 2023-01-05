import { useSelector, useDispatch } from 'react-redux'
import { voteForAnecdote } from '../reducers/anecdoteReducer'
import { changeNotifForVote, clearNotif } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const compareAnecVotes = (anecA, anecB) => {
    return anecA.votes - anecB.votes
  }
  // Set filter from statt
  const filter = useSelector(state => state.filter.toLowerCase())

  // Set anecdotes from state
  const anecdotes = useSelector(({ anecdotes }) => {
    const anecInOrder = anecdotes.slice().sort(compareAnecVotes).reverse()
    const anecFiltered = anecInOrder.filter(anec => anec.content.toLowerCase().includes(filter))
    return anecFiltered
  })

  const dispatch = useDispatch()

  const giveVoteToAnecdote = (anecdote) => {
    // Give the vote changing the anecdotes list state by incrementing vote
    dispatch(voteForAnecdote(anecdote))
    // Changing the vote must also change the notification state
    dispatch(changeNotifForVote(anecdote.content))
    // After 5 seconds set the notif state to empty which hides it
    setTimeout(() => dispatch(clearNotif()), 5000)
  }

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
              onClick={() => giveVoteToAnecdote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList