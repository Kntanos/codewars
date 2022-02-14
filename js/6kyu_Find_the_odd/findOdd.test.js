const findOdd = require('./findOdd')

describe('findOdd', () =>{
  it('returns 0', () => {

    expect(findOdd([0])).toEqual(0)
  })

  it('returns 1', () => {

    expect(findOdd([1])).toEqual(1)
  })
})
