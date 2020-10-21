import React, { Component } from 'react';

import './Form.css';

export default class Form extends Component {
	constructor() {
		super();

		this.state = {
			name: '',
			date: '',
			time: '',
			guests: '',
		};
	}

	updateHandler = event => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<form class='form'>
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
					type='date'
					name='date'
					placeholder='Date'
					value={this.state.date}
					onChange={this.updateHandler}
				/>
				<label htmlFor='time'></label>
				<input
					type='time'
					name='time'
					placeholder='Time'
					value={this.state.time}
					onChange={this.updateHandler}
				/>
				<label htmlFor='guests'></label>
				<input
					type='number'
					name='guests'
					placeholder='Number of guests'
					value={this.state.guests}
					onChange={this.updateHandler}
				/>
			</form>
		);
	}
}
