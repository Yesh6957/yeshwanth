import { ExternalLink } from 'lucide-react';
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
  return (
    <section id="projects" className="py-20 xl:py-32 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 xl:mb-16">
          <h2 className="text-3xl xl:text-5xl font-bold mb-4 text-primary">
            Featured Projects
          </h2>
          <p className="text-lg xl:text-xl text-muted-foreground">
            Showcasing My Most Impactful Work
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12 xl:space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl overflow-hidden hover:scale-105 smooth-transition animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="grid xl:grid-cols-2 gap-0">
                <div className="relative h-64 xl:h-full min-h-[300px]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 xl:p-8 flex flex-col justify-center">
                  <h3 className="text-2xl xl:text-3xl font-bold text-primary mb-4">
                    {project.title}
                  </h3>
                  <p className="text-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    className="w-fit border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    View Project
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
