const bouncingBall = require('./bouncingBall')

describe ('bouncingBall', () => {
  it ('returns 1', () => {
  
    expect(bouncingBall(10, 0.5, 5)).toEqual(1)
  })
})


