import React from "react";

const GainCard = ({ data }) => {
  return (
    <div className="w-full space-y-4 text-left gap-6 relative rounded-xl border border-slate-300 border-opacity-25 p-4 lg:p-6 cursor-pointer hover:bg-oya-ghana-light-gray hover:scale-105 transition duration-500 bg-white">
      <div
        className={`flex items-center justify-center w-16 h-16 mb-4 rounded-full ${data.bg}`}
      >
        {data.img}
      </div>
      <h6 className="mb-2 font-semibold leading-5">{data.title}</h6>
      <p className="text-sm text-gray-700">{data.text}</p>
    </div>
  );
};

export default GainCard;
