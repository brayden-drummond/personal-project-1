import { fetchCharacters, SET_LOADING, SET_CHARACTERS } from './index'

import { getCharacters } from '../apis/characters'

jest.mock('../apis/characters')
const mockCharacters = [{ name: 'banana' }, { name: 'apple' }]
getCharacters.mockReturnValue(Promise.resolve(mockCharacters))

const fakeDispatch = jest.fn()
beforeEach(() => {
  jest.clearAllMocks()
})

describe('fetchCharacters', () => {
  it('dispatches setLoading at start of thunk', () => {
    const thunkFn = fetchCharacters()
    return thunkFn(fakeDispatch).then(() => {
      const fakeDispatchFirstCallFirstArgument = fakeDispatch.mock.calls[0][0]
      expect(fakeDispatchFirstCallFirstArgument.type).toBe(SET_LOADING)
      return null
    })
  })
  it('dispatches getCharacters after api call', () => {
    return fetchCharacters()(fakeDispatch).then(() => {
      const fakeDispatchSecondAction = fakeDispatch.mock.calls[1][0]
      expect(fakeDispatchSecondAction.type).toBe(SET_CHARACTERS)
      return null
    })
  })
})
