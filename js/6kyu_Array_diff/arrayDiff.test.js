const arrayDiff = require('./arrayDiff')

describe ('arrayDiff', () => {
  const expected = [2]
  it ('returns expected array', () => {

    expect(arrayDiff([1, 2], [1])).toEqual(expected);
  })
});