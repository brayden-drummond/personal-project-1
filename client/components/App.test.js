import React from 'react'
import { Provider } from 'react-redux'
import { screen, render } from '@testing-library/react'

import App from './App'
import store from '../store'
import { fetchCharacters } from '../actions/index'

jest.mock('../actions')

fetchCharacters.mockImplementation(() => () => {})

test('dispatches fetchCharacters action', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  )
  expect(fetchCharacters).toHaveBeenCalled()
})

test('renders characters names on page', () => {
  const characters = ['Cayde', 'Spider']
  jest.spyOn(store, 'getState')
  store.getState.mockImplementation(() => ({ characters }))

  render(
    <Provider store={store}>
      <App />
    </Provider>
  )
  const heading = screen.getAllByRole('heading')
  expect(heading).toHaveLength(3)
})
