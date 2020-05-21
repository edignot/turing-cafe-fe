import React from 'react'
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