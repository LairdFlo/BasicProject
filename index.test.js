import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import BookingForm from './index.js';

test('renders booking form and submits data', () => {
  render(<BookingForm />);

  const nameInput = screen.getByLabelText(/name/i);
  fireEvent.change(nameInput, { target: { value: 'John Doe' } });
  
  const emailInput = screen.getByLabelText(/email/i);
  fireEvent.change(emailInput, { target: { value: 'johndoe@example.com' } });

  const dateInput = screen.getByLabelText(/date/i);
  fireEvent.change(dateInput, { target: { value: '2021-08-01' } });

  const submitButton = screen.getByRole('button');
  fireEvent.click(submitButton);

  // Add assertions for expected behavior
});
