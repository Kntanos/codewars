const sortArray = require('./sort_odd')

describe('sortArray', () => {
  it('sorts numbers in ascending order', () => {

    expect(sortArray([5, 2, 7])).toEqual([2, 5, 7])
  })
})