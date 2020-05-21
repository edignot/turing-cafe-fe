import React, { Component } from 'react'
import './App.css'
import ReservationContainer from '../ReservationContainer/ReservationContainer'
import { fetchReservations } from '../../ApiFetch/ApiFetch'

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: [],
      error: null
    }
  }

  componentDidMount = async () => {
    const reservations = await fetchReservations()
    reservations && this.setState({ reservations })
    !reservations && this.setState({ error: 'Loading failed!' })  
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <ReservationContainer reservations={this.state.reservations}/>  
      </div>
    )
  }
}

export default App;
