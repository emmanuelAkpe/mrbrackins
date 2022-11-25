import React from "react";

const CourseCard = ({ data }) => {
  return (
    <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
      <div className="relative w-full h-48">
        <img
          src={data.img}
          className="object-cover w-full h-full rounded-t"
          alt="Plan"
        />
      </div>
      <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
        <div>
          <div className="text-lg font-semibold">{data.title}</div>
          <p className="text-sm text-gray-900">{data.text}</p>
          <div className="mt-1 mb-4 mr-1 text-4xl font-bold sm:text-5xl">
            ${data.price}
          </div>
        </div>
        <a href={data.link} target="_blank" rel="noopener noreferrer">
          <button className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
            Start Now
          </button>
        </a>
      </div>
    </div>
  );
};

export default CourseCard;
