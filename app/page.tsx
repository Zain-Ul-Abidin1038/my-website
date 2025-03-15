/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useScrollShrink } from "@/hooks/useScrollShrink"; // Import the hook

const Home = () => {
  const [isClient, setIsClient] = useState(false);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const scale = useScrollShrink(heroRef as React.RefObject<HTMLDivElement>, 0.85);

  // Add Parallax Effect to Background
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], ["0%", "-20%"]); // Moves slightly slower for parallax

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <section ref={heroRef} className="relative text-white py-96 overflow-hidden">
      {/* Fixed Background Video (Always stays in place) */}

      {/* Parallax Scrolling Background Video */}
      <motion.video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ y: backgroundY }}
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>

      {/* Hero Section */}
      <motion.div style={{ scale }} className="container mx-auto text-center relative z-10 top-[-140px]">
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to Mohsin Javaid's Shop
        </motion.h1>
        <motion.p
          className="text-xl mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          This is your one-page website. Explore products and services.
        </motion.p>
        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
          <Link href="/contact" className="bg-white text-blue-500 px-8 py-5 rounded-full font-bold">
            Let&#39;s Explore
          </Link>
        </motion.div>
      </motion.div>

      {/* Service Plans Section with Scroll Fade-in */}
      <motion.div
        className="relative z-10 bg-gray-900 bg-opacity-80 p-10 mt-10 rounded-xl max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-6">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Basic", desc: "WordPress website development", price: "$99" },
            { title: "Standard", desc: "Next.js, Tailwind, Framer Motion, Three.js", price: "$299" },
            { title: "Premium", desc: "Full-stack MERN web app", price: "$499" },
          ].map((plan, index) => (
            <motion.div key={index} className="p-6 bg-gray-800 rounded-lg shadow-lg" whileHover={{ scale: 1.05 }}>
              <h3 className="text-2xl font-semibold">{plan.title}</h3>
              <p className="mt-2">{plan.desc}</p>
              <p className="text-yellow-400 font-bold text-xl mt-4">{plan.price}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Testimonials Section - Fixed Scrolling Effect */}
      <div className="relative z-10 overflow-hidden mt-20">
        <h2 className="text-4xl font-bold text-center mb-6">What Our Clients Say</h2>
        <div className="w-full text-center rounded-lg overflow-hidden">
          <motion.div
            className="flex space-x-8"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {[
              "This service is amazing!",
              "I highly recommend it.",
              "Mohsin is amazing",
              "Mohsin resolved all our problems",
              "Great customer service!",
              "Absolutely worth every penny!",
              "Best experience ever!",
              "Would definitely hire again!",
            ].map((text, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 text-white p-5 rounded-lg min-w-[300px] shadow-lg"
                animate={{ y: ["0%", "-20%", "0%"] }} // Individual movement
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                {text}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      {/* Comment Section */}
      <div className="relative z-10 mt-16 max-w-3xl mx-auto p-10 bg-gray-900 bg-opacity-80 rounded-xl">
        <h2 className="text-4xl font-bold text-center mb-6">Leave a Comment</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg bg-gray-800 text-white" required />
          <textarea placeholder="Your Comment" className="w-full p-3 rounded-lg bg-gray-800 text-white" rows={4} required></textarea>
          <button type="submit" className="w-full bg-blue-500 p-3 rounded-lg font-bold">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Home;
