const bouncingBall = (h, b, w) => {
  if (h * b <= w) {
    return 1 
  } else if ( ( h * b > w ) && ( h * b ) * b <= w  )  {
    return 3
  } else if ( ( h * b > w ) && ( h * b ) * b > w ) {
    return 5
  }
}

module.exports = bouncingBall