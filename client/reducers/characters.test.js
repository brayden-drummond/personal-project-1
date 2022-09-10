import reducer from './characters'
import { setCharacters } from '../actions/index'

describe('characters reducer', () => {
  test('sets characters', () => {
    const characters = ['Zavala', 'Ikora', 'Eido']
    const action = setCharacters(characters)
    const newState = reducer(action)
    expect(newState[2]).toBe('Eido')
  })
})
