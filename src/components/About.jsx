export const About = () => {
  return (
    <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col-reverse items-center justify-between w-full mb-10 lg:flex-row  gap-0">
        <div className="mb-16 lg:mb-0 lg:max-w-lg  flex-1">
          <div className="max-w-xl mb-6">
            <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none max-w-lg mb-6">
              Meet Tony Brackins
            </h2>
            <p className="text-gray-700 text-base md:text-lg">
              I remember the exact day I decided to become a software engineer.
              I was tired of not making enough money to live the lifestyle I
              wanted and knew the tech field was a growing industry.
            </p>
            <p className="text-gray-700 text-base md:text-lg mt-3">
              Fast forward a few months and my income went from $37,000/yr as a
              business analyst to $75,000/yr as a self-taught software engineer.
              Two years later and I'm making well over $125,000/yr because of
              the process.
            </p>
            <p className="text-gray-700 text-base md:text-lg mt-3">
              Over the years I’ve helped multiple startups build their
              engineering teams by creating the interview questions, the coding
              projects to assess candidates, and conducting the interviews
              themselves. I can’t wait to become your teacher and get you
              started with the Coding and Career Prep Program!
            </p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 text-left py-8 sm:py-12 md:py-16 lg:py-20 xl:pb-28 px-4 md:px-6 lg:px-8">
          <img
            className="flex items-center justify-center -mx-4 lg:pl-8"
            src="/images/about/about.jpeg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
