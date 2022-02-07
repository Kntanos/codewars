const duplicateCount = (text) => {
  let counter = 0;
 
  if (text.split('').filter(x => x.toLowerCase() == 'a').length > 1) {
    counter +=1
  } 
  if (text.split('').filter(x => x.toLowerCase() == 'b').length > 1) {
    counter +=1
  }
  return counter
}

module.exports = duplicateCount;