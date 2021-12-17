const isSquare = (num) => {
  if(Math.sqrt(num) % 1 === 0) {
    return true;
  } else {
    return false;
  }
}

module.exports = isSquare;