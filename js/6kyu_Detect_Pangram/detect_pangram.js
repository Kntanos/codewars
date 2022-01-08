const isPangram = (str) => {
  const alphabet = ('abcdefghijklmnopqrstuvwxyz').split('')
  return alphabet.every(letter => str.toLowerCase().split('').includes(letter))
}

module.exports = isPangram