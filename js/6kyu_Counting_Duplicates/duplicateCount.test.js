const duplicateCount = require('./duplicateCount');

describe('duplicateCount', () => {
  it('returns 0 if no duplicates', () => {

    expect(duplicateCount('aa')).toEqual(0)
  })
})