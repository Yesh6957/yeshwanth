import { GraduationCap } from 'lucide-react';

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
    <section id="education" className="py-20 xl:py-32 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="text-3xl xl:text-5xl font-bold text-center mb-12 xl:mb-16 text-primary">
          Education
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-6 xl:p-8 hover:scale-105 smooth-transition animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col xl:flex-row xl:items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 xl:w-20 xl:h-20 rounded-full bg-accent/10 flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 xl:w-10 xl:h-10 text-accent" />
                  </div>
                </div>

                <div className="flex-1 space-y-2">
                  <h3 className="text-xl xl:text-2xl font-bold text-primary">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-foreground font-medium">
                    {edu.institution}
                  </p>
                  <p className="text-muted-foreground">{edu.period}</p>
                </div>

                <div className="flex-shrink-0">
                  <div className="glass-card rounded-lg px-6 py-3 border-accent/30">
                    <div className="text-center">
                      <div className="text-2xl xl:text-3xl font-bold text-accent">
                        {edu.cgpa}
                      </div>
                      <div className="text-sm text-muted-foreground">CGPA</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
