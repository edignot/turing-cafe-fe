import React from 'react'
import './ReservationContainer.css'
import Card from '../Card/Card'

const ReservationContainer = (props) => {
    const cards = props.reservations.map(reservation => {
        return <Card reservation={reservation}/>
    })
    return(
        <section>
            { cards }
        </section>
    )
}

export default ReservationContainer