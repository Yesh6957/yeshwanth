import { Briefcase, Calendar } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const experiences = [
  {
    title: 'AI Tech Decentralized Intern',
    company: 'BlockesBlock',
    period: 'Aug 2025 - Sep 2025',
    achievements: [
      'Optimized LLM components resulting in 10% faster response times',
      'Developed React-based AI dashboards with Python APIs',
      'Implemented Web3.js features for dApp functionality',
    ],
  },
  {
    title: 'Web Development Intern',
    company: 'Code Bind Technology, Chennai',
    period: 'May 2025 - Jun 2025',
    achievements: [
      'Built real-time book ordering system using JavaScript, PHP, and MySQL',
      'Handled 200+ simulated transactions per day',
      'Participated in Agile sprints and collaborative development',
    ],
  },
  {
    title: 'Associate Trainee - Data Annotator',
    company: 'Tika Data Service Pvt. Ltd, Hosur',
    period: 'Dec 2023 - Jul 2024',
    achievements: [
      'Annotated 1,000+ images for computer vision models',
      'Improved model accuracy by approximately 15%',
      'Collaborated with cross-functional teams on AI projects',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 xl:py-32 px-4">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <h2 className="text-4xl xl:text-6xl font-normal text-center mb-12 xl:mb-16 serif-heading uppercase tracking-wide">
            Experience
          </h2>
        </ScrollReveal>

        <div className="max-w-5xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="glass-card rounded-lg p-6 xl:p-8 hover:scale-105 smooth-transition">
                <div className="flex flex-col xl:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Briefcase className="w-8 h-8 text-primary" />
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
                          <span className="text-primary mt-1.5">•</span>
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
