const longestConsec = (strarr, k) => {
  if (strarr === 0 || k > strarr.length || k <= 0) {
    return ''
  } else {
    let array = []
    for (let i = 0; i <= (strarr.length - k); i++) {
      array.push(strarr.slice(i, i + k).join(''))
    }
    return array.sort((a, b) => {
      return b.length - a.length 
    })[0]
  }
}

module.exports = longestConsec