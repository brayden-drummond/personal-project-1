const request = require('supertest')
const server = require('../server')

const { getCharacters } = require('../db/db')

jest.mock('../db/db')

jest.spyOn(console, 'error')

afterEach(() => {
  console.error.mockReset()
})

describe('GET /api/v1/characters', () => {
  it('returns characters from db', () => {
    const mockCharacters = [
      {
        id: 1,
        name: 'Eido',
        image: 'placeholder.jpg',
        class: 'placeholder',
        bio: 'placeholder',
      },
      {
        id: 2,
        name: 'Spider',
        image: 'placeholder.jpg',
        class: 'placeholder',
        bio: 'placeholder',
      },
    ]
    getCharacters.mockReturnValue(Promise.resolve(mockCharacters))
    return request(server)
      .get('/api/v1/characters')
      .then((res) => {
        expect(res.body).toHaveLength(2)
        expect(res.body[1].name).toBe('Spider')
        return null
      })
  })
  it('return status 500 and consoles error when problem', () => {
    getCharacters.mockImplementation(() => Promise.reject(new Error('fail')))
    console.error.mockImplementation(() => {})
    return request(server)
      .get('/api/v1/characters')
      .then((res) => {
        expect(res.status).toBe(500)
        expect(console.error).toHaveBeenCalledWith('fail')
        return null
      })
  })
})
