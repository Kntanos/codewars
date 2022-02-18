const wave = require('./wave')

describe('wave', () => {
  it('returns an empty sting in an array', () =>{

    expect(wave("")).toEqual([""])
  })

  it('returns the one letter capitalised in an array', () =>{

    expect(wave("a")).toEqual(["A"])
  })

  it('returns an array with 2 strings, each with one capital letter ', () =>{

    expect(wave("ab")).toEqual(["Ab", "aB"])
  })

  it('returns Mexican wave from word with repeated letters', () =>{

    expect(wave("aba")).toEqual(["Aba", "aBa", "abA"])
  })
})