import React, { JSX } from "react";

interface Step {
  title: string;
  description: string;
  icon: JSX.Element;
}

const steps: Step[] = [
  {
    title: "Initial Discussion",
    description:
      "We will have discussions on the requirements to ensure your MVP (Minimum Viable Product) is ready for the initial launch",
    icon: (
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth={2}
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        color="white"
        style={{ color: "white" }}
        height={50}
        width={50}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"></path>
        <path d="M10 10l2 -2v8" />
      </svg>
    ),
  },
  {
    title: "Deal Finalized",
    description:
      "Once we agree on what to build, We will start working on it right away.",
    icon: (
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth={2}
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        color="white"
        style={{ color: "white" }}
        height={50}
        width={50}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"></path>
        <path d="M10 8h3a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h3" />
      </svg>
    ),
  },
  {
    title: "Product Delivery",
    description:
      "We will develop your product MVP in 15 days (more time required depending on the complexity of the project)",
    icon: (
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth={2}
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        color="white"
        style={{ color: "white" }}
        height={50}
        width={50}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"></path>
        <path d="M10 9a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1"></path>
      </svg>
    ),
  },
  {
    title: "Celebrate your Launch",
    description:
      "We love Celebrations. We will celebrate your launch on our Social Profiles.",
    icon: (
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth={2}
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        color="white"
        style={{ color: "white" }}
        height={50}
        width={50}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"></path>
        <path d="M10 8v3a1 1 0 0 0 1 1h3" />
        <path d="M14 8v8" />
      </svg>
    ),
  },
];

const Work: React.FC = () => {
  return (
    <section
      id="work"
      className="min-h-screen w-full overflow-hidden bg-black text-white"
    >
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="font-heading mb-4 bg-purple-900/10 text-purple-200 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest uppercase title-font">
              How we <span className="text-gradient">work?</span>
            </h2>
            <p className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight sm:text-4xl">
              We follow our process to get you started as quickly as possible.
            </p>
            <p className="mt-4 max-w-2xl text-lg text-gray-300 lg:mx-auto">
              We ensure your MVP (Minimum Viable Product) is ready for the
              initial launch.
            </p>
          </div>
          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      {step.icon}
                    </div>
                    <p className="font-heading ml-16 text-lg leading-6 font-bold">
                      {step.title}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-300">
                    {step.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
