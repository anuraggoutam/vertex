import React from "react";
import { FaCode, FaBullhorn, FaPenNib } from "react-icons/fa"; // Import icons from react-icons

const Services: React.FC = () => {
  return (
    <section id="services">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-black text-white">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-sky-500 text-white">
              Newsletter
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-slate-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="fdca20a0-aeb4-4caf-ba1b-4351eee42363"
                    x={0}
                    y={0}
                    width=".135"
                    height=".30"
                  >
                    <circle cx={1} cy={1} r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#fdca20a0-aeb4-4caf-ba1b-4351eee42363)"
                  width={52}
                  height={24}
                />
              </svg>
              <span className="relative">Stay</span>
            </span>
            updated with our latest services
          </h2>
          <p className="text-base text-gray-300 md:text-lg">
            Subscribe to our newsletter to receive updates on our latest
            services and offerings.
          </p>
        </div>
        <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
          <div className="lg:col-span-2 xl:col-auto">
            <div className="flex flex-col justify-between w-full h-full px-6 py-6 bg-white/5 rounded-2xl md:px-14 md:py-14">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-purple-50">
                <FaCode className="w-12 h-12 text-purple-400" />
              </div>
              <h6 className="mb-2 font-semibold leading-5 text-white">
                Website Development:
              </h6>
              <p className="mb-3 text-sm text-gray-300">
                Our website development service offers end-to-end solutions for
                creating and launching professional and visually appealing
                websites.
              </p>
              <ul className="mb-4 -ml-1 space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-1">
                    <FaCode className="w-5 h-5 mt-px text-purple-400" />
                  </span>
                  Computers
                </li>
                <li className="flex items-start">
                  <span className="mr-1">
                    <FaCode className="w-5 h-5 mt-px text-purple-400" />
                  </span>
                  Health
                </li>
                <li className="flex items-start">
                  <span className="mr-1">
                    <FaCode className="w-5 h-5 mt-px text-purple-400" />
                  </span>
                  Reference
                </li>
              </ul>
              <a
                href="#"
                aria-label="Learn more about Website Development"
                className="inline-flex items-center font-semibold transition-colors duration-200 text-purple-400 hover:text-purple-800"
              >
                Learn more
              </a>
            </div>
          </div>
          <div className="lg:col-span-2 xl:col-auto">
            <div className="flex flex-col justify-between w-full h-full px-6 py-6 bg-white/5 rounded-2xl md:px-14 md:py-14">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-purple-50">
                <FaBullhorn className="w-12 h-12 text-purple-400" />
              </div>
              <h6 className="mb-2 font-semibold leading-5 text-white">
                Social Media Marketing:
              </h6>
              <p className="mb-3 text-sm text-gray-300">
                Our social media marketing service helps businesses establish a
                strong online presence and engage with their target audience
                effectively.
              </p>
              <ul className="mb-4 -ml-1 space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-1">
                    <FaBullhorn className="w-5 h-5 mt-px text-purple-400" />
                  </span>
                  Computers
                </li>
                <li className="flex items-start">
                  <span className="mr-1">
                    <FaBullhorn className="w-5 h-5 mt-px text-purple-400" />
                  </span>
                  Health
                </li>
                <li className="flex items-start">
                  <span className="mr-1">
                    <FaBullhorn className="w-5 h-5 mt-px text-purple-400" />
                  </span>
                  Reference
                </li>
              </ul>
              <a
                href="#"
                aria-label="Learn more about Social Media Marketing"
                className="inline-flex items-center font-semibold transition-colors duration-200 text-purple-400 hover:text-purple-800"
              >
                Learn more
              </a>
            </div>
          </div>
          <div className="lg:col-span-2 xl:col-auto">
            <div className="flex flex-col justify-between w-full h-full px-6 py-6 bg-white/5 rounded-2xl md:px-14 md:py-14">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-purple-50">
                <FaPenNib className="w-12 h-12 text-purple-400" />
              </div>
              <h6 className="mb-2 font-semibold leading-5 text-white">
                Content Writing and Copywriting:
              </h6>
              <p className="mb-3 text-sm text-gray-300">
                Our content writing and copywriting service offers high-quality
                and engaging content that captivates your audience and drives
                conversions.
              </p>
              <ul className="mb-4 -ml-1 space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-1">
                    <FaPenNib className="w-5 h-5 mt-px text-purple-400" />
                  </span>
                  Computers
                </li>
                <li className="flex items-start">
                  <span className="mr-1">
                    <FaPenNib className="w-5 h-5 mt-px text-purple-400" />
                  </span>
                  Health
                </li>
                <li className="flex items-start">
                  <span className="mr-1">
                    <FaPenNib className="w-5 h-5 mt-px text-purple-400" />
                  </span>
                  Reference
                </li>
              </ul>
              <a
                href="#"
                aria-label="Learn more about Content Writing and Copywriting"
                className="inline-flex items-center font-semibold transition-colors duration-200 text-purple-400 hover:text-purple-800"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
