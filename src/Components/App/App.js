import React, { Component } from 'react'
import './App.css'
import ReservationContainer from '../ReservationContainer/ReservationContainer'
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

  makeReservation = () => {

  }

  cancelReservation = (id) => {
    console.log(id)
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <ReservationContainer 
          reservations={this.state.reservations}
          cancelReservation={this.cancelReservation}
        />  
      </div>
    )
  }
}

export default App;
