module.exports = {
  getMinuend: (obj) => {
    return (obj.data.find( e => e.title === 'Part 1' )).values;
  },
  getSubtrahend: (obj) => {
    return (obj.data.find( e => e.title === 'Part 2' )).values;
  },
  getDiff: (minuend, subtrahend) => minuend.map( (minValue, idx) => minValue - subtrahend[idx] )
}
