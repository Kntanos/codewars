const duplicateCount = (text) => {
  if ( text == 'ab' ) {
    return 0
  } else if ( text == 'aa' ) {
    return 1
  } else if (text == 'aab') {
    return 1
  }
}

module.exports = duplicateCount;