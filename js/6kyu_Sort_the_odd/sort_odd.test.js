const sortArray = require('./sort_odd')

describe('sortArray', () => {
  it('sorts odd numbers in ascending order', () => {

    expect(sortArray([3, 1])).toEqual([1, 3])
    expect(sortArray([3, 1, 5])).toEqual([1, 3, 5])
    expect(sortArray([3, 1, 2, 5])).toEqual([1, 3, 2, 5])
    expect(sortArray([3, 4, 1, 2, 5])).toEqual([1, 4, 3, 2, 5])
  })
})