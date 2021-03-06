import React, { Component } from 'react';
import Reservation from '../Reservation/Reservation';
import Form from '../Form/Form';
import './App.css';

export default class App extends Component {
	constructor() {
		super();

		this.state = {
			reservations: [],
			error: '',
		};
	}

	componentDidMount = async () => {
		const reservations = await fetch(
			'http://localhost:3001/api/v1/reservations'
		);
		if (reservations.ok) {
			const response = await reservations.json();
			this.setState({ reservations: response });
		} else {
			this.setState({
				error: 'We were not able to get the reservations. Refresh to try again',
			});
		}
  };
  
  addNewReservation = async (reservation) => {
    const { name, date, time, number } = reservation;
    const data = {
      name,
      date,
      time,
      number
    }
    this.setState({ reservations: [...this.state.reservations, data] });
  }

	render() {
		const { reservations, error } = this.state;
		return (
			<div className='App'>
				<h1 className='app-title'>Turing Cafe Reservations</h1>
				<div className='resy-form'>
          <Form addNewReservation={this.addNewReservation} />
        </div>
				<div className='resy-container'>
					{reservations.length < 1 && (
						<h2>There are no reservations currently</h2>
					)}
					{error && <h2>{error}</h2>}
					{reservations.map(reservation => (
						<Reservation key={reservation.id} reservation={reservation} />
					))}
				</div>
			</div>
		);
	}
}
