import React from "react";

const WhyJoinCard = ({ value }) => {
  return (
    <div className=" lg:w-80 md:w-64 md:h-5/6  flex flex-col gap-3  items-start justify-start  p-10 cursor-pointer">
      <img src={value.img} alt="" className="w-full h-36 object-cover" />
      <h6 className="text-center  text-xl md:text-2xl font-semibold ">
        {value.title}
      </h6>
      <p className=" text-base w-full  sm:text-lg sm:mx-auto  lg:mx-0 ">
        {value.desc}
      </p>
    </div>
  );
};

export default WhyJoinCard;
