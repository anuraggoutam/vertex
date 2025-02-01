"use client";
import Link from "next/link";
import React, { useState, FormEvent, useEffect } from "react";
import {
  FaRocket,
  FaStar,
  FaArrowRight,
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaTimes,
  FaEnvelope,
  FaCheckCircle,
} from "react-icons/fa";

const Page: React.FC = () => {
  const [showLearnMore, setShowLearnMore] = useState(false);
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [stars, setStars] = useState<
    { top: string; left: string; animationDelay: string; transform: string }[]
  >([]);

  useEffect(() => {
    setStars(
      Array.from({ length: 50 }, () => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 4}s`,
        transform: `scale(${Math.random() * 0.5 + 0.5})`,
      }))
    );
  }, []);

  const handleWaitlistSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email");
      return;
    }
    try {
      // Add your form submission logic here
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        alert("Message sent successfully!");
      } else {
        alert("Failed to send message. Please try again.");
      }
      setEmail("");
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An error occurred. Please try again.");
    }
    // Here you would typically send the email to your backend
    console.log("Email submitted:", email);
    setSubmitted(true);
    setError("");
  };

  return (
    <div className="min-h-screen w-full overflow-hidden bg-gradient-to-r from-purple-900 via-black to-purple-900">
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((style, i) => (
          <FaStar
            key={i}
            className="absolute animate-pulse text-white/10"
            style={style}
          />
        ))}
      </div>

      <div className="relative min-h-screen flex flex-col">
        <header className="border-b border-white/5 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 blur-md opacity-75" />
                  <div className="relative bg-black/50 rounded-full p-2">
                    <FaRocket className="w-6 h-6 text-white" />
                  </div>
                </div>
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                  <Link href="/">. VertexWeb</Link>
                </span>
              </div>
              <div className="flex items-center gap-6">
                <a
                  href="#"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <FaTwitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 flex items-center justify-center px-4 py-16">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 animate-gradient">
                Something Big
                <br />
                Is Coming
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
                We're crafting something extraordinary that will revolutionize
                the way you work. Join us on this exciting journey.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setShowWaitlist(true)}
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full overflow-hidden shadow-lg shadow-purple-900/20 hover:shadow-purple-900/40 transition-all"
              >
                <span className="relative flex items-center gap-2 text-white font-medium">
                  Join the Waitlist
                  <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button
                onClick={() => setShowLearnMore(true)}
                className="group px-8 py-4 bg-white/5 rounded-full backdrop-blur-sm hover:bg-white/10 transition-all"
              >
                <span className="text-white/90 font-medium">Learn More</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-left hover:bg-white/[0.07] transition-colors">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Lightning Fast
                </h3>
                <p className="text-gray-300">
                  Experience blazing fast performance that will transform your
                  workflow.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-left hover:bg-white/[0.07] transition-colors">
                <h3 className="text-xl font-semibold text-white mb-2">
                  AI-Powered
                </h3>
                <p className="text-gray-300">
                  Harness the power of artificial intelligence to automate your
                  tasks.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-left hover:bg-white/[0.07] transition-colors">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Seamless Design
                </h3>
                <p className="text-gray-300">
                  Beautiful, intuitive interface that makes complexity feel
                  simple.
                </p>
              </div>
            </div>
          </div>
        </main>

        <footer className="border-t border-white/5 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-gray-300">
              <p>© 202 Vertex. All rights reserved.</p>
              <div className="flex items-center gap-8">
                <span className="hover:text-white transition-colors">
                  <Link href="/privacy">Privacy</Link>
                </span>

                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </footer>

        {/* Learn More Modal */}
        {showLearnMore && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-gray-900/90 rounded-2xl p-8 max-w-2xl w-full relative">
              <button
                onClick={() => setShowLearnMore(false)}
                className="absolute top-4 right-4 text-white/60 hover:text-white"
              >
                <FaTimes className="w-6 h-6" />
              </button>

              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-6">
                About VertexWeb
              </h2>

              <div className="space-y-6 text-gray-300">
                <p>
                  Vertex is an upcoming revolutionary platform that combines
                  cutting-edge AI technology with intuitive design to transform
                  your digital workspace. Our mission is to empower teams with
                  tools that make complex tasks feel effortless.
                </p>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">
                    Key Features
                  </h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Advanced AI-powered automation</li>
                    <li>Real-time collaboration tools</li>
                    <li>Intuitive and beautiful interface</li>
                    <li>Enterprise-grade security</li>
                    <li>Cross-platform compatibility</li>
                  </ul>
                </div>

                <p>
                  Join our waitlist to be among the first to experience the
                  future of work. Early access members will receive exclusive
                  benefits and special pricing.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Waitlist Modal */}
        {showWaitlist && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-gray-900/90 rounded-2xl p-8 max-w-md w-full relative">
              <button
                onClick={() => {
                  setShowWaitlist(false);
                  setSubmitted(false);
                  setEmail("");
                  setError("");
                }}
                className="absolute top-4 right-4 text-white/60 hover:text-white"
              >
                <FaTimes className="w-6 h-6" />
              </button>

              {!submitted ? (
                <>
                  <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-6">
                    Join the Waitlist
                  </h2>

                  <p className="text-gray-300 mb-6">
                    Be the first to know when we launch and get exclusive early
                    access.
                  </p>

                  <form onSubmit={handleWaitlistSubmit} className="space-y-4">
                    <div>
                      <div className="relative">
                        <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email"
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-12 py-3 text-white placeholder-white/40 focus:outline-none focus:border-purple-500 transition-colors"
                        />
                      </div>
                      {error && (
                        <p className="text-red-400 text-sm mt-2">{error}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg py-3 text-white font-medium hover:shadow-lg hover:shadow-purple-900/20 transition-all"
                    >
                      Join Waitlist
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-6">
                    <FaCheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    You're on the list!
                  </h2>
                  <p className="text-gray-300">
                    Thank you for joining our waitlist. We'll notify you when we
                    launch!
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
