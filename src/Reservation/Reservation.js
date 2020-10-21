import React from 'react';

import './Reservation.css';

const Reservation = ({ reservation }) => {
	return (
		<article className='reservation'>
			<h2 className='reservation-name'>{reservation.name}</h2>
			<p className='reservation-date'>{reservation.date}</p>
			<p className='reservation-time'>{reservation.time} PM</p>
			<h4 className='reservation-guests'>
				Number of guests: {reservation.number}
			</h4>
			<button type='button' name='cancel-reservation'>
				Cancel
			</button>
		</article>
	);
};

export default Reservation;
