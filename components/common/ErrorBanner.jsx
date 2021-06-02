import React from "react";
import PropTypes from "prop-types";

import ExclamationIcon from "components/common/svg/exclamationIcon";

/**
 * Renders an ErrorBanner component.
 *
 * @param {Object} props
 * @param {String} props.title
 * @param {String} props.body
 * @returns {React.Component}
 *
 * @example
 * const message = {
 *   title: "Something Went Wrong",
 *   body: "No Launches Found"
 * }
 *
 * <ErrorBanner title={message.title} body={message.body} />
 */
function ErrorBanner({ title, body }) {
  return (
    <div className="bg-red-100 p-5 w-full">
      <div className="flex space-x-3">
        <ExclamationIcon />
        <div className="leading-tight flex flex-col space-y-2">
          <div className="text-sm font-medium text-red-700">{title}</div>
          <div className="flex-1 leading-snug text-sm text-red-600">{body}</div>
        </div>
      </div>
    </div>
  );
}

ErrorBanner.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
};

export default ErrorBanner;
