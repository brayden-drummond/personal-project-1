import nock from 'nock'
import { getCharacters } from './characters'

describe('getCharacters', () => {
  it('gets characters from local api', () => {
    const scope = nock('http://localhost')
      .get('/api/v1/characters')
      .reply(200, {
        id: 4,
        name: 'Commander Zavala',
        image: 'placeholder.jpg',
        class: 'placeholder',
        bio: 'placeholder',
      })
    return getCharacters().then((result) => {
      expect(result.name).toContain('Zavala')
      expect(scope.isDone()).toBe(true)
    })
  })
})
