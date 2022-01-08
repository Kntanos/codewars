const isPangram = require('./detect_pangram')

describe('isPangram', () => {
  it('returns true if str is Pangram', () => {
    let str = 'abcdefghijklmnopqrstuvwxyz'

    expect(isPangram(str)).toBe(true)
  })
  
})