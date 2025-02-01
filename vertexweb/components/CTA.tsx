import React, { useState } from "react";
import { IoShareSocialOutline } from "react-icons/io5";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const CTA: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
      } else {
        alert("Failed to send message. Please try again.");
      }

      // Reset form fields
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <section
      className="min-h-screen w-full overflow-hidden bg-gradient-to-r from-purple-900 via-black to-purple-900 text-white"
      id="contact"
    >
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p className="text-base font-semibold uppercase tracking-wide text-purple-200">
              Contact
            </p>
            <h2 className="font-heading mb-4 text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Get in Touch
            </h2>
            <p className="mt-4 max-w-3xl text-xl text-gray-300 lg:mx-auto">
              In hac habitasse platea dictumst
            </p>
          </div>
          <div className="mt-10 flex items-stretch justify-center">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="h-full pr-6">
                <p className="mt-3 mb-12 text-lg text-gray-300">
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut
                  scelerisque sagittis ante, ac tincidunt sem venenatis ut.
                </p>
                <ul className="mb-6 md:mb-0">
                  <li className="flex mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                      <IoShareSocialOutline />
                    </div>
                    <div className="ml-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-white">
                        Connect with Us
                      </h3>
                      {/* Social Icons */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="mt-2 flex justify-center items-center space-x-6"
                      >
                        {[
                          {
                            Icon: FaFacebookF,
                            link: "https://www.facebook.com/profile.php?id=61572442240215",
                          },
                          {
                            Icon: FaXTwitter,
                            link: "https://x.com/vertexweb_",
                          },
                          {
                            Icon: FaInstagram,
                            link: "https://www.instagram.com/vertexweb_/",
                          },
                          {
                            Icon: FaLinkedinIn,
                            link: "https://www.linkedin.com/in/anurag-gautam-52b899218/",
                          },
                          {
                            Icon: FaWhatsapp,
                            link: "https://api.whatsapp.com/send?phone=+917303372170",
                          }, // Use your country code
                        ].map(({ Icon, link }, index) => (
                          <motion.a
                            key={index}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-white hover:text-primary transition-colors"
                          >
                            <Icon className="w-6 h-6" />
                          </motion.a>
                        ))}
                      </motion.div>
                    </div>
                  </li>
                  <li className="flex mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                        <path d="M15 7a2 2 0 0 1 2 2" />
                        <path d="M15 3a6 6 0 0 1 6 6" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-white">
                        Contact
                      </h3>
                      <p className="text-gray-300">Mobile: +91 7303372170</p>
                      <p className="text-gray-300">
                        GMail: vertexwebstore@gmail.com
                      </p>
                    </div>
                  </li>
                  <li className="flex mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                        <path d="M12 7v5l3 3" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-white">
                        Working hours
                      </h3>
                      <p className="text-gray-300">
                        Monday - Friday: 10:00 AM - 08:00 PM
                      </p>
                      <p className="text-gray-300">
                        Saturday &amp; Sunday: 10:00 AM - 05:00 PM
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                <h2 className="mb-4 text-2xl font-bold text-white">
                  Ready to Get Started?
                </h2>
                <form id="contactForm" onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <div className="mx-0 mb-1 sm:mb-4">
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label
                          htmlFor="name"
                          className="pb-1 text-xs uppercase tracking-wider"
                        />
                        <input
                          type="text"
                          id="name"
                          autoComplete="given-name"
                          placeholder="Your name"
                          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-gray-300 sm:mb-0"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label
                          htmlFor="email"
                          className="pb-1 text-xs uppercase tracking-wider"
                        />
                        <input
                          type="email"
                          id="email"
                          autoComplete="email"
                          placeholder="Your email address"
                          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-gray-300 sm:mb-0"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        htmlFor="textarea"
                        className="pb-1 text-xs uppercase tracking-wider"
                      />
                      <textarea
                        id="textarea"
                        name="message"
                        cols={30}
                        rows={5}
                        placeholder="Write your message..."
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-gray-300 sm:mb-0"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="w-full bg-primary-500 text-white px-6 py-3 font-xl rounded-md sm:mb-0"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
