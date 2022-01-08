const isPangram = require('./detect_pangram')

describe('isPangram', () => {
  it('returns true if str is Pangram', () => {
    let str = 'abcdefghijklmnopqrstuvwxyz'

    expect(isPangram(str)).toBe(true)
  })

  it('returns false if str is not Pangram', () => {
    let str = 'abcdef'

    expect(isPangram(str)).toBe(false)
  })
})