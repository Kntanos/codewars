const longestConsec = (strarr, k) => {
  let array = []
  for (let i = 0; i <= (strarr.length - k); i++) {
    // array.push(strarr[i].concat(strarr[i+1]))
    array.push(strarr.slice(i, i+k).join(''))
  }
  return array
}

module.exports = longestConsec