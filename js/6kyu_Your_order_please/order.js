const splitString = (string) => {
  return string.split(" ")
}

const sortArray = (array) => {
  const regex = /\d+/
  return array.sort((a, b) => {
   let x = a.match(regex)
   let y = b.match(regex) 
   return x === y ? 0 : x > y ? 1 : -1
  })
  
  console.log(array.sort())
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
