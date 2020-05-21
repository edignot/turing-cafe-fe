import React from 'react';
import './Card.css'

const Card = (props) => {
    const {
        id,
        name,
        date,
        time,
        number
    } = props.reservation
    return (
        <section className='card'>
            <h2>{name}</h2>
            <p>Date:{date}</p>
            <p>Time:{time}</p>
            <p>Number of guests: {number}</p>
            <button 
                className='cancel-btn'
                onClick={() => props.cancelReservation(id)}
            >
                CANCEL
            </button>
        </section>
    )
}

export default Card