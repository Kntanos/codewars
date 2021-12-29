const spinWords = require('./spinWords')

describe('spinWords', () => {
  it('reverse words with 5 letters or more', () => {

    expect(spinWords("Seven")).toEqual("neveS")
  })
})