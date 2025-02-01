"use client";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">VertexWeb</h3>
            <p className="text-gray-300">
              Shaping digital peaks for businesses worldwide.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Web Design
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  SEO Optimization
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#about"
                  className="hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#team"
                  className="hover:text-primary transition-colors"
                >
                  Our Team
                </Link>
              </li>

              <li>
                <Link
                  href="#contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
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
                    link: "https://www.facebook.com/YOUR_USERNAME",
                  },
                  {
                    Icon: FaXTwitter,
                    link: "https://twitter.com/YOUR_USERNAME",
                  },
                  {
                    Icon: FaInstagram,
                    link: "https://www.instagram.com/YOUR_USERNAME",
                  },
                  {
                    Icon: FaLinkedinIn,
                    link: "https://www.linkedin.com/in/YOUR_USERNAME",
                  },
                  {
                    Icon: FaWhatsapp,
                    link: "https://wa.me/YOUR_PHONE_NUMBER",
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
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} Vertex Web. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
