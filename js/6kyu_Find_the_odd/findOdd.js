function findOdd(A) {
  if (A.length === 1) {
    return A[0];
  }

  return A.find (i => i != 0)
}

module.exports = findOdd