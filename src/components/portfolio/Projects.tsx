import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth;
      const newScrollPosition =
        direction === 'left'
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="projects" className="py-20 xl:py-32 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 xl:mb-16">
          <h2 className="text-4xl xl:text-6xl font-normal mb-4 serif-heading uppercase tracking-wide">
            Featured Projects
          </h2>
          <p className="text-lg xl:text-xl text-primary">
            Showcasing My Most Impactful Work
          </p>
        </div>

        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-6 pb-4"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full xl:w-[calc(50%-12px)] snap-center"
              >
                <div className="glass-card rounded-lg overflow-hidden h-full hover:scale-105 smooth-transition">
                  <div className="relative h-64 xl:h-80">
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
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
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

          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 xl:-translate-x-12 bg-background/80 backdrop-blur-sm border-primary hover:bg-primary hover:text-primary-foreground hidden xl:flex"
            onClick={() => scroll('left')}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 xl:translate-x-12 bg-background/80 backdrop-blur-sm border-primary hover:bg-primary hover:text-primary-foreground hidden xl:flex"
            onClick={() => scroll('right')}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (scrollContainerRef.current) {
                  const scrollAmount = scrollContainerRef.current.clientWidth * index;
                  scrollContainerRef.current.scrollTo({
                    left: scrollAmount,
                    behavior: 'smooth',
                  });
                }
              }}
              className="w-2 h-2 rounded-full bg-primary/30 hover:bg-primary smooth-transition"
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
