const longestConsec = require ('./consecutive_strings')

describe('longestConsec', () => {
  it('concatenates k consecutive strings', () => {

    expect(longestConsec(['one', 'two'])).toEqual('onetwo')
  })
})