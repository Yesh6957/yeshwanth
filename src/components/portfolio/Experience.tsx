import { Briefcase, Calendar } from 'lucide-react';

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
      <div className="container mx-auto">
        <h2 className="text-3xl xl:text-5xl font-bold text-center mb-12 xl:mb-16 text-primary">
          Experience
        </h2>

        <div className="max-w-5xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-6 xl:p-8 hover:scale-105 smooth-transition animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col xl:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                    <Briefcase className="w-8 h-8 text-accent" />
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-xl xl:text-2xl font-bold text-primary mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-foreground font-medium mb-2">
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
                        <span className="text-accent mt-1.5">•</span>
                        <span className="text-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
