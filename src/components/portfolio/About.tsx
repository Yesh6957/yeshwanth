import { Code2, Lightbulb, Rocket, Users } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const strengths = [
  { icon: Code2, text: 'Software Developer' },
  { icon: Lightbulb, text: 'AI/ML Enthusiast' },
  { icon: Rocket, text: 'Problem Solver' },
  { icon: Users, text: 'Team Collaboration' },
];

export default function About() {
  return (
    <section id="about" className="py-20 xl:py-32 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <h2 className="text-4xl xl:text-6xl font-normal text-center mb-12 xl:mb-16 serif-heading">
            About Me
          </h2>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto space-y-8">
          <ScrollReveal delay={100}>
            <p className="text-lg xl:text-xl body-text leading-relaxed">
              I'm Yeshwanth J, a passionate MCA student at SRM University with a strong foundation in software engineering and artificial intelligence. Currently maintaining a 9.04 CGPA, I'm dedicated to building innovative solutions that make a difference.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="text-lg xl:text-xl body-text leading-relaxed">
              My journey in technology has been driven by curiosity and a desire to solve real-world problems. From developing full-stack applications to exploring the frontiers of AI/ML, I thrive on challenges that push me to learn and grow.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={300}>
            <p className="text-lg xl:text-xl body-text leading-relaxed">
              With hands-on experience in web development, AI integration, and data annotation, I bring a unique blend of technical skills and creative thinking to every project I undertake.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 pt-8">
              {strengths.map((strength, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-3 p-6 border border-border hover:shadow-lg smooth-transition"
                >
                  <strength.icon className="w-8 h-8 text-foreground flex-shrink-0" />
                  <span className="text-sm font-medium text-center body-text">{strength.text}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
