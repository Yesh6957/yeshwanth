import { Code2, Lightbulb, Rocket, Users } from 'lucide-react';

const strengths = [
  { icon: Code2, text: 'Full-Stack Development' },
  { icon: Lightbulb, text: 'AI/ML Innovation' },
  { icon: Rocket, text: 'Problem Solving' },
  { icon: Users, text: 'Team Collaboration' },
];

export default function About() {
  return (
    <section id="about" className="py-20 xl:py-32 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl xl:text-6xl font-normal text-center mb-12 xl:mb-16 serif-heading uppercase tracking-wide">
          About Me
        </h2>

        <div className="max-w-4xl mx-auto space-y-8 animate-fade-up">
          <p className="text-lg xl:text-xl body-text leading-relaxed">
            I'm Yeshwanth J, a passionate MCA student at SRM University with a strong foundation in software engineering and artificial intelligence. Currently maintaining a 9.02 CGPA, I'm dedicated to building innovative solutions that make a difference.
          </p>
          <p className="text-lg xl:text-xl body-text leading-relaxed">
            My journey in technology has been driven by curiosity and a desire to solve real-world problems. From developing full-stack applications to exploring the frontiers of AI/ML, I thrive on challenges that push me to learn and grow.
          </p>
          <p className="text-lg xl:text-xl body-text leading-relaxed">
            With hands-on experience in web development, AI integration, and data annotation, I bring a unique blend of technical skills and creative thinking to every project I undertake.
          </p>

          <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 pt-8">
            {strengths.map((strength, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-3 p-6 glass-card rounded-lg hover:scale-105 smooth-transition"
              >
                <strength.icon className="w-8 h-8 text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-center body-text">{strength.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
