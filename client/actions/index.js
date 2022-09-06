import { getCharacters } from '../apis/characters'

export const SET_CHARACTERS = 'SET_CHARACTERS'

export function setCharacters(characters) {
  return {
    type: SET_CHARACTERS,
    payload: characters,
  }
}

export function fetchCharacters() {
  return (dispatch) => {
    return getCharacters().then((characters) => {
      dispatch(setCharacters(characters))
    })
  }
}
