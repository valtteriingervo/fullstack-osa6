import { useSelector, useDispatch } from 'react-redux'
import { giveVote } from '../reducers/anecdoteReducer'
import { changeNotifForVote, clearNotif } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const compareAnecVotes = (anecA, anecB) => {
    return anecA.votes - anecB.votes
  }
  // Have the anecdotes be in vote order from highest to lowest
  //const anecdotes = useSelector(state => state.anecdotes.sort(compareAnecVotes).reverse())
  const anecdotes = useSelector(({ anecdotes }) => anecdotes.slice().sort(compareAnecVotes).reverse())
  const dispatch = useDispatch()

  const voteForAnecdote = (id, content) => {
    // Give the vote changing the anecdotes list state by incrementing vote
    dispatch(giveVote(id))
    // Changing the vote must also change the notification state
    dispatch(changeNotifForVote(content))
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
              onClick={() => voteForAnecdote(anecdote.id, anecdote.content)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList