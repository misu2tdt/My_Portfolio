import React from 'react';
import socials from '../data/socials';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen px-6 py-16 bg-gray-100">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Contact</h2>
        <p>Email: <a href={`mailto:${socials.email}`} className="text-blue-600 hover:underline">{socials.email}</a></p>
        <p>GitHub: <a href={socials.github} target="_blank" className="text-blue-600 hover:underline">{socials.github}</a></p>
        <p>LinkedIn: <a href={socials.linkedin} target="_blank" className="text-blue-600 hover:underline">{socials.linkedin}</a></p>
      </div>
    </section>
  );
}
