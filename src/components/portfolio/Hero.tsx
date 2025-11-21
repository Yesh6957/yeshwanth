import { useState, useEffect } from 'react';
import { Mail, Eye } from 'lucide-react';
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
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="grid xl:grid-cols-[1fr,400px] gap-12 xl:gap-20 items-center">
          <div className="space-y-6 xl:space-y-8 animate-fade-up">
            <div className="space-y-4">
              <h1 className="text-5xl xl:text-7xl font-normal serif-heading">
                I'm Yesh
              </h1>
              <div className="h-12 xl:h-16">
                <p className="text-2xl xl:text-4xl font-normal text-foreground">
                  I'm {displayText}
                  <span className="animate-pulse">|</span>
                </p>
              </div>
              <p className="text-lg xl:text-xl body-text max-w-xl">
                MCA Student | Full-Stack Developer | AI/ML Enthusiast
              </p>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <Button
                size="icon"
                onClick={scrollToContact}
                className="w-12 h-12 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground"
                aria-label="Contact Me"
              >
                <Mail className="w-5 h-5" />
              </Button>
              <Button
                size="icon"
                onClick={scrollToProjects}
                className="w-12 h-12 rounded-full bg-background border-2 border-foreground text-foreground hover:bg-foreground hover:text-background"
                aria-label="View Projects"
              >
                <Eye className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="flex justify-center xl:justify-end animate-fade-in">
            <div className="relative w-full max-w-md aspect-square">
              <img
                src="https://miaoda-conversation-file.s3cdn.medo.dev/user-7pjhlc6jdt6o/conv-7pjii8138kcg/20251122/file-7pqmipac0buo.jpg"
                alt="Yeshwanth J"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
