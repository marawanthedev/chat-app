import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <div className="text-center text-white max-w-[80%]">
        <h1 className="text-5xl font-extrabold mb-4">404</h1>
        <p className="text-1xl mb-8">Oops! Page not found</p>
        <p className="text-lg mb-6 ">
          The page you are looking for does not exist or has been moved.
        </p>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
