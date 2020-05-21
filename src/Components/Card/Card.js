import React from 'react';
import './Card.css'

const Card = (props) => {
    return (
        <section className='card'>
            <h2>{props.reservation.name}</h2>
        </section>
    )
}

export default Card