// find the number each word contains
// make a dictionary with number/word pairs
// arrange the words in the order of their numbers
// make the dictionary into a sting

const splitString = (string) => {
  return string.split(" ")
}

const sortArray = (array) => {
  const regex = /\d+/
  return array.sort(array.forEach((word) => {
   return word.match(regex)
  }))
}

const backToString = (array) => {
  return array.join(" ")
}

module.exports = { splitString, sortArray, backToString }
