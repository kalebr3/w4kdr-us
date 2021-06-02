/** @module */

/**
 * Formats the provided date string to be a human readable date.
 * @function
 *
 * @param {String} rawDateTime Timestamp String.
 * @returns {String} Pretty formated date as String.
 */
function formatDate(rawDateTime) {
  const date = new Date(rawDateTime);

  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(date);
}

/**
 * Formats the provided date string to a be human readable time.
 * @function
 *
 * @param {String} rawDateTime Timestamp String.
 * @returns {String} Pretty formated time as String.
 */
function formatTime(rawDateTime) {
  const date = new Date(rawDateTime);

  return new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
    hour12: false,
  }).format(date);
}

export { formatDate, formatTime };
