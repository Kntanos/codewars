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

const order = (string) => {
  const array = string.split(" ")
  return array.sort(array.forEach((word) => {
    return word.match(/\d+/)
   }))
   .join(" ")
}

module.exports = { splitString, sortArray, backToString, order }
