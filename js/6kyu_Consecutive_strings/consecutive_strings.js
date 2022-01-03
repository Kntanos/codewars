const longestConsec = (strarr, k) => {
  let array = []
  for (let i = 0; i <= (strarr.length - k); i++) {
    array.push(strarr.slice(i, i + k).join(''))
  }
  return array.sort((a, b) => {
    return b.length - a.length 
  })[0]
}

module.exports = longestConsec