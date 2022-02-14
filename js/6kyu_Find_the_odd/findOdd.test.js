const findOdd = require('./findOdd')

describe('findOdd', () =>{
  it('returns 0', () => {

    expect(findOdd([0])).toEqual(0)
  })

  it('returns 1', () => {

    expect(findOdd([1])).toEqual(1)
  })

  it('returns the odd from 3 elements', () => {

    expect(findOdd([0,0,1])).toEqual(1)
  })

  it('returns the odd from 3 elements', () => {

    expect(findOdd([0,1,0])).toEqual(1)
  })

  it('returns the odd from 3 elements', () => {

    expect(findOdd([0,2,0])).toEqual(2)
  })

  it('returns the odd from 3 elements', () => {

    expect(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1])).toEqual(4)
  })
})
