import { ArrowUp, Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const socialIcons = [
  { icon: Facebook, link: 'https://facebook.com', label: 'Facebook' },
  { icon: Twitter, link: 'https://twitter.com', label: 'Twitter' },
  { icon: Instagram, link: 'https://instagram.com', label: 'Instagram' },
  { icon: Linkedin, link: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Github, link: 'https://github.com/yesh6957', label: 'GitHub' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <p className="text-sm text-muted-foreground">
              © 2025 Yesh. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary smooth-transition"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-sm text-muted-foreground">
              Designed & Built by Yeshwanth J
            </p>
            <Button
              size="icon"
              variant="outline"
              className="rounded-full border-primary hover:bg-primary hover:text-primary-foreground"
              onClick={scrollToTop}
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
