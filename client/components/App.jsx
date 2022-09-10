import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchCharacters } from '../actions'
import Loading from './Loading'

// import Stack from 'react-bootstrap/Stack'
// import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const characters = useSelector((state) => state.characters)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCharacters())
  }, [])

  return (
    <>
      <div className="app">
        <h1>Characters</h1>
        <Loading />
        {/* <Stack gap={3}> */}
        <div className="character-container">
          {characters.map((character) => {
            return (
              <div className="character-box" key={character.id}>
                <div className="character-info">
                  <h3>{character.name}</h3>
                  <img
                    className="character-image"
                    src={`/images/${character.image}`}
                  />
                  <p>{character.class}</p>
                  <p>{character.bio}</p>
                </div>
              </div>
            )
          })}
        </div>
        {/* </Stack> */}
      </div>
    </>
  )
}

export default App
