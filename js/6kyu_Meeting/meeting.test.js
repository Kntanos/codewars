const uppercase = require('./meeting');

describe ('uppercase', () => {
  it ('turns the given string to uppercase', () => {

    expect(uppercase("Fred:Cornwill;Wilfred:Cornwill")).toEqual("FRED:CORNWILL;WILFRED:CORNWILL")
  })
})