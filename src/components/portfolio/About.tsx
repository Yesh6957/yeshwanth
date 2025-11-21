import { Code2, Lightbulb, Rocket, Users } from 'lucide-react';

const stats = [
  { label: 'MCA Student', value: '2026' },
  { label: 'CGPA', value: '9.02' },
  { label: 'Full-Stack', value: 'Developer' },
];

const strengths = [
  { icon: Code2, text: 'Full-Stack Development' },
  { icon: Lightbulb, text: 'AI/ML Innovation' },
  { icon: Rocket, text: 'Problem Solving' },
  { icon: Users, text: 'Team Collaboration' },
];

export default function About() {
  return (
    <section id="about" className="py-20 xl:py-32 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl xl:text-5xl font-bold text-center mb-12 xl:mb-16 text-primary">
          About Me
        </h2>

        <div className="grid xl:grid-cols-2 gap-12 xl:gap-16">
          <div className="space-y-6 animate-fade-up">
            <p className="text-lg text-foreground leading-relaxed">
              I'm Yeshwanth J, a passionate MCA student at SRM University with a strong foundation in software engineering and artificial intelligence. Currently maintaining a 9.02 CGPA, I'm dedicated to building innovative solutions that make a difference.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              My journey in technology has been driven by curiosity and a desire to solve real-world problems. From developing full-stack applications to exploring the frontiers of AI/ML, I thrive on challenges that push me to learn and grow.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              With hands-on experience in web development, AI integration, and data annotation, I bring a unique blend of technical skills and creative thinking to every project I undertake.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6">
              {strengths.map((strength, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 glass-card rounded-lg hover:scale-105 smooth-transition"
                >
                  <strength.icon className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-sm font-medium">{strength.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 animate-fade-up">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-8 hover:scale-105 smooth-transition"
              >
                <div className="text-center">
                  <div className="text-4xl xl:text-5xl font-bold text-accent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
