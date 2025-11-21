import { Mail, Phone, Facebook, Twitter, Instagram, Dribbble, Linkedin, Github, Download, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from './ScrollReveal';

const socialLinks = [
  { icon: Facebook, label: 'Facebook', link: 'https://facebook.com' },
  { icon: Twitter, label: 'Twitter', link: 'https://twitter.com' },
  { icon: Instagram, label: 'Instagram', link: 'https://instagram.com' },
  { icon: Dribbble, label: 'Dribbble', link: 'https://dribbble.com' },
  { icon: Linkedin, label: 'LinkedIn', link: 'https://linkedin.com' },
  { icon: Github, label: 'GitHub', link: 'https://github.com/yesh6957' },
];

const contactDetails = [
  { icon: Mail, label: 'Email', value: 'yeshwanth8797@gmail.com', link: 'mailto:yeshwanth8797@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91 9150957594', link: 'tel:+919150957594' },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 xl:py-32 px-4 bg-secondary/30 relative">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="mb-16 xl:mb-20">
            <div className="relative">
              <span className="absolute -top-8 left-0 text-[120px] xl:text-[200px] font-bold text-primary/5 serif-heading pointer-events-none">
                03
              </span>
              <h2 className="text-5xl xl:text-7xl font-normal serif-heading mb-6 relative z-10">
                Get In Touch.
              </h2>
            </div>
            <p className="text-lg xl:text-xl body-text max-w-2xl leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Let's create something amazing together.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid xl:grid-cols-2 gap-12 xl:gap-16 mb-12">
          <ScrollReveal delay={100}>
            <div>
              <h3 className="text-2xl xl:text-3xl font-normal serif-heading mb-8">
                Follow Me
              </h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group smooth-transition hover:translate-x-2"
                  >
                    <social.icon className="w-5 h-5 text-primary" />
                    <span className="text-lg body-text group-hover:text-primary smooth-transition">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div>
              <h3 className="text-2xl xl:text-3xl font-normal serif-heading mb-8">
                Contact Me
              </h3>
              <div className="space-y-6">
                {contactDetails.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.link}
                    className="flex items-start gap-4 group"
                  >
                    <contact.icon className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">{contact.label}</div>
                      <div className="text-lg body-text group-hover:text-primary smooth-transition">
                        {contact.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={300}>
          <div className="flex flex-col max-xl:flex-row gap-4 max-w-md">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Send className="w-4 h-4 mr-2" />
              Message Me
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Download className="w-4 h-4 mr-2" />
              Get My CV
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
