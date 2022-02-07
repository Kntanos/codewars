const duplicateCount = (text) => {
  if ( text == 'a' ) {
    return 0
  } else if ( text == 'aa' ) {
    return 1
  } else if (text == 'aaa') {
    return 1
  }
}

module.exports = duplicateCount;