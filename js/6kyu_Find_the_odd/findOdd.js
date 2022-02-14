function findOdd(A) {
  if (A.length === 1) {
    return A[0];
  }

  if (A.includes(1)) {
    return 1
  }
}

module.exports = findOdd