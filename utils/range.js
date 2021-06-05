/** @module */

/**
 * @function
 * @param {Number} from Array starting number(inlusive).
 * @param {Number} to Array ending number(inclusive).
 * @param {Number} step Step to increment array.
 * @returns {Number[]} Array of numbers.
 */
function range(from, to, step = 1) {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }
  return range;
}

export default range;
