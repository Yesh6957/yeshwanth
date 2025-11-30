"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  live?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Online Food Ordering System",
    description:
      "Secure food ordering platform allowing customers to browse, order, and track food in real time. Optimized MySQL queries reduce load time by 25%.",
    image:
      "https://github.com/Yesh6957/images/blob/main/food.jpg?raw=true",
    tags: ["PHP", "MySQL", "JavaScript", "Frontend + Backend"],
    github: "https://github.com/Yesh6957/Book-store",
    
  },
  {
    id: 2,
    title: "Books Buy & Rent App",
    description:
      "Android app with Firebase authentication and real-time updates for renting/buying books. Strong focus on UI performance.",
    image:
      "https://github.com/Yesh6957/images/blob/main/book.jpg?raw=true",
    tags: ["Java", "XML", "Firebase"],
    github: "https://github.com/Yesh6957/Book-store",
  },
  {
    id: 3,
    title: "Payani Maga – AI Travel Itinerary Agent",
    description:
      "AI-based travel planner using LLM, FastAPI, currency conversions, weather APIs, Google Maps, PostgreSQL, Redis, and real-time AI chat.",
    image:
      "https://raw.githubusercontent.com/Yesh6957/images/refs/heads/main/payani%20maga.jpg",
    tags: ["React", "FastAPI", "AI", "Python", "LLM", "APIs"],
    github: "https://github.com/AVEEJG/payani-maga",
    
  },
];

const Projects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"], // start animation when section enters viewport
  });

  // Increase delay between cards
  const SCROLL_DELAY = 1.8; // Adjust this: higher = slower animation, more gap between cards

  return (
    <section
      className="py-32 bg-gray-50 dark:bg-gray-900"
      id="projects"
      ref={containerRef}
      style={{ perspective: "1000px" }}
    >
      <h2 className="text-4xl font-bold mb-32 text-center text-gray-900 dark:text-white font-serif-heading">
        My Projects 
      </h2>

      <div className="relative h-[300vh]">
        <div className="sticky top-0 h-screen flex items-start justify-center pt-20">
          <div className="relative w-[330px] h-[450px]">
            {projects.map((project, index) => {
              const baseStep = 1 / (projects.length + 1);
              const start = baseStep * index * SCROLL_DELAY;
              const end = baseStep * (index + 1) * SCROLL_DELAY;

              const y = useTransform(scrollYProgress, [start, end], ["0%", "-180%"]);

              const rotate = useTransform(
                scrollYProgress,
                [start - 0.1, end],
                [25 - index * 3, 0]
              );

              const blur = useTransform(
                scrollYProgress,
                [start - 0.15, end],
                ["6px", "0px"]
              );

              return (
                <motion.div
                  key={project.id}
                  style={{
                    top: index * 15,
                    zIndex: (projects.length - index) * 10,
                    translateY: y,
                    rotate: rotate,
                    filter: `blur(${blur})`,
                    backfaceVisibility: "hidden",
                  }}
                  className="absolute left-0 right-0 mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-300/40 dark:border-gray-700/40 will-change-transform"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />

                  <div className="p-5 space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>

                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-snug">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-3 flex gap-4 text-sm">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          className="text-blue-500 hover:underline"
                        >
                          Live Demo
                        </a>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        className="text-blue-500 hover:underline"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
