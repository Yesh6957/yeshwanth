const skills = [
  'Python',
  'JavaScript',
  'React',
  'Node.js',
  'TypeScript',
  'Django',
  'Flask',
  'Express.js',
  'MySQL',
  'Firebase',
  'Git',
  'HTML',
  'CSS',
  'C++',
  'Java',
  'PHP',
  'Bootstrap',
  'Android Studio',
  'VS Code',
  'Postman',
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 xl:py-32 px-4 bg-secondary overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl xl:text-6xl font-normal text-center mb-12 xl:mb-16 serif-heading">
          Skills & Technologies
        </h2>

        <div className="relative">
          <div className="flex overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...skills, ...skills].map((skill, index) => (
                <div
                  key={`first-${index}`}
                  className="mx-4 px-8 py-4 bg-background border border-border inline-block"
                >
                  <span className="text-lg xl:text-xl font-medium body-text">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex animate-marquee whitespace-nowrap" aria-hidden="true">
              {[...skills, ...skills].map((skill, index) => (
                <div
                  key={`second-${index}`}
                  className="mx-4 px-8 py-4 bg-background border border-border inline-block"
                >
                  <span className="text-lg xl:text-xl font-medium body-text">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-secondary to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-secondary to-transparent pointer-events-none" />
        </div>

        <p className="text-center text-muted-foreground mt-8 text-sm">
          Hover to pause
        </p>
      </div>
    </section>
  );
}
