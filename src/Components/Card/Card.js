import React from 'react';
import PropTypes from 'prop-types'
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

Card.propTypes = {
    reservation: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired
    }).isRequired,
    cancelReservation: PropTypes.func.isRequired
  }