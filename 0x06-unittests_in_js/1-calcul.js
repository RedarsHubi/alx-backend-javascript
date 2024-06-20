function calculateNumber(type, a, b) {
  if (type === 'SUM') {
    return Math.round(a) + Math.round(b);
  };
  if (type === 'SUBSTRACT') {
    return Math.round(a) - Math.round(b);
  };
  if (type === 'DIVIDE') {
    const roundedB = Math.round(b);
    if (roundedB === 0) {
      throw new Error('Cannot divide by zero');
    }
    return Math.round(a) / Math.round(b);
  };



}

module.exports = calculateNumber;
