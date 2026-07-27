import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <h1 className="text-8xl font-bold text-indigo-600">404</h1>

      <h2 className="mt-4 text-3xl font-semibold text-gray-800">
        Page Not Found
      </h2>

      <p className="mt-3 text-gray-500 text-center max-w-md">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-8 rounded-lg bg-indigo-600 px-6 py-3 text-white font-medium hover:bg-indigo-700 transition"
      >
        Go Back Home
      </Link>
    </div>
    );
};

export default NotFound;