import { Briefcase, Calendar } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const experiences = [
  {
    title: 'AI Tech Decentralized Intern',
    company: 'BlockesBlock, Online',
    period: 'Aug 2025 - Sep 2025',
    achievements: [
      'Optimized LLM components, achieving a 10% reduction in average response time for real-world workloads.',
'Developed scalable React-based AI dashboards integrated with Python APIs for real-time insights and monitoring.',
'Implemented Web3.js features to enable secure wallet integration and smart contract interactions in dApps.',
'Contributed to the design, development, and deployment of AI/ML models tailored to production use cases.',
'Evaluated and tuned large language models to improve system efficiency and response quality.',
'Analyzed and enhanced existing AI-driven and blockchain-powered components to improve reliability and user experience.',
    ],
  },
  {
    title: 'Web Development Intern',
    company: 'Code Bind Technology, Chennai',
    period: 'May 2025 - Jun 2025',
    achievements: [
      'Built a real-time book ordering system using JavaScript, PHP, and MySQL, enabling seamless browsing, cart management, and order placement for users.',
'Designed and implemented REST-style APIs in PHP to connect the frontend with MySQL, ensuring secure data handling for books, users, and orders.',
'Integrated MySQL with optimized queries and proper indexing to handle 200+ simulated transactions per day while maintaining data integrity and consistency.',  
'Developed responsive UI components using Bootstrap, improving layout consistency, cross-device compatibility, and overall user experience.',
'Worked with React to build modular, reusable components and experimented with migrating parts of the system to a modern frontend stack.',
'Connected React frontends to backend APIs and MySQL-powered data sources, handling asynchronous data fetching and state management for dynamic views.',
'Created and deployed a personal portfolio website to showcase projects, experience, and technical skills, focusing on clean UI, performance, and responsiveness. [which is this!]',
'Participated in Agile sprints and collaborative development, contributing to sprint planning, daily standups, and code reviews in a team-based workflow.',
    ],
  },
  {
    title: 'Associate Trainee - Data Annotator',
    company: 'Tika Data Service Pvt. Ltd, Hosur',
    period: 'Dec 2023 - Jul 2024',
    achievements: [
      'Annotated 1,000+ images for computer vision datasets, applying precise bounding boxes and labels to create high-quality training data for AI models.',
'Followed detailed annotation guidelines and quality checks to maintain consistency and reduce noise in the labeled image datasets.',
'Contributed to an approximate 15% improvement in model accuracy by increasing the volume and reliability of annotated samples used during training.',
'Collaborated with data scientists and ML engineers to refine labeling strategies, edge cases, and class definitions for better model performance.',
'Worked with cross-functional teams across AI, product, and operations to align annotation priorities with real-world use cases and business goals.',
'Documented annotation workflows, edge cases, and best practices to support faster onboarding and more scalable data labeling processes.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 xl:py-32 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <h2 className="text-4xl xl:text-6xl font-normal text-center mb-12 xl:mb-16 serif-heading">
            Experience
          </h2>
        </ScrollReveal>

        <div className="max-w-5xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="border border-border p-6 xl:p-8 hover:shadow-lg smooth-transition">
                <div className="flex flex-col xl:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-foreground/5 flex items-center justify-center">
                      <Briefcase className="w-8 h-8 text-foreground" />
                    </div>
                  </div>

                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-xl xl:text-2xl font-normal serif-heading mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-lg body-text font-medium mb-2">
                        {exp.company}
                      </p>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-foreground mt-1.5">•</span>
                          <span className="body-text">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
