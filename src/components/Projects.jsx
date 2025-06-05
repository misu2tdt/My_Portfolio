import React from 'react';

const projects = [
  {
    title: "Coffee Store Management",
    description: "A full-stack app for managing a coffee shop, built with Node.js and PostgreSQL.",
    link: "https://github.com/yourname/coffee-store"
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website made with React, Tailwind, and Vite.",
    link: "https://your-portfolio.vercel.app"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj, i) => (
            <div key={i} className="border p-4 rounded shadow">
              <h3 className="text-2xl font-semibold">{proj.title}</h3>
              <p className="my-2 text-gray-700">{proj.description}</p>
              <a
                href={proj.link}
                className="text-blue-600 hover:underline"
                target="_blank"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
