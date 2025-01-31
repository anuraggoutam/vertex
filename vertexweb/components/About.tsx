"use client";
import React from "react";

const About: React.FC = () => {
  return (
    <section id="about">
      <div className="sm:flex items-center justify-center max-w-screen-xl mx-auto">
        <div className="sm:w-1/2 p-5">
          <div className="text">
            <span className="text-gray-500 border-b-2 border-primary uppercase">
              About us
            </span>
            <h2 className="my-4 font-bold text-3xl sm:text-4xl">
              About <span className="text-primary">Our Company</span>
            </h2>
            <p className="text-gray-600">
              ### About Us At VertexWeb, we build high-performance websites
              using modern technologies like Next.js, GraphQL, MERN stack,
              TypeScript, and WordPress. Our expert team creates stunning,
              user-friendly digital experiences tailored to your business needs.
              Beyond development, we offer SEO and social media marketing
              services to boost your online visibility and engagement. Whether
              you need a custom web app or a strong digital strategy, we help
              your brand grow and stand out. Let’s build something amazing
              together!
            </p>
          </div>
        </div>
        <div className="sm:w-1/2 p-10 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-50"></div>
          </div>
          <div className="relative z-10 image object-center text-center">
            <img src="https://i.imgur.com/WbQnbas.png" alt="About Us" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
