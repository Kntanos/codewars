const { splitString, sortArray, backToString, order } = require('./order')

describe ('splitString', () => {
  it ('returns the number in each word', () => {

    expect(splitString("is2 Thi1s T4est 3a")).toEqual(["is2", "Thi1s", "T4est", "3a"])
  })
})

describe ('sortArray', () => {
  it ('sorts the array according to number in word', () => {

    expect(sortArray(["is2", "Thi1s", "T4est", "3a"])).toEqual(["Thi1s", "is2", "3a", "T4est"])
  })
})

describe ('backToString', () => {
  it ('coverts the array back into string', () => {

    expect(backToString(["Thi1s", "is2", "3a", "T4est"])).toEqual("Thi1s is2 3a T4est")
  })
})

describe ('order', () => {
  it ('orders the words by their number', () => {

    expect(order("is2 Thi1s T4est 3a")).toEqual("Thi1s is2 3a T4est")
    expect(order("")).toEqual("")
  })
})