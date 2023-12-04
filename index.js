import React, { useState } from 'react';
import './style.css';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation logic here
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} aria-label="booking form">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" onChange={handleChange} />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" onChange={handleChange} required />

      <label htmlFor="date">Date:</label>
      <input type="date" id="date" name="date" onChange={handleChange} required />

      <button type="submit">Book</button>
    </form>
  );
};

export default BookingForm;
