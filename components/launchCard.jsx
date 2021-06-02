import React from "react";

import { formatDate, formatTime } from "utils/formatDateTime";
import countdown from "utils/countdown";
import zeroPad from "utils/zeroPad";

function truncate(str) {
  return str.length > 39 ? str.substring(0, 39) + "..." : str;
}

function LaunchCard({ launch, className }) {
  const [timeLeft, setTimeLeft] = React.useState(countdown(launch.net));

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(countdown(launch.net));
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div
      className={`w-25rem m-6 bg-space-pattern rounded-lg overflow-hidden shadow-2xl self-center ${className}`}
    >
      <div className="flex flex-col text-gray-50 backdrop-filter backdrop-blur backdrop-opacity-60">
        <span
          className="mb-2 h-60 border-b-2 flex justify-center items-center"
          style={{
            backgroundImage: `url(${launch.image})`,
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "local",
            backgroundSize: "cover",
          }}
        >
          <h3 className="p-2 rounded-lg text-2xl bg-gray-800 bg-opacity-60 backdrop-filter backdrop-blur-sm backdrop-opacity-50">
            &Delta;{"T - "}
            {zeroPad(timeLeft.days, 2)}
            {" : "}
            {zeroPad(timeLeft.hours, 2)}
            {" : "}
            {zeroPad(timeLeft.minutes, 2)}
            {" : "}
            {zeroPad(timeLeft.seconds, 2)}
          </h3>
        </span>
        <div className="pt-2 mb-4 mx-4 flex-1">
          {launch.mission?.name ? (
            <h1 className="text-xl">{truncate(launch.mission.name)}</h1>
          ) : (
            <h1 className="text-xl">Unknown Launch</h1>
          )}
          <h2 className="text-lg">{launch.launch_service_provider.name}</h2>
          <p>
            {formatDate(launch.net)}
            {" @ "}
            {formatTime(launch.net)}
          </p>
          <p>{launch.pad.location.name}</p>
          <p>{launch.pad.name}</p>
        </div>
      </div>
    </div>
  );
}

export default LaunchCard;
