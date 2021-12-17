const isSquare = require('./square')

describe ('isSquare', () => {
  it ('returns true if number is a square', () => {
    
    expect(isSquare(4)).toBe(true);
  });
}); 