const duplicateCount = require('./duplicateCount');

describe('duplicateCount', () => {
  it('returns 0 if no duplicates', () => {

    expect(duplicateCount('a')).toEqual(0)
  })

  it('returns 1 if one duplicates', () => {

    expect(duplicateCount('aa')).toEqual(1)
  })

  it('returns 1 if one duplicate with more', () => {

    expect(duplicateCount('aaa')).toEqual(1)
  })

  it('returns 1 if one duplicates case insensitive', () => {

    expect(duplicateCount('aA')).toEqual(1)
  })

  it('returns 1 if one duplicate b', () => {

    expect(duplicateCount('bb')).toEqual(1)
  })

  it('returns 1 if one duplicate b', () => {

    expect(duplicateCount('aabb')).toEqual(2)
  })
})