const duplicateCount = require('./duplicateCount');

describe('duplicateCount', () => {
  it('returns 0 if no duplicates', () => {

    expect(duplicateCount('ab')).toEqual(0)
  })

  it('returns 1 if one duplicates', () => {

    expect(duplicateCount('aa')).toEqual(1)
  })

  it('returns 1 if one duplicate with more', () => {

    expect(duplicateCount('aab')).toEqual(1)
  })
})