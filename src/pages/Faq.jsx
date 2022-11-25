import React, { useState } from "react";

const Item = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded shadow-sm">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-medium">{title}</p>
        <div className="flex items-center justify-center w-8 h-8 border rounded-full">
          <svg
            viewBox="0 0 24 24"
            className={`w-3 text-gray-600 transition-transform duration-200 ${
              isOpen ? "transform rotate-180" : ""
            }`}
          >
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              points="2,7 12,17 22,7"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          <p className="text-gray-700">{children}</p>
        </div>
      )}
    </div>
  );
};

export const Faq = () => {
  return (
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div class="flex flex-col mb-16 sm:text-center">
          <div class="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
            <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span class="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="text-dzoma-yellow absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="ec5d8ef5-b853-4714-b94f-df28ec98eeb7"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#ec5d8ef5-b853-4714-b94f-df28ec98eeb7)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span class="relative">The</span>
              </span>{" "}
              Frequently Asked{" "}
              <span className="text-dzoma-yellow">Questions</span>
            </h2>
            <p class="text-base text-gray-700 md:text-lg">
              You've Got Questions? We've Got Answers.
            </p>
          </div>
        </div>
        <div class="space-y-4">
          <Item title="What is the structure of the program?">
            Coding & Career Prep Program is a self-paced program, filled with
            interactive coding tutorials that you do on your own, required
            readings, numerous practice problems and multiple projects that
            force you to apply what you've learned in those projects.
          </Item>
          <Item title="How long will I have access to the curriculum ?">
            You will have access to the program for eight months, starting from
            the day you sign up. The eight months is how much time you have to
            finish the program and use your mentor sessions, mock interviews,
            and other package items. After those eight months are up, you will
            no longer be able to use those resources or access the program.
          </Item>
          <Item title="What will I learn in this curriculum?">
            You'll learn to build websites and web applications using the latest
            and most relevant technologies on the job market, such as JavaScript
            and React JS, giving you the skills necessary to be hired as a
            frontend software developer and software engineer.
          </Item>
          <Item title="How long does the curriculum take to finish?">
            This is a self-paced curriculum, allowing each student to work at
            their own pace. We estimate it should take students about three-five
            months to finish the curriculum, at which point they can start
            applying to jobs. Students have up to 10 months to finish the
            program once they sign up.
          </Item>
          <Item title="Do you offer mock interviews?">
            Yes, depending on the package you purchase, you will receive one,
            two, or three mock interviews where I will be helping you practice
            for real interviews. I've interviewed a number of software
            engineering candidates, so I'll be helping you prepare before the
            mock interview, as well as providing feedback after the mock
            interview.
          </Item>
          <Item title="Will you help me in my job search?">
            Yes, on top of making sure you have ample projects for your coding
            portfolio, I will also be providing help in your job search by
            giving you resources to update your resume, helping you create a
            cover letter template, and giving you my strategies and tips around
            sending effective job applications and improving the chance of your
            applications being seen by a hiring manager. I will also
            occasionally send a few job postings your way and try to connect you
            with recruiters.
          </Item>
        </div>
      </div>
    </div>
  );
};
