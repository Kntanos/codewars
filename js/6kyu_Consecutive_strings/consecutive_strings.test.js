const longestConsec = require ('./consecutive_strings')

describe('longestConsec', () => {
  it('concatenates k consecutive strings', () => {

    expect(longestConsec(['one', 'two'], 2)).toEqual('onetwo')
    expect(longestConsec(['one', 'two', 'three'], 2)).toEqual('twothree')
    expect(longestConsec(['one', 'two', 'three'], 3)).toEqual('onetwothree')
    expect(longestConsec(['one', 'two', 'three', 'four'], 2)).toEqual('threefour')
    expect(longestConsec(['one', 'two', 'three', 'four'], 2)).toEqual('threefour')
    expect(longestConsec(['one', 'two', 'three', 'four'], 3)).toEqual('twothreefour')
    expect(longestConsec(['one', 'two', 'three'], 4)).toEqual('')
    expect(longestConsec(['one', 'two', 'three'], -1)).toEqual('')
    expect(longestConsec([], 4)).toEqual('')
  })
})