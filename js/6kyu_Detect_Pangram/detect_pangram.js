const isPangram = (str) => {
  const alphabet = ('abcdefghijklmnopqrstuvwxyz').split('')
  return str.split('').every(v => alphabet.includes(v))
}

module.exports = isPangram