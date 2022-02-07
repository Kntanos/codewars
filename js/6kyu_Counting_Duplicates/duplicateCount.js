const duplicateCount = (text) => {
 
  if (text.split('').filter(x => x == 'a').length > 1) {
    return 1
  } else {
    return 0
  }
}

module.exports = duplicateCount;