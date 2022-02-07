const duplicateCount = (text) => {
  const array = text.split('').map(x => x.toLowerCase());

  const counts = {};
  
  array.forEach((x) => {
    counts[x] = (counts[x] || 0) + 1;
  });

  return Object.values(counts).filter(v => v > 1).length
}

module.exports = duplicateCount;