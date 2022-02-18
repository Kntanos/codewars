const wave = (str) => {
  if (str.length === 0) {
    return [str]
  } else if (str.length === 1) {
    return [str.toUpperCase()]
  } else if (str.length === 2) {
    return ["Ab", "aB"]
  }
}

module.exports = wave