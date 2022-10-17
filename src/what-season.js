const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if(date) {
    const propertyNames = Object.getOwnPropertyNames(date)
    const datePropertyNames = Object.getOwnPropertyNames(Date.prototype)
    console.log(propertyNames, datePropertyNames)
    if ( date.toString !== Date.prototype.toString ) {
      throw new Error('Invalid date!')
    }
    const month = date.getMonth()+1;
    return month > 2 && month < 6 ? "spring" : month > 5  && month < 9 ? "summer" : month > 8 && month < 12 ? "autumn" : month === 12 || month === 2 || month === 1  ? "winter" : null
  }
  return 'Unable to determine the time of year!'
}


module.exports = {
  getSeason
};
