import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

test('renders a search form', () => {
  render(<App />)
  const formElement = screen.getByRole('search')
  expect(formElement).toBeInTheDocument()
});

test('renders a search input, with a placeholder', () => {
  render(<App />)
  const searchElement = screen.getByPlaceholderText('e.g. Broadband')
  expect(searchElement).toBeInTheDocument()
});

test('types into search box', () => {
  render(<App />)
  const searchElement = screen.getByPlaceholderText('e.g. Broadband')
  userEvent.type(searchElement, 'broadband')
  expect(searchElement.value).toBe('broadband')
});

test('renders a search button', () => {
  render(<App />)
  const buttonElement = screen.getByText('Search')
  expect(buttonElement).toBeInTheDocument()
});