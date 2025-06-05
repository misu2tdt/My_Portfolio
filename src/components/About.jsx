import React from 'react';

export default function About() {
  return (
    <section id="about" className="min-h-screen px-6 py-16 bg-gray-100">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg leading-relaxed">
          Hello! I'm <span className="font-semibold">Your Name</span>, a passionate software developer who loves building modern web applications.
          I specialize in JavaScript, React, and backend with Node.js. I'm always eager to learn and improve through real-world projects.
        </p>
      </div>
    </section>
  );
}
