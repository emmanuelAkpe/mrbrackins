const More = () => {
  return (
    <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
        <div>
          <img
            className="object-cover w-full  rounded-2xl shadow-lg "
            src="/images/more/more-img.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <h2 className="mb-6 text-2xl  leading-none  md:text-3xl lg:text-4xl tracking-tight font-bold">
              Become expert in-demand
              <br className="hidden md:block " />
              <span className="text-dzoma-yellow">skills seamlessly</span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              We have built the best environment to give you the best learning
              experience. A blend of self-paced and instructor-led training with
              lots of hands-on experience to ensure you are well-rounded in the
              track of your choice.
            </p>
          </div>
          <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
            <div className="bg-white border-l-4 shadow-sm border-dzoma-yellow hover:scale-105 transition duration-500">
              <div className="h-full p-5 border border-l-0 rounded-r">
                <h6 className="mb-2 font-semibold leading-5">
                  One-on-One Mentorship
                </h6>
                <p className="text-sm text-gray-900">
                  Schedule one-on-one sessions with a career advisor to work on
                  career-related projects or questions of all levels. We’ll
                  provide candid feedback and support to level-up your job
                  prospects.
                </p>
              </div>
            </div>
            <div className="bg-white border-l-4 shadow-sm border-dzoma-yellow hover:scale-105 transition duration-500 ">
              <div className="h-full p-5 border border-l-0 rounded-r">
                <h6 className="mb-2 font-semibold leading-5">
                  Workshops Access
                </h6>
                <p className="text-sm text-gray-900">
                  Access our collection of workshops that are available
                  in-person or online. We’ll cover advanced topics such as
                  networking, behavioral interview techniques, and pay
                  negotiation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default More;
