import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import Form from './Form'

describe('<Form/>', () => {
  const makeReservation = jest.fn()
  let formComponent
  
  beforeEach(() => {
    formComponent = render(<Form makeReservation={makeReservation}/>)
  })
  
  afterEach(cleanup)
  
  test('that MAKE RESERVATION button is enabled if all required inputs are filled', () => {
    // Test in progress, not passing for now
    const { getByPlaceholderText, getByText } = formComponent
    expect(getByText('MAKE RESERVATION')).toHaveAttribute('disabled')
    fireEvent.change(getByPlaceholderText('name'), {target: {value: 'name'}})
    fireEvent.change(getByPlaceholderText('date'), {target: {value: 'date'}})
    fireEvent.change(getByPlaceholderText('time'), {target: {value: 'time'}})
    fireEvent.change(getByPlaceholderText('number'), {target: {value: 2}})
    expect(getByText('MAKE RESERVATION')).not.toHaveAttribute('disabled')
  })
})