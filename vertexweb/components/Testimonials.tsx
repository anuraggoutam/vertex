"use client";
import React from "react";

interface Testimonial {
  text: string;
  name: string;
  position: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    text: "Share a testimonial that hits some of your benefits from one of your popular customers.",
    name: "Sarah Steiner",
    position: "VP Sales at Google",
    image:
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    text: "Make sure you only pick the right sentence to keep it short and simple.",
    name: "Dylan Ambrose",
    position: "Lead marketer at Netflix",
    image:
      "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    text: "This is an awesome landing page template I've seen. I would use this for anything.",
    name: "Gabrielle Winn",
    position: "Co-founder of Acme Inc",
    image:
      "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const TestimonialCard: React.FC<Testimonial> = ({
  text,
  name,
  position,
  image,
}) => (
  <div className="flex flex-col justify-between w-full h-full px-6 py-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl md:px-14 md:py-14">
    <p className="text-2xl leading-normal text-gray-300">
      {text.split(" ").map((word, index) =>
        word === "testimonial" ||
        word === "right sentence" ||
        word === "awesome" ? (
          <mark
            key={index}
            className="mx-1 text-purple-800 bg-purple-100 rounded-md ring-purple-100 ring-4 dark:ring-purple-900 dark:bg-purple-900 dark:text-purple-200"
          >
            {word}
          </mark>
        ) : (
          word + " "
        )
      )}
    </p>
    <div className="flex items-center mt-8 space-x-3 relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-50"></div>
      </div>
      <div className="relative z-10 flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <img
          alt="Avatar"
          src={image}
          loading="lazy"
          className="object-cover w-full h-full rounded-full"
        />
      </div>
      <div>
        <div className="text-lg font-medium text-gray-200">{name}</div>
        <div className="text-gray-400">{position}</div>
      </div>
    </div>
  </div>
);

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
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
