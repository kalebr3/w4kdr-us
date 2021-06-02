import React from "react";
import Link from "next/link";

export default function Header({ onClick, active }) {
  return (
    <nav className="sticky top-0 shadow-md bg-gray-800 flex items-center justify-between flex-wrap p-6 z-20">
      <Link href="/">
        <span className="flex items-center flex-shrink-0 mr-6 font-semibold text-xl tracking-wide text-gray-50">
          W4KDR
        </span>
      </Link>

      <div className="block lg:hidden">
        <button
          onClick={onClick}
          className="flex items-center px-3 py-2 border rounded text-gray-50 border-gray-50 hover:text-gray-300 hover:border-gray-300"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div
        className={
          "lg:flex flex-grow items-center" +
          (active ? " w-full flex" : " hidden")
        }
      >
        <div className="flex flex-col lg:flex-row list-none lg:ml-auto">
          <Link href="/">
            <a className="block mt-4 lg:inline-block lg:mt-0 text-gray-50 hover:text-gray-200 mr-4 sm:w-auto">
              Home
            </a>
          </Link>
          <Link href="/experiments/launchlibrary/upcoming">
            <a className="block mt-4 lg:inline-block lg:mt-0 text-gray-50 hover:text-gray-200 mr-4 sm:w-auto">
              Launch Library
            </a>
          </Link>
          <Link href="/experiments/nasa/apod">
            <a className="block mt-4 lg:inline-block lg:mt-0 text-gray-50 hover:text-gray-200 mr-4 sm:w-auto">
              NASA APOD
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
