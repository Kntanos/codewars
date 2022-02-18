const wave = (str) => {
  if (str.length === 0) {
    return [str]
  } else {
    return [str.toUpperCase()]
  }
}

module.exports = wave