import React from "react";

interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    title: "E-commerce & Business Solutions",
    description:
      "From Shopify and WooCommerce to fully custom MERN-based e-commerce solutions, we help businesses sell smarter and grow faster. Features like secure payment gateways, order tracking, and CRM integrations ensure a smooth experience for both you and your customers.",
  },
  {
    title: "UI/UX",
    description:
      "We design visually appealing, intuitive, and mobile-first websites that keep users engaged. Our team creates custom UI components, dark mode designs, and interactive elements using Figma and Adobe XD. We also offer branding and logo design to make your business stand out.",
  },
  {
    title: "SEO & Performance Optimization",
    description:
      "A great website is useless if it doesn't rank. Our AI-driven SEO strategies ensure your site reaches the right audience, while our speed optimization techniques guarantee fast load times for a seamless user experience. We also provide local SEO services, structured data implementation, and conversion-focused landing pages to maximize results.",
  },
  {
    title: "Tech Stack Expertise",
    description:
      "Our team is skilled in cutting-edge web technologies like Next.js, GraphQL, Tailwind CSS, and Express.js, ensuring your website is scalable and secure. We implement advanced authentication methods (JWT, OAuth, NextAuth.js) and API integrations for seamless business operations.",
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
          <div className="lg:text-center text-left">
            <h2 className="font-heading mb-4 bg-purple-900/10 text-purple-200 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest uppercase title-font ">
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
                <div
                  key={index}
                  className="relative border-2 item border-purple-400 hover:border-solid rounded-[50px] p-4 px-1 items-center space-x-4"
                >
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white "></div>
                    <p className="font-heading md:ml-16 ml-4 text-lg leading-6 font-bold">
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
