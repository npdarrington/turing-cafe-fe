import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Reservation from './Reservation';

const mockReservation = {
  id: 1,
  name: 'Nathan',
  date: '10/24',
  time: '5:50',
  number: '6'
}

describe('Reservation', () => {
  it('Should render a reservation card with correct data', () => {
    render(<Reservation reservation={mockReservation} />);
    const name = screen.getByText('Nathan');
    const date = screen.getByText('10/24');
    const time = screen.getByText('5:50 PM');
    const number = screen.getByText('Number of guests: 6');
    expect(name).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(time).toBeInTheDocument();
    expect(number).toBeInTheDocument();
  })
})
