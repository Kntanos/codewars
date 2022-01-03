const longestConsec = require ('./consecutive_strings')

describe('longestConsec', () => {
  it('concatenates k consecutive strings', () => {

    expect(longestConsec(['one', 'two'], 2)).toEqual(['onetwo'])
    expect(longestConsec(['one', 'two', 'three'], 2)).toEqual(['onetwo', 'twothree'])
    expect(longestConsec(['one', 'two', 'three'], 3)).toEqual(['onetwothree'])
  })
})