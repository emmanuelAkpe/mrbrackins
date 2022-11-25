export const Youtube = () => {
  return (
    <div className=" px-4 mx-auto sm:max-w-xl md:max-w-full  md:px-24 lg:px-8 ">
      <div className="flex flex-col mb-6 items-center justify-center md:mb-10">
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
            Check our Youtube <span className="text-dzoma-yellow">Channel</span>
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Tony Brackins Built A YouTube Channel Specially For Beginners Who
            Need Experience In Tech. Building Techs Expert May Not Be Easy And
            That’s What Tony Brackins Is Here To Do, Making Tech Easier For
            Beginners. He Has All The Steps To Get Beginners To The Destination
            Of Being An Expert In Tech.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-8">
          <iframe
            className="m-5 "
            src="https://www.youtube.com/embed/8yWDZcGNvv0"
            title="7. How to build a Linked List: InsertAt Method"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>

          <iframe
            className="m-5 "
            src="https://www.youtube.com/embed/0VqP3SRMvvo"
            title="*Must Know* - How To Do A Binary Search"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>

          <iframe
            className="m-5 "
            src="https://www.youtube.com/embed/8yWDZcGNvv0"
            title="7. How to build a Linked List: InsertAt Method"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};
