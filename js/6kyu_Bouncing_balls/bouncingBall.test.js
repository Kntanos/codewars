const bouncingBall = require('./bouncingBall')

describe ('bouncingBall', () => {
  it ('returns 1', () => {
  
    expect(bouncingBall(10, 0.5, 5)).toEqual(1)
  })

  it ('returns 3', () => {
  
    expect(bouncingBall(4, 0.5, 1)).toEqual(3)
  })

  it ('returns 5', () => {
  
    expect(bouncingBall(6, 0.5, 1)).toEqual(5)
  })
})


