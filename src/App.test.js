import { render, screen } from '@testing-library/react';
import App from './App';

test('renders a search form', () => {
  render(<App />)
  const formElement = screen.getByRole('search')
  expect(formElement).toBeInTheDocument()
});