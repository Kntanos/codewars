const isPangram = (str) => {
  const alphabet = ('abcdefghijklmnopqrstuvwxyz').split('')
  return alphabet.every(letter => str.split('').includes(letter))
}

module.exports = isPangram