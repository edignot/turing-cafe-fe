import React from 'react'
import PropTypes from 'prop-types'
import './ReservationContainer.css'
import Card from '../Card/Card'

const ReservationContainer = (props) => {
    const cards = props.reservations.map(reservation => {
        return <Card 
            key={reservation.id}
            reservation={reservation} 
            cancelReservation={props.cancelReservation}/>
    })
    return(
        <section className='reservation-container'>
            { cards }
        </section>
    )
}

export default ReservationContainer

ReservationContainer.propTypes = {
    reservation: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
        number: PropTypes.number.isRequired
      })).isRequired,
    cancelReservation: PropTypes.func.isRequired
  }