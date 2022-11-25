import { data } from "./data";
import GainCard from "./GainCard";

const Gain = () => {
  return (
    <div className="gain px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col lg:flex-row">
        <div className="max-w-xl pr-16 mx-auto mb-10">
          <h5 className="mb-6 text-2xl  leading-none  md:text-3xl lg:text-4xl tracking-tight font-bold ">
            What you stand to <br className="md:block hidden" />{" "}
            <span className="text-dzoma-yellow">gain</span>
          </h5>
          <p className="mb-6 py-3 text-base sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Since 2019,we have trained over 1000 students in various fields
            across software development,digital marketing, and product design.
          </p>
          <div className="flex items-center">
            <a
              href="https://buy.stripe.com/cN2dRcb8hcBBcUweVp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="submit"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-black  transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none bg-dzoma-yellow"
              >
                Get Tutoring Now!
              </button>
            </a>
          </div>
        </div>
        <div className="grid gap-5 row-gap-5 sm:grid-cols-2">
          {data.map((data, index) => {
            return (
              <div className="" key={index}>
                <GainCard data={data} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gain;
