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
        <div className="character-container">
          {characters.map((character) => {
            return (
              <div className="character-box" key={character.id}>
                <div className="character-info">
                  <p>{character.name}</p>
                  <img src={`/images/${character.image}`} />
                  <p>{character.class}</p>
                  <p>{character.bio}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default App
