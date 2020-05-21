import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Card from './Card'
import '@testing-library/jest-dom'

describe('<Card />', () => {
    const cancelReservation = jest.fn()
    let reservation
    let cardComponent
    beforeEach(() => {
        reservation = {
            "id": 1,
            "name": "Christie",
            "date": "12/29",
            "time": "7:00",
            "number": 12
            }

        cardComponent = render(
            <Card 
                reservation={reservation}
                cancelReservation={cancelReservation}
            />
        )
    })

    test('Displays reservation info correctly', () => {
        const { getByText } = cardComponent
        expect(getByText('Christie')).toBeInTheDocument()
    })

    test('Cancel Reservation has been clicked', () => {
        const { getByText } = cardComponent
        fireEvent.click(getByText('CANCEL'))
        expect(cancelReservation).toHaveBeenCalledTimes(1)
    })

    test('Cancel Reservation has been invoked with correct arguments', () => {
        const { getByText } = cardComponent
        fireEvent.click(getByText('CANCEL'))
        expect(cancelReservation).toHaveBeenCalledWith(reservation.id)
    })
})