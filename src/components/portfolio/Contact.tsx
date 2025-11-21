import { Mail, Phone, MapPin, Linkedin, Github, BookOpen } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'yeshwanth8797@gmail.com',
    link: 'mailto:yeshwanth8797@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9150957594',
    link: 'tel:+919150957594',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'YESHWANTH J',
    link: 'https://linkedin.com',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'yesh6957',
    link: 'https://github.com/yesh6957',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Hosur, Tamil Nadu - 635109',
    link: null,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 xl:py-32 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 xl:mb-16 space-y-4">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <BookOpen className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h2 className="text-4xl xl:text-6xl font-normal serif-heading">
            Ready to build something amazing?
          </h2>
          <p className="text-lg xl:text-xl body-text">
            I'd love to connect with you.
          </p>
        </div>

        <div className="space-y-4">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="glass-card rounded-lg p-6 hover:scale-105 smooth-transition animate-fade-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {info.link ? (
                <a
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 xl:gap-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-muted-foreground mb-1">{info.label}</div>
                    <div className="text-lg font-medium body-text truncate">
                      {info.value}
                    </div>
                  </div>
                </a>
              ) : (
                <div className="flex items-center gap-4 xl:gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-muted-foreground mb-1">{info.label}</div>
                    <div className="text-lg font-medium body-text">
                      {info.value}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center space-y-4">
          <p className="text-2xl xl:text-3xl font-normal text-primary serif-heading italic">
            Yeshwanth J
          </p>
          <p className="text-muted-foreground">
            © 2025 Yesh
          </p>
        </div>
      </div>
    </section>
  );
}
