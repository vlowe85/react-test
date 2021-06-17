import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App';
import { Paginator } from './Paginator'

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

test('paginate an array of items', () => {
  const anArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
  const paginatedData = Paginator(anArray, 1, 5)
  expect(paginatedData.data.length).toBe(5)
  expect(paginatedData.total_pages).toBe(3)
  expect(paginatedData.per_page).toBe(5)
  expect(paginatedData.next_page).toBe(2)

  const paginatedData2 = Paginator(anArray, 2, 4)
  expect(paginatedData2.data.length).toBe(4)
  expect(paginatedData2.total_pages).toBe(4)
  expect(paginatedData2.per_page).toBe(4)
  expect(paginatedData2.next_page).toBe(3)
});

test('renders api no results', async () => {
  render(<App />)

  const searchElement = screen.getByPlaceholderText('e.g. Broadband')
  const buttonElement = screen.getByText('Search')

  userEvent.type(searchElement, 'Kskskskx')
  userEvent.click(buttonElement)

  const results = await screen.findByText('Sorry, no results found')

  expect(results).toBeInTheDocument()
});

test('renders api results', async () => {
  render(<App />)

  const searchElement = screen.getByPlaceholderText('e.g. Broadband')
  const buttonElement = screen.getByText('Search')

  userEvent.type(searchElement, 'mobile')
  userEvent.click(buttonElement)

  const results = await screen.findByRole('listitem')

  expect(results).toBeInTheDocument()
})