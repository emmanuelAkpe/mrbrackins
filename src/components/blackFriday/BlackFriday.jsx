import React from "react";
import {
  AiOutlineClose,
} from "react-icons/ai";

const BlackModal = ({ modalVisible, closeModal }) => {
  if (!modalVisible) return null;
  return (
    <div className=" m-auto z-50 fixed inset-0 bg-black  bg-opacity-20 backdrop-blur-sm flex justify-center items-center ">
      <div className="relative w-fit h-fit bg-tutor-bg flex flex-col justify-center items-center mt-24  shadow-lg rounded-lg">
        <div className="mb-5 flex items-center justify-center gap-2 ">
          <AiOutlineClose
            onClick={closeModal}
            className="w-8 h-8 p-1 border font-extrabold text-white  border-dzoma-yellow rounded-full absolute top-5 right-5"
          />
        </div>
        <div className="flex items-center justify-center gap-3 p-5">
          <img
            src="/images/black/black.png"
            alt=""
            className="md:w-2/6 w-1/2 "
          />
          <div className="flex items-start justify-start flex-col  text-base sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-4xl font-extrabold lg:mx-0 text-white">
            <p>Fast track your path way to the world of tech</p>
            <a
              href="https://checkout.stripe.com/c/pay/cs_live_a1ji4MV65cqTsa1EsMM0DYMnwDhABynGdvbzm6QOXVr48XM2cnLCoS5K3c#fidkdWxOYHwnPyd1blppbHNgWjA0TmFwfVNGRmpETjxrU2Noa3w3XHxkR05QV2g9N0FLUzBpSGZBN0Z2NHdLbWpyVDI3QUpka25BU11qSmhJaXNIPTxtSlxBPXVKUWFwSTZINl9pYDJ0d0FcNTVkZ21rZkNzQicpJ3VpbGtuQH11anZgYUxhJz8nZks3YVdmZz1tZkdHZlByYFN1J3gl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="border border-dzoma-yellow mt-3 p-3 rounded-xl">
                Get It Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlackModal;
