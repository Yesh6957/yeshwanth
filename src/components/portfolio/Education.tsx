import { GraduationCap } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'SRM University',
    period: '2024 - 2026',
    cgpa: '9.02',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Bangalore University',
    period: '2020 - 2023',
    cgpa: '7.21',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 xl:py-32 px-4 bg-secondary">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <h2 className="text-4xl xl:text-6xl font-normal text-center mb-12 xl:mb-16 serif-heading">
            Education
          </h2>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="bg-background border border-border p-6 xl:p-8 hover:shadow-lg smooth-transition">
                <div className="flex flex-col xl:flex-row xl:items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 xl:w-20 xl:h-20 rounded-full bg-foreground/5 flex items-center justify-center">
                      <GraduationCap className="w-8 h-8 xl:w-10 xl:h-10 text-foreground" />
                    </div>
                  </div>

                  <div className="flex-1 space-y-2">
                    <h3 className="text-xl xl:text-2xl font-normal serif-heading">
                      {edu.degree}
                    </h3>
                    <p className="text-lg body-text font-medium">
                      {edu.institution}
                    </p>
                    <p className="text-muted-foreground">{edu.period}</p>
                  </div>

                  <div className="flex-shrink-0">
                    <div className="bg-foreground text-background px-6 py-3">
                      <div className="text-center">
                        <div className="text-2xl xl:text-3xl font-normal serif-heading">
                          {edu.cgpa}
                        </div>
                        <div className="text-sm">CGPA</div>
                      </div>
                    </div>
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
