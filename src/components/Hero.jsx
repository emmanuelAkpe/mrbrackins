import React from "react";

const Hero = () => {
  return (
    <div className="hero w-full h-2/4 md:h-screen text-white pt-5">
      <div className="max-w-7xl mx-auto">
        <main className="mx-auto max-w-7xl mb-8 sm:mb-12 md:mb-16">
          <div className="flex items-center justify-center flex-col-reverse md:flex-row  ">
            <div className="w-full sm:w-1/2 text-left py-8 sm:py-12 md:py-16 lg:py-20 xl:pb-28 px-4 md:px-6 lg:px-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-extrabold  text-white">
                <span className="md:block xl:inline ">
                  Land Your Dream Job in
                </span>{" "}
                <span className=" md:block  xl:inline text-tutor-yellow ">
                  Tech
                </span>
              </h1>

              <p className="py-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Learn today’s most in-demand digital skills and kickstart your
                new career. You’ll learn to solve problems with code while
                applying industry best practices in a collaborative environment.
              </p>

              <div className="py-6 sm:py-8 flex items-start justify-start gap-3">
                <a
                  href="https://training.brackinscreative.com/organizations/i/3paHGc0AJmibAzUMXT6u1uD1sZ7wYruhAF9z6DLE5DoGNmm8A6"
                  target="_blank"
                  className="px-6 py-3 text-base font-medium  border border-dzoma-yellow text-dzoma-yellow  md:py-4 md:text-lg md:px-10 rounded-md shadow"
                >
                  Join For Free
                </a>
                <a
                  href="https://buy.stripe.com/cN2dRcb8hcBBcUweVp"
                  target="_blank"
                  className="bg-dzoma-yellow  text-white px-6 py-3 text-base font-medium  hover:bg-yellow-500 md:py-4 md:text-lg md:px-10 rounded-md shadow"
                >
                  Get Tutoring Now!
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center -mx-4 lg:pl-8">
              <div className="flex flex-col items-end px-3">
                <img
                  className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                  src="/images/hero/img2.jpg"
                  alt=""
                />
                <img
                  className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                  src="/images/hero/img1.jpg"
                  alt=""
                />
              </div>
              <div className="px-3">
                <img
                  className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                  src="/images/hero/img3.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Hero;
