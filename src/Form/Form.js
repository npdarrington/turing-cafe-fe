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
		};
	}

	updateHandler = event => {
		const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  submitReservation = () => {
    const reservation = this.state;
    this.props.addNewReservation(reservation);
    this.clearInputs();
  }
  
  clearInputs = () => {
    this.setState({
      name: '',
      date: '',
      time: '',
      number: ''
    })
  }

	render() {
		return (
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
					value={this.state.number}
					onChange={this.updateHandler}
				/>
        <button className='submit-btn' type='button' onClick={this.submitReservation}>Make Reservation</button>
			</form>
		);
	}
}
