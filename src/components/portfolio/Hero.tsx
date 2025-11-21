import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const roles = ["a Photographer", "a Developer", "an AI Enthusiast"];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid xl:grid-cols-[1fr,400px] gap-12 xl:gap-20 items-center">
          <div className="space-y-6 xl:space-y-8 animate-fade-up">
            <div className="space-y-4">
              <h1 className="text-5xl xl:text-7xl font-normal serif-heading">
                I'm Yesh
              </h1>
              <div className="h-12 xl:h-16">
                <p className="text-2xl xl:text-4xl font-normal text-primary">
                  I'm {displayText}
                  <span className="animate-pulse">|</span>
                </p>
              </div>
              <p className="text-lg xl:text-xl body-text max-w-xl">
                MCA Student | Full-Stack Developer | AI/ML Enthusiast
              </p>
            </div>

            <div className="flex flex-col max-xl:flex-row gap-4 pt-4">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Contact Me
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToProjects}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                View Projects
              </Button>
            </div>
          </div>

          <div className="flex justify-center xl:justify-end animate-fade-in">
            <div className="glass-card rounded-lg p-2 w-full max-w-md aspect-square flex items-center justify-center">
              <img
                src="https://miaoda-site-img.s3cdn.medo.dev/images/151bbcdb-2cc5-4e79-b319-32f9c9757509.jpg"
                alt="Yeshwanth J"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
