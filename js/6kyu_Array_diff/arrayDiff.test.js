const arrayDiff = require('./arrayDiff')

describe ('arrayDiff', () => {
  it ('returns [2]', () => {

    expect(arrayDiff([1, 2], [1])).toEqual([2]);
  });
});