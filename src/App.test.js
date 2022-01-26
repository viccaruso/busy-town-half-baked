import { render, screen } from '@testing-library/react';
import Vehicle from './Vehicle';

test('renders a 🚗 emoji somewhere on screen', () => {
  render(<Vehicle type='car'/>);
  const text = screen.getByText('🚗');
  expect(text).toBeInTheDocument;
});

