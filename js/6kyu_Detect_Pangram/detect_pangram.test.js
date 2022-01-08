const isPangram = require('./detect_pangram')

describe('isPangram', () => {
  it('returns true if str is Pangram', () => {
    let str1 = 'abcdefghijklmnopqrstuvwxyz'
    let str2 = 'abcde33fghi jklmn4opq rstuv33wxyz'
    let str3 = 'aBcdefghi jkLmnopq rstuvwxyz'

    expect(isPangram(str1)).toBe(true)
    expect(isPangram(str2)).toBe(true)
    expect(isPangram(str3)).toBe(true)
  })

  it('returns false if str is not Pangram', () => {
    let str = 'abcdef'

    expect(isPangram(str)).toBe(false)
  })
})