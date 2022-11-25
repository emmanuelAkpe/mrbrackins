import React, { useState } from "react";

const Register = () => {
  const [show, setshow] = useState(false);

  return (
    <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
        <div className="relative lg:w-1/2">
          <img
            src="/images/register/register.jpg"
            alt=""
            className="object-cover w-full lg:absolute h-80 lg:h-full"
          />
          <svg
            className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
            viewBox="0 0 20 104"
            fill="currentColor"
          >
            <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
          </svg>
        </div>
        <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
          <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
            Register for our <span className="text-dzoma-yellow">free</span>{" "}
            weekly webinars
          </h5>
          <p className="mb-5 text-gray-800">
            Join our free weekly webinar where you will learn everything about
            Programming.
          </p>
          <div className="flex items-center">
            <span className="inline-flex cursor-pointer items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
              <a
                href="https://formaloo.net/p14o2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Register Now
              </a>

              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
