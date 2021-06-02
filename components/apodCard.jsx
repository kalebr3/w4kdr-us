import React from "react";

import ErrorBanner from "components/common/ErrorBanner";

export default function APODCard({ apod }) {
  switch (apod.media_type) {
    case "image": {
      return (
        <div className="m-2 p-4 grid gap-6 grid-col-1 lg:grid-cols-12 bg-gray-200">
          <div className="lg:col-span-5">
            <img src={apod.url} alt={apod.title} />
          </div>
          <div className="lg:col-span-7">
            <h1 className="text-3xl">{apod.title}</h1>
            <h2 className="text-2xl">{apod.copyright}</h2>
            <p>{apod.date}</p>
            <p className="text-lg">{apod.explanation}</p>
          </div>
        </div>
      );
    }
    case "video": {
      return (
        <div className="m-2 p-4 grid gap-6 grid-col-1 lg:grid-cols-12 bg-gray-200">
          <div className="lg:col-span-5">
            <iframe
              className="w-full h-full"
              src={apod.url}
              title={apod.title}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen=""
            />
          </div>
          <div className="lg:col-span-7">
            <h1 className="text-3xl">{apod.title}</h1>
            <h2 className="text-2xl">{apod.copyright}</h2>
            <p>{apod.date}</p>
            <p className="text-lg">{apod.explanation}</p>
          </div>
        </div>
      );
    }
    default: {
      return (
        <ErrorBanner title="Something Went Wrong" body="Unknown Media Type" />
      );
    }
  }
}
