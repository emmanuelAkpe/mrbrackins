import React, { useEffect, useState } from "react";
import { CgMenuRound } from "react-icons/cg";
import { Link } from "react-router-dom";
import ContactModal from "../contactModal/ContactModal";

const Navbar = () => {
  const [show, setshow] = useState(false);
  const closeModal = () => {
    setshow(!show);
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div class="bg-tutor-bg z-[999] text-white sticky  top-0  hero_nav">
      <ContactModal modalVisible={show} closeModal={closeModal} />
      <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div class="relative flex items-center justify-between">
          <Link to="/" class="inline-flex items-center gap-2 ">
            <img
              src="/images/logo.jfif"
              className="w-16 h-16 object-cover rounded-2xl"
              alt=""
            />
            <h3 className="font-bold text-2xl">mrbrackins</h3>
          </Link>
          <ul class="flex items-center hidden space-x-8 lg:flex">
            <li>
              <Link
                to="/"
                aria-label="Our product"
                class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="faq"
                aria-label="Product pricing"
                class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Faq
              </Link>
            </li>
            <li>
              <a
                href="http://portfolio.mrbrackins.com/"
                target="_blank"
                class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                portfolio
              </a>
            </li>
            <li>
              <Link
                to="/#"
                class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                onClick={() => setshow(true)}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div class="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <CgMenuRound className="w-8 h-8 block lg:hidden text-dzoma-yellow" />
            </button>
            {isMenuOpen && (
              <div class="absolute top-0 left-0 w-full z-[999]">
                <div class="p-5 bg-white border rounded shadow-sm">
                  <div class="flex items-center justify-between mb-4">
                    <div></div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul class="space-y-4">
                      <li>
                        <Link
                          to="/"
                          onClick={() => setIsMenuOpen(false)}
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="faq"
                          onClick={() => setIsMenuOpen(false)}
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Faq
                        </Link>
                      </li>
                      <li>
                        <a
                          href="http://portfolio.mrbrackins.com/"
                          target="_blank"
                          class="font-medium tracking-wide text-black transition-colors duration-200 hover:text-teal-accent-400"
                        >
                          portfolio
                        </a>
                      </li>
                      <li onClick={() => setIsMenuOpen(false)}>
                        <Link
                          to="#"
                          onClick={() => setshow(true)}
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
