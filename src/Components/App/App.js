import React, { Component } from 'react'
import './App.css'
import ReservationContainer from '../ReservationContainer/ReservationContainer'
import Form from '../Form/Form'
import { 
  getReservationsApi, 
  cancelReservationApi, 
  makeReservationApi 
} from '../../ApiFetch/ApiFetch'

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: [],
      error: null
    }
  }

  componentDidMount = async () => {
    const reservations = await getReservationsApi()
    reservations && this.setState({ reservations })
    !reservations && this.setState({ error: 'Loading failed!' })  
  }

  makeReservation = (newReservation) => {
    this.setState({
      reservations: [
        ...this.state.reservations,
        newReservation
      ]
    })
  }

  cancelReservation = (id) => {
    const reservations = this.state.reservations.filter(reservation => reservation.id !== id)
    this.setState({ reservations })
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <Form 
          makeReservation={this.makeReservation}
        />
        <ReservationContainer 
          reservations={this.state.reservations}
          cancelReservation={this.cancelReservation}
        />  
      </div>
    )
  }
}

export default App;
