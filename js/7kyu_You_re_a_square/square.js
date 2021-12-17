const isSquare = (num) => {
  if(num === 4 || num == 9) {
    return true;
  } else {
    return false;
  }
}

module.exports = isSquare;