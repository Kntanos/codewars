function findOdd(A) {
  if (A.length === 1) {
    return A[0];
  }

  const counts = {};
  
  A.forEach((x) => {
    counts[x] = (counts[x] || 0) + 1;
  });

  for (const [k, v] of Object.entries(counts)) {
    if (v % 2 !=0) {
      return parseInt(k)
    }
  }
}

module.exports = findOdd