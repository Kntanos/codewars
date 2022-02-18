const wave = (str) => {
  if (str.length === 0) {
    return [str]
  } else {
    return str.split('').map(char => 
      str.replace(char, char.toUpperCase())
    )
  }
}

module.exports = wave