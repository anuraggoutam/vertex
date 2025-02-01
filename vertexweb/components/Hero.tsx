"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Button from "./ui/Button";

const Hero = () => {
  const heroRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -100]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="home">
      <div className="min-h-screen w-full overflow-hidden bg-black">
        {/* Gradient Orbs */}
        <motion.div
          className="fixed top-0 left-0 w-full h-full opacity-30 pointer-events-none"
          style={{
            background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 51, 234, 0.15), transparent 80%)`,
          }}
        />

        {/* Grid Background */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px),
          linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />

        {/* Top Animated Banner */}
        <div className="relative w-full overflow-hidden h-20 bg-gradient-to-r from-purple-900/10 to-pink-900/10 backdrop-blur-sm border-b border-white/5">
          <motion.div
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(45deg, transparent 45%, rgba(168, 85, 247, 0.2) 50%, transparent 55%)",
              backgroundSize: "30px 30px",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="px-4 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md"
            >
              <span className="text-sm text-purple-200">
                🚀 Transforming ideas into digital vertices
              </span>
            </motion.div>
          </div>
        </div>

        {/* Main Content */}
        <section
          ref={heroRef}
          className="relative min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center px-4"
        >
          {/* Floating Elements */}
          <motion.div
            style={{ y }}
            className="absolute top-20 left-[20%] w-32 h-32"
          >
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="rgba(168, 85, 247, 0.4)"
                d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,89.1,-0.5C88.2,15.3,83.8,30.6,76.2,44.2C68.5,57.8,57.6,69.6,44.2,76.9C30.8,84.2,15.4,87,0.3,86.5C-14.8,86,-29.6,82.3,-43.9,75.6C-58.3,68.9,-72.1,59.2,-79.1,45.7C-86.1,32.3,-86.2,15.1,-84.6,-1.6C-83,-18.3,-79.7,-36.6,-71.7,-52.6C-63.7,-68.6,-51,-82.3,-36.3,-88.7C-21.6,-95.1,-4.8,-94.2,10.5,-89.1C25.8,-84,39.5,-74.7,44.7,-76.4Z"
                transform="translate(100 100)"
              />
            </svg>
          </motion.div>

          <motion.div
            style={{ y: useTransform(scrollY, [0, 300], [0, -50]) }}
            className="absolute bottom-20 right-[20%] w-40 h-40"
          >
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="rgba(236, 72, 153, 0.4)"
                d="M45.7,-78.3C58.9,-71.8,69.3,-59.2,76.4,-45.1C83.5,-31,87.3,-15.5,87.6,0.2C87.9,15.9,84.7,31.8,77.7,46.3C70.7,60.8,59.9,73.9,46.4,80.8C32.9,87.7,16.4,88.4,0.6,87.4C-15.3,86.4,-30.6,83.8,-44.8,77.2C-59,70.6,-72.1,60,-79.5,46.2C-86.9,32.4,-88.6,15.2,-87.7,-1.5C-86.8,-18.2,-83.3,-36.5,-74.8,-51.5C-66.3,-66.5,-52.8,-78.3,-38.2,-84C-23.6,-89.7,-7.9,-89.3,7.4,-86.5C22.7,-83.7,45.4,-78.5,45.7,-78.3Z"
                transform="translate(100 100)"
              />
            </svg>
          </motion.div>

          {/* Animated Lines */}
          <div className="absolute top-0 left-0 w-full h-40 overflow-hidden opacity-20">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"
                style={{
                  top: `${i * 8}px`,
                  left: "-100%",
                  right: "-100%",
                }}
                animate={{
                  translateX: ["0%", "100%"],
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
            ))}
          </div>

          {/* Content */}
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              Vertex Web:{" "}
              <span className="text-gradient">Shaping Digital Peaks</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-300 text-lg md:text-xl mb-12"
            >
              We craft cutting-edge web experiences that elevate your digital
              presence to new heights.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn"
              >
                Get Started
              </motion.button>
              <Button />
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 flex justify-center items-center space-x-6"
            >
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
                (Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-white hover:text-primary transition-colors"
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                )
              )}
            </motion.div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Hero;
