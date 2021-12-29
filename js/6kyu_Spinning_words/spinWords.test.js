const spinWords = require('./spinWords')

describe('spinWords', () => {
  it('reverse words with 5 letters or more', () => {

    expect(spinWords("Seven one")).toEqual("neveS one")
    expect(spinWords("One")).toEqual("One")
    expect(spinWords("One seven two")).toEqual("One neves two")
  })
})