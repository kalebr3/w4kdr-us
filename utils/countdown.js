/** @module */

/**
 * Calculates the time from now to the specified date and returns an object
 * containing the remaining time.
 * @function
 *
 * @param {String} rawFutureDate Timestamp String.
 * @returns {Object} Object containing the days, hours, minutes, and seconds
 * remaining until the rawFututreDate.
 */
function countdown(rawFutureDate) {
  let difference = +new Date(rawFutureDate) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
}

export default countdown;
