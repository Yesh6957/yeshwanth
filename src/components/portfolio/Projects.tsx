import { useEffect, useRef } from 'react';

const projects = [
  {
    title: 'Online Food Ordering System',
    description: 'Secure food ordering platform with real-time tracking and optimized database queries. Achieved 25% query time reduction through strategic indexing.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/79e92474-253a-4ec2-9ccc-79500050ac5b.jpg',
    link: '#',
  },
  {
    title: 'Books Buy & Rent Application',
    description: 'Android application featuring Firebase authentication, real-time database updates, and seamless book browsing experience.',
    technologies: ['Java', 'XML', 'Firebase', 'Android Studio'],
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/e9a6e9dd-ad15-4d7d-8ded-2ba6a6b219af.jpg',
    link: '#',
  },
  {
    title: 'Payani Maga - AI Travel Itinerary Agent',
    description: 'AI-powered travel planner with personalized itineraries, budgeting tools, real-time chat, and safety alerts. Integrated with OpenAI GPT, weather APIs, and Google Maps.',
    technologies: ['React', 'FastAPI', 'Python', 'Ollama-llama3', 'OpenAI GPT'],
    image: 'https://miaoda-site-img.s3cdn.medo.dev/images/8ad9e321-c990-40d1-bc01-3a21a94032e8.jpg',
    link: '#',
  },
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const scrollProgress = Math.max(0, Math.min(1, -rect.top / (rect.height - window.innerHeight)));
      
      const maxScroll = track.scrollWidth - track.clientWidth;
      track.scrollLeft = scrollProgress * maxScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="projects" className="relative bg-background" style={{ height: '300vh' }}>
      <div
        ref={containerRef}
        className="sticky top-0 h-screen flex items-center overflow-hidden bg-background"
      >
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-4xl xl:text-6xl font-normal serif-heading mb-4">
              Featured Projects
            </h2>
            <p className="text-lg xl:text-xl text-muted-foreground">
              Showcasing My Most Impactful Work
            </p>
          </div>

          <div
            ref={trackRef}
            className="flex gap-8 overflow-x-hidden snap-x snap-mandatory"
            style={{ scrollBehavior: 'smooth' }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[85vw] xl:w-[45vw] snap-center"
              >
                <div className="border border-border overflow-hidden h-full hover:shadow-lg smooth-transition bg-background">
                  <div className="relative h-64 xl:h-96">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-6 xl:p-8">
                    <h3 className="text-2xl xl:text-3xl font-normal serif-heading mb-4">
                      {project.title}
                    </h3>
                    <p className="body-text mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-foreground text-background text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
