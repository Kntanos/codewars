const arrayDiff = require('./arrayDiff')

describe ('arrayDiff', () => {
  it ('returns [2]', () => {

    expect(arrayDiff([1, 2], [1])).toEqual([2]);
  });

  it ('returns [2, 3]', () => {

    expect(arrayDiff([1, 2, 3], [1])).toEqual([2, 3]);
  });

  it ('returns [2, 3]', () => {

    expect(arrayDiff([1, 1, 1, 2, 3], [1])).toEqual([2, 3]);
  });

  it ('returns [2, 3]', () => {

    expect(arrayDiff([1, 1, 1, 2, 3], [1, 2])).toEqual([3]);
  });
});