const { uppercase, splitString, intoArrays, intoObjects } = require('./meeting');

describe ('uppercase', () => {
  it ('turns the given string to uppercase', () => {

    expect(uppercase("Fred:Cornwill;Wilfred:Cornwill")).toEqual("FRED:CORNWILL;WILFRED:CORNWILL")
  })
})

describe ('splitString', () => {
  it ('splits string to array of strings', () => {
    
    expect(splitString("Fred:Cornwill;Wilfred:Cornwill")).toEqual(["Fred:Cornwill", "Wilfred:Cornwill"])
  })
})

describe ('intoArrays', () => {
  it ('turns the array of strings into array of arrays', () => {
    
    expect(intoArrays(["Fred:Cornwill", "Wilfred:Cornwill"])).toEqual([["Fred", "Cornwill"], ["Wilfred", "Cornwill"]])
  })
})

describe ('intoObjects', () => {
  it ('turns the array of arrays into array of objects', () => {
    
    expect(intoObjects([["Fred", "Cornwill"], ["Wilfred", "Cornwill"]])).toEqual([{0: "Fred", 1: "Cornwill"}, {0: "Wilfred", 1: "Cornwill"}])
  })
})