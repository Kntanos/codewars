// const bouncingBall = (h, b, w) => {
//   if (h * b <= w) {
//     return Math.ceil((h * b)/w)
//   } else if ( ( h * b > w ) && ( h * b ) * b <= w  )  {
//     return 3
//   } else if ( ( h * b > w ) && ( h * b ) * b >= w ) {
//     return 5
//   } else if ( ( h * b > w ) )
// }



const bouncingBall = (h, b, w) => {
let bounces = 0
if (h * b <= w) {
  bounces++
  } else if ( h * b > w ) {
  if ( ( h * b ) * b <= w ) {
    bounces = bounces +3
  } else if ( ( h * b ) * b >= w ) {
    bounces = bounces +5
  }

return bounces
}
}


module.exports = bouncingBall