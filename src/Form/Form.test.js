import React from 'react'
import userEvent from '@testing-library/user-event'
import { screen, render } from '@testing-library/react';

import Form from './Form';

describe('Form', () => {
  it('Should allow a user to record data into form inputs', () => {
    const mockReservation = jest.fn();
    render(<Form addNewReservation={mockReservation} />);
    const name = screen.getByPlaceholderText('Name')
    const date = screen.getByPlaceholderText('Date M/D')
    const time = screen.getByPlaceholderText('Time H:MM')
    const guests = screen.getByPlaceholderText('Number of guests')
    userEvent.type(name, 'Nathan');
    userEvent.type(date, '10/22');
    userEvent.type(time, '3:30');
    userEvent.type(guests, '4');
    expect(name.value).toBe('Nathan');
    expect(date.value).toBe('10/22');
    expect(time.value).toBe('3:30');
    expect(guests.value).toBe('4');
  });
})
