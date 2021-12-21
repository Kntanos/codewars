const { splitString, sortArray } = require('./order')

describe ('splitString', () => {
  it ('returns the number in each word', () => {

    expect(splitString("is2 Thi1s")).toEqual(["is2", "Thi1s"])
  })
})

describe ('sortArray', () => {
  it ('sorts the array according to number in word', () => {

    expect(sortArray(["is2", "Thi1s"])).toEqual(["Thi1s", "is2"])
  })
})