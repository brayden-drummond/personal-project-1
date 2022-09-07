import { getCharacters } from '../apis/characters'

export const SET_LOADING = 'SET_LOADING'
export const SET_CHARACTERS = 'SET_CHARACTERS'

export function setCharacters(characters) {
  return {
    type: SET_CHARACTERS,
    payload: characters,
  }
}

export function setLoading() {
  return {
    type: SET_LOADING,
  }
}

export function fetchCharacters() {
  return (dispatch) => {
    dispatch(setLoading())
    return getCharacters().then((characters) => {
      dispatch(setCharacters(characters))
      return null
    })
  }
}
