"use client";
import React from "react";

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials">
      <div className="py-5 bg-black">
        <div className="container flex flex-col items-center justify-center w-full p-6 mx-auto text-center xl:px-0">
          <div className="text-sm font-bold tracking-wider text-purple-600 uppercase">
            Testimonials
          </div>
          <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-white lg:leading-tight lg:text-4xl">
            Here's what our customers said
          </h2>
          <p className="max-w-2xl py-4 text-lg leading-normal text-gray-300 lg:text-xl xl:text-xl">
            Testimonials are a great way to increase brand trust and awareness.
            Use this section to highlight your popular customers.
          </p>
        </div>
        <div className="container p-6 mx-auto mb-10 xl:px-0">
          <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
            <div className="lg:col-span-2 xl:col-auto">
              <div className="flex flex-col justify-between w-full h-full px-6 py-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl md:px-14 md:py-14">
                <p className="text-2xl leading-normal text-gray-300">
                  Share a{" "}
                  <mark className="mx-1 text-purple-800 bg-purple-100 rounded-md ring-purple-100 ring-4 dark:ring-purple-900 dark:bg-purple-900 dark:text-purple-200">
                    testimonial
                  </mark>{" "}
                  that hits some of your benefits from one of your popular
                  customers.
                </p>
                <div className="flex items-center mt-8 space-x-3 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-50"></div>
                  </div>
                  <div className="relative z-10 flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                    <img
                      alt="Avatar"
                      src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?crop=faces&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIwMTQ5ODEx&ixlib=rb-1.2.1&q=80&w=100&h=100"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <div className="text-lg font-medium text-gray-200">
                      Sarah Steiner
                    </div>
                    <div className="text-gray-400">VP Sales at Google</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex flex-col justify-between w-full h-full px-6 py-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl md:px-14 md:py-14">
                <p className="text-2xl leading-normal text-gray-300">
                  Make sure you only pick the{" "}
                  <mark className="mx-1 text-purple-800 bg-purple-100 rounded-md ring-purple-100 ring-4 dark:ring-purple-900 dark:bg-purple-900 dark:text-purple-200">
                    right sentence
                  </mark>{" "}
                  to keep it short and simple.
                </p>
                <div className="flex items-center mt-8 space-x-3 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-50"></div>
                  </div>
                  <div className="relative z-10 flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                    <img
                      alt="Avatar"
                      src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&crop=faces&fit=crop&w=100&h=100&q=80"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <div className="text-lg font-medium text-gray-200">
                      Dylan Ambrose
                    </div>
                    <div className="text-gray-400">
                      Lead marketer at Netflix{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex flex-col justify-between w-full h-full px-6 py-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl md:px-14 md:py-14">
                <p className="text-2xl leading-normal text-gray-300">
                  This is an{" "}
                  <mark className="mx-1 text-purple-800 bg-purple-100 rounded-md ring-purple-100 ring-4 dark:ring-purple-900 dark:bg-purple-900 dark:text-purple-200">
                    awesome
                  </mark>{" "}
                  landing page template I've seen. I would use this for
                  anything.
                </p>
                <div className="flex items-center mt-8 space-x-3 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-50"></div>
                  </div>
                  <div className="relative z-10 flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                    <img
                      alt="Avatar"
                      src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100&crop=faces&q=80"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <div className="text-lg font-medium text-gray-200">
                      Gabrielle Winn
                    </div>
                    <div className="text-gray-400">Co-founder of Acme Inc</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
