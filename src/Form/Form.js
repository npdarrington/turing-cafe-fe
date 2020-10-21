import React, { Component } from 'react'

import './Form.css';

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      date: '',
      time: '',
      guests: ''
    }
  }

  render() {
    return (
      <form class="form">
        <label htmlFor='name'></label>
        <input type='text' name='name' placeholder='Name' />
        <label htmlFor='date'></label>
        <input type='date' name='date' placeholder='Date' />
        <label htmlFor='time'></label>
        <input type='time' name='time' placeholder='Time' />
        <label htmlFor='guests'></label>
        <input type='number' name='guests' placeholder='Number of guests' />
      </form>
    )
  }
}