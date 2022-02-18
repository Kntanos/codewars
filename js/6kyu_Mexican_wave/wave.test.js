const wave = require('./wave')

describe('wave', () => {
  it('returns an empty sting in an array', () =>{

    expect(wave("")).toEqual([""])
  })
})