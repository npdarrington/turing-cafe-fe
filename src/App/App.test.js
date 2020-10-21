import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from './App';

it('Should allow the user to add a new reservation', () => {
	render(<App />);
	const name = screen.getByPlaceholderText('Name');
	const date = screen.getByPlaceholderText('Date M/D');
	const time = screen.getByPlaceholderText('Time H:MM');
	const guests = screen.getByPlaceholderText('Number of guests');
	userEvent.type(name, 'Nathan');
	userEvent.type(date, '10/22');
	userEvent.type(time, '3:30');
  userEvent.type(guests, '4');
	userEvent.click(screen.getByRole('button', { name: 'Make Reservation' }));
	const reservationName = screen.getByText('Nathan');
	const reservationTime = screen.getByText('3:30 PM');
	expect(reservationName).toBeInTheDocument();
	expect(reservationTime).toBeInTheDocument();
});
