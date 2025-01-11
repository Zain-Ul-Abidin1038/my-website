/* eslint-disable react/no-unescaped-entities */
'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const Home = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Prevents SSR issues by not rendering on the server
  }

  return (
    <section className="relative text-white py-96">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Over the Video */}
      <div className="container mx-auto text-center relative z-10">
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
          <Link
            href="/contact"
            className="bg-white text-blue-500 px-8 py-5 rounded-full font-bold"
          >
            Let&#39;s Explore
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
