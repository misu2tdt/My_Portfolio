import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <motion.section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-white px-6 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/hero-bg.jpg')"
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Overlay giúp dễ đọc text */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />

      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl font-bold mb-4"
        >
          Hi! I’m Tran Duong Tien
        </motion.h1>

        <div className="text-xl text-gray-200 mb-6 h-[30px]">
          <TypeAnimation
            sequence={[
              'Software Developer',
              2000,
              'React Enthusiast',
              2000,
              'Problem Solver',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>

        <a
          href="#contact"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded transition"
        >
          Contact Me
        </a>
      </div>
    </motion.section>
  );
}
