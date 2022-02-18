const wave = require('./wave')

describe('wave', () => {
  it('returns an empty sting in an array', () =>{

    expect(wave("")).toEqual([""])
  })

  it('returns the one letetr capitalised in an array', () =>{

    expect(wave("a")).toEqual(["A"])
  })
})