import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import ReservationContainer from './ReservationContainer'
import '@testing-library/jest-dom'

describe('<ReservationContainer />', () => {
    const cancelReservation = jest.fn()
    let reservations
    let reservationContainerComponent
    beforeEach(() => {
        reservations = [{
            "id": 1,
            "name": "Christie",
            "date": "12/29",
            "time": "7:00",
            "number": 12
            },
            {
            "id": 2,
            "name": "Leta",
            "date": "4/5",
            "time": "7:00",
            "number": 2
            }
        ]

        reservationContainerComponent = render(
            <ReservationContainer
                reservations={reservations}
                cancelReservation={cancelReservation}
            />
        )
    })

    test('Displays reservations container correctly', () => {
        const { getByText } = reservationContainerComponent
        expect(getByText('Christie')).toBeInTheDocument()     
    })
})