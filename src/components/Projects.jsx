import React from 'react';
import projects from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj, i) => (
            <div key={i} className="border p-4 rounded shadow hover:scale-105 transition">
              <h3 className="text-xl font-semibold">{proj.title}</h3>
              <p className="my-2 text-gray-600">{proj.description}</p>
              <a href={proj.link} target="_blank" className="text-blue-600 hover:underline">View Project on Github →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
