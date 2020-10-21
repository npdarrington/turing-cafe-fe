import React, { Component } from 'react';

import './Form.css';

export default class Form extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			date: '',
			time: '',
			number: '',
			error: '',
		};
	}

	updateHandler = event => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	submitReservation = () => {
		this.setState({ error: '' });
		this.validateInputs();
		if (this.state.error) {
			const { name, date, time, number } = this.state;
			const reservation = { name, date, time, number };
			this.props.addNewReservation(reservation);
			this.clearInputs();
		}
	};

	clearInputs = () => {
		this.setState({
			name: '',
			date: '',
			time: '',
			number: '',
		});
	};

	validateInputs = () => {
		if (!this.state.name) {
			this.setState({ error: 'You must add a name to the reservation' });
		}

		if (!this.state.date) {
			this.setState({ error: 'You must add a date to the reservation' });
		}

		if (!this.state.time) {
			this.setState({ error: 'You must add a time to the reservation' });
		}

		if (!this.state.number) {
			this.setState({
				error: 'You must add a guest count of at least 1 to the reservation',
			});
		}
	};

	render() {
		return (
			<section class='form'>
				<form className='form'>
					<label htmlFor='name'></label>
					<input
						type='text'
						name='name'
						placeholder='Name'
						value={this.state.name}
						onChange={this.updateHandler}
					/>
					<label htmlFor='date'></label>
					<input
						type='text'
						name='date'
						placeholder='Date M/D'
						value={this.state.date}
						onChange={this.updateHandler}
					/>
					<label htmlFor='time'></label>
					<input
						type='text'
						name='time'
						placeholder='Time H:MM'
						value={this.state.time}
						onChange={this.updateHandler}
					/>
					<label htmlFor='number'></label>
					<input
						type='number'
						name='number'
						placeholder='Number of guests'
						value={this.state.guests}
						onChange={this.updateHandler}
					/>
					<button
						className='submit-btn'
						type='button'
						onClick={this.submitReservation}>
						Make Reservation
					</button>
				</form>
				{this.state.error && <h1 className='form-error'>{this.state.error}</h1>}
			</section>
		);
	}
}
