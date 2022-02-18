const wave = (str) => {
  if (str.length === 0) {
    return [str]
  } else if (str.length === 1) {
    return [str.toUpperCase()]
  } else if (str.length === 2) {
    return [str[0].toUpperCase() + str[1], str[0] + str[1].toUpperCase()]
  }
}

module.exports = wave