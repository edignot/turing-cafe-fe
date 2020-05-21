import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Form from './Form'

describe('<Form/>', () => {
  const makeReservation = jest.fn()
  let formComponent
  
  beforeEach(() => {
    formComponent = render(<Form makeReservation={makeReservation}/>)
  })
  
  afterEach(cleanup)
  
  test('that MAKE RESERVATION button is enabled if all required inputs are filled', () => {
    const { getByPlaceholderText, getByText } = formComponent
    expect(getByText('MAKE RESERVATION')).toHaveAttribute('disabled')
    fireEvent.change(getByPlaceholderText('name'), {target: {value: 'name'}})
    fireEvent.change(getByPlaceholderText('date'), {target: {value: 'date'}})
    fireEvent.change(getByPlaceholderText('time'), {target: {value: 'time'}})
    fireEvent.change(getByPlaceholderText('number'), {target: {value: 2}})
    expect(getByText('MAKE RESERVATION')).not.toHaveAttribute('disabled')
  })

  test('that MAKE RESERVATION is invoked with correct arguments', () => {
    const { getByPlaceholderText, getByText } = formComponent
    fireEvent.change(getByPlaceholderText('name'), {target: {value: 'name'}})
    fireEvent.change(getByPlaceholderText('date'), {target: {value: 'date'}})
    fireEvent.change(getByPlaceholderText('time'), {target: {value: 'time'}})
    fireEvent.change(getByPlaceholderText('number'), {target: {value: 2}})
    fireEvent.click(getByText('MAKE RESERVATION'))
    expect(makeReservation).toHaveBeenCalledTimes(1)
    expect(makeReservation).toHaveBeenCalledWith({
      name: 'name',
      date: 'date',
      time: 'time',
      number: 2
    })
  })
})