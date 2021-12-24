const bouncingBall = (h, b, w) => {
let bounces = 0

if ( h < 0 || b >= 1 || b <= 0 || w > h ) {
  return -1
} else if (h * b <= w) {
  bounces++
} else {
    bounces++
    for ( let height = h * b ; height > w ; height = height * b ){
      bounces = bounces + 2
    }
  }
return bounces
}

module.exports = bouncingBall