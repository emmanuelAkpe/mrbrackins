import CourseCard from "./CourseCard";
import { data } from "./data";

export const Course = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-dzoma-yellow lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="bc9273ce-29bb-4565-959b-714607d4d027"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#bc9273ce-29bb-4565-959b-714607d4d027)"
                width="52"
                height="24"
              />
            </svg>
          </span>{" "}
          What You Will <span className="text-dzoma-yellow">Learn</span>
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          We’ve carefully designed our curriculum to contain the most up-to-date
          tools currently in demand in the job market. This is what makes our
          tuitions innovative and what will enable you to take the next step in
          your career.
        </p>
      </div>
      <div className="grid max-w-md gap-10 row-gap-8 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
        {data.map((data, index) => {
          return (
            <div className="" key={index}>
              <CourseCard data={data} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
