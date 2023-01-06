/*
6.19 anekdootit ja connect, step1
Redux-storea käytetään tällä hetkellä useSelector- ja useDispatch-hookien avulla. Tämä on varmasti paras tapa tehdä asiat, mutta harjoitellaan kuitenkin hieman connect-funktion käyttöä.

Muokkaa Notification-komponenttia niin, että se käyttää connect-funktiota hookien sijaan.
*/
import { connect } from 'react-redux'

const Notification = (props) => {
  const notification = props.notification

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    display: notification ? '' : 'none'
  }
  return (
    <div style={style}>
      {notification}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}

export default connect(
  mapStateToProps,
  null // Component doesn't use any action creators
)(Notification)