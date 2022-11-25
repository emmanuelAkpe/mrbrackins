import React, { useEffect } from "react";
import { Values } from "./data";
import WhyJoinCard from "./WhyJoinCard";
import AOS from "aos";

export const WhyJoin = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <div className="why rounded-xl px-4 py-16 mx-auto  md:max-w-full  md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col items-center justify-center">
        <div className="max-w-xl pr-16 mx-auto mb-10 flex flex-col items-center justify-center">
          <h5 className="text-2xl md:text-3xl lg:text-4xl tracking-tight font-extrabold ">
            Join Us Today!
          </h5>
          <p className="py-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Our program is designed to ensure our graduates thrive as STEM
            professionals for the rest of their careers.
          </p>
        </div>
        <div className="grid gap-5 row-gap-5 sm:grid-cols-3">
          {Values.map((value, index) => {
            return (
              <div
                className=""
                key={index}
                data-aos="fade-up"
                data-aos-delay={`${index > 0 ? 200 * index : 0}`}
                data-aos-duration="1000"
              >
                <WhyJoinCard value={value} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
