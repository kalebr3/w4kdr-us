import React from "react";

export default function Heading({ text }) {
  return (
    <div className="m-6 p-2 text-center">
      <h2 className="font-medium text-3xl tracking-wide">{text}</h2>
    </div>
  );
}
