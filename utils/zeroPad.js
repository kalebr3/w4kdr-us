/** @module */

/**
 * Pads a provided number to the specified length and returns as a String.
 * @function
 *
 * @param {Number} number Input number to pad.
 * @param {Number} places Total number of digits to pad to.
 * @returns {String} Padded number as String.
 *
 * @example <caption>Under specified amount of places.</caption>
 * // returns "05"
 * zeroPad(5, 2);
 *
 * @example <caption>Matches specified amount of places.</caption>
 * // returns "50"
 * zeroPad(50, 2);
 *
 * @example <caption>Exceeds specified amount of places.</caption>
 * // returns "500"
 * zeroPad(500, 2);
 */
function zeroPad(number, places) {
  return String(number).padStart(places, "0");
}

export default zeroPad;
