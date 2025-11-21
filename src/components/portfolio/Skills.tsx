import { Code, Globe, Database, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code,
    skills: ['Python', 'C', 'C++', 'Java', 'JavaScript', 'PHP'],
  },
  {
    title: 'Web Technologies',
    icon: Globe,
    skills: ['HTML', 'CSS', 'React', 'Node.js', 'Bootstrap'],
  },
  {
    title: 'Frameworks',
    icon: Wrench,
    skills: ['Django', 'Flask', 'Express.js'],
  },
  {
    title: 'Databases & Tools',
    icon: Database,
    skills: ['MySQL', 'Firebase', 'Git', 'GitHub', 'VS Code', 'Android Studio', 'Postman'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 xl:py-32 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="text-3xl xl:text-5xl font-bold text-center mb-12 xl:mb-16 text-primary">
          Skills
        </h2>

        <div className="grid xl:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-6 xl:p-8 hover:scale-105 smooth-transition animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl xl:text-2xl font-bold text-primary">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-secondary rounded-lg text-foreground font-medium hover:bg-accent hover:text-accent-foreground smooth-transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
