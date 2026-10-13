
import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 text-center">
      <div className="text-5xl mb-4">👋</div>

      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Hello, I'm Sayan!
      </h1>

      <p className="max-w-md text-gray-600 mb-6">
        Welcome to my website. I'm a developer who loves
        building modern web applications and learning
        new technologies.
      </p>

      <div className="flex gap-4">
        <button className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
          Get Started
        </button>

        <button className="rounded-lg border border-gray-300 px-6 py-3 hover:bg-gray-100">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Home;
