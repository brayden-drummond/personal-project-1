import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchCharacters } from '../actions'
import Loading from './Loading'

function App() {
  const characters = useSelector((state) => state.characters)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCharacters())
  }, [])

  return (
    <>
      <div className="app">
        <h1>Characters of the Destiny Universe</h1>
        <Loading />
        <ul>
          {characters.map((character) => (
            <li key={character.id}>{character.name}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
