import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
	constructor() {
		super();

		this.state = {
			reservations: [],
		};
	}

	render() {
    const { reservations } = this.state;
		return (
			<div className='App'>
				<h1 className='app-title'>Turing Cafe Reservations</h1>
				<div className='resy-form'></div>
				<div className='resy-container'>
          {reservations.length < 1 && <h2>There are no reservations currently</h2>}
          {
            reservations.map(reservations => 
              <h3>Reservation!</h3>  
            )
          }
        </div>
			</div>
		);
	}
}
