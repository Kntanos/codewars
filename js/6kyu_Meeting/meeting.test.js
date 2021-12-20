const { uppercase, splitString } = require('./meeting');

describe ('uppercase', () => {
  it ('turns the given string to uppercase', () => {

    expect(uppercase("Fred:Cornwill;Wilfred:Cornwill")).toEqual("FRED:CORNWILL;WILFRED:CORNWILL")
  })
})

describe ('splitString', () => {
  it ('turns the string into array of objects', () => {
    
    expect(splitString("Fred:Cornwill;Wilfred:Cornwill")).toEqual(["Fred:Cornwill", "Wilfred:Cornwill"])
  })
})