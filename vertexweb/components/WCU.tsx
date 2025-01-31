import React from "react";

interface Feature {
  imgSrc: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    imgSrc: "https://www.svgrepo.com/show/503163/api-settings.svg",
    title: "Powerful API",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
  },
  {
    imgSrc: "https://www.svgrepo.com/show/503138/webpack.svg",
    title: "Easy to integrate SDK",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
  },
  {
    imgSrc: "https://www.svgrepo.com/show/511771/dashboard-671.svg",
    title: "Low Transaction Cost",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
  },
  {
    imgSrc: "https://www.svgrepo.com/show/76267/free-commercial-label.svg",
    title: "Powerful Dashboard",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
  },
];

const WCU: React.FC = () => {
  return (
    <section
      id="features"
      className="min-h-screen w-full overflow-hidden bg-black text-white"
    >
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="font-heading mb-4 bg-purple-900/10 text-purple-200 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest uppercase title-font">
              Why <span className="text-gradient">choose us?</span>
            </h2>
            <p className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight sm:text-4xl">
              We know technology. We build websites that drive results. We are{" "}
              <span className="text-gradient">web experts.</span>.
            </p>
            <p className="mt-4 max-w-2xl text-lg text-gray-300 lg:mx-auto">
              We build websites for businesses worldwide, ensuring seamless
              performance. We care for our clients and help them grow online.
            </p>
          </div>
          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {features.map((feature, index) => (
                <div key={index} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <img src={feature.imgSrc} alt={feature.title} />
                    </div>
                    <p className="font-heading ml-16 text-lg leading-6 font-bold">
                      {feature.title}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-300">
                    {feature.description}
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

export default WCU;
