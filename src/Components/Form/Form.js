import React, { Component } from 'react'
import './Form.css'

export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            date: '',
            time: '',
            number: 0
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value})
    }

    reserve = e => {
        e.preventDefault()
        const newReservation = this.state
        this.props.makeReservation(newReservation)
        this.resetInputs()
    }

    resetInputs = () => {
        this.setState({ 
          name: '',
          date: '',
          time: '',
          number: 0
        })
      }

    render() {
        const {name, date, time, number } = this.state
        const isComplete = name && date && time && number ? false : true
        return (
            <form>
                <input 
                    type='text'
                    placeholder='name'
                    value={this.state.name}
                    name='name'
                    onChange={this.handleChange}
                />
                <input 
                    type='text'
                    placeholder='date'
                    value={this.state.date}
                    name='date'
                    onChange={this.handleChange}
                />
                <input 
                    type='text'
                    placeholder='time'
                    value={this.state.time}
                    name='time'
                    onChange={this.handleChange}
                />
                <input 
                    type='number'
                    placeholder='number'
                    value={this.state.number}
                    name='number'
                    onChange={this.handleChange}
                />
                <button
                    className='reservation-btn'
                    type='submit'
                    onClick={this.reserve}
                    disabled={isComplete}
                >
                    MAKE RESERVATION
                </button>
            </form>
        )
    }
}
