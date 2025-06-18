import React from 'react';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
  FaGitAlt, FaGithub, FaFigma, FaDocker, FaLinux,
} from 'react-icons/fa';
import {
  SiTailwindcss, SiExpress, SiMongodb, SiRedis, SiKubernetes, SiNginx,
  SiBootstrap, SiC, SiCplusplus, 
} from 'react-icons/si';

const techGroups = [
  {
    title: "Programming Languages",
    items: [
      { icon: <SiC />, label: "C" },
      { icon: <SiCplusplus />, label: "C++" },
      { icon: <FaJs />, label: "JavaScript" },
    ],
  },
  {
    title: "Frontend Development",
    items: [
      { icon: <FaHtml5 />, label: "HTML" },
      { icon: <FaCss3Alt />, label: "CSS" },
      { icon: <SiBootstrap />, label: "Bootstrap" },
    ],
  },
  {
    title: "Backend Development",
    items: [
      { icon: <FaNodeJs />, label: "Node.js" },
      { icon: <SiExpress />, label: "Express.js" },
    ],
  },
  {
    title: "Database",
    items: [
      { icon: <SiMongodb />, label: "MongoDB" },
      { icon: <SiRedis />, label: "Redis" },
    ],
  },
  {
    title: "DevOps",
    items: [
      { icon: <FaDocker />, label: "Docker" },
      { icon: <SiNginx />, label: "Nginx" },
    ],
  },
  {
    title: "Tools",
    items: [
      { icon: <FaGitAlt />, label: "Git" },
      { icon: <FaGithub />, label: "GitHub" },
      { icon: <FaFigma />, label: "Figma" },
    ],
  },
];

export default function Technologies() {
  return (
    <section id="technologies" className="bg-[#111827] text-white py-16 px-6 text-center">
      <h2 className="text-4xl font-bold mb-16 text-purple-300">Technology</h2>

      <div className="flex flex-col gap-10">
        {techGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-2xl font-semibold text-purple-300 mb-8">
              {group.title}
            </h3>
            <div className="flex flex-wrap justify-center gap-8">
              {group.items.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center w-24 h-24 bg-[#1f2937] rounded-md border border-gray-700 hover:scale-110 transition-transform"
                >
                  <div className="text-3xl mt-4 mb-1">{item.icon}</div>
                  <span className="text-sm text-purple-300">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
