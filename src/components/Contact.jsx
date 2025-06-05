import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen px-6 py-16 bg-gray-100">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Contact</h2>
        <p className="text-lg mb-4">Feel free to reach out!</p>
        <p>Email: <a href="mailto:you@example.com" className="text-blue-600 hover:underline">you@example.com</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/yourname" className="text-blue-600 hover:underline">linkedin.com/in/yourname</a></p>
        <p>GitHub: <a href="https://github.com/yourname" className="text-blue-600 hover:underline">github.com/yourname</a></p>
      </div>
    </section>
  );
}
