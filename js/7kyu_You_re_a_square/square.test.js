const isSquare = require('./square')

describe ('isSquare', () => {
  it ('returns true if number is a square', () => {
    
    expect(isSquare(4)).toBe(true);
  });

  it ('returns false if number is not a square', () => {
    
    expect(isSquare(5)).toBe(false);
  });
}); 