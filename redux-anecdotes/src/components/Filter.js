import { connect } from 'react-redux'
import { changeFilter } from '../reducers/filterReducer'

const Filter = (props) => {

  const handleChange = (event) => {
    // input-kentän arvo muuttujassa event.target.value
    const newFilter = event.target.value
    // TODO: Implement filterReducer
    props.changeFilter(newFilter)
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}


export default connect(
  null, // Component doesn't need state
  { changeFilter }
)(Filter)