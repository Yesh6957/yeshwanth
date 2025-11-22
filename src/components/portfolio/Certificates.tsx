import ScrollReveal from './ScrollReveal';

const certificates = [
  { name: 'Python for Data Science', authority: 'NPTEL', link: 'https://drive.google.com/file/d/1PN8m3vgyTKMnuQQ_e0C5MUT2c-HU_byh/view?usp=drivesdk' },
  { name: 'AWS Academy Cloud Foundations', authority: 'AWS Academy', link: 'https://drive.google.com/file/d/1IEs9B3NDp4uzoTc7F3uCD4Zbt4DGQM_B/view?usp=drivesdk' },
  { name: '5-DAY WEB DESIGNING & DEVELOPMENT Internship', authority: 'Prompt Infotech', link: 'https://drive.google.com/file/d/1OM0r9Ie5j0Cm4hOYH388o6XDA5eb8OjM/view?usp=drivesdk' },
  { name: 'MongoDB Basic', authority: 'Great Learning', link: 'https://drive.google.com/file/d/1jDwGhFi2O8Dj3nqaszJczr2E1MtfNIcU/view?usp=drivesdk' },
  { name: 'Database Management System', authority: 'Great Learning', link: 'https://drive.google.com/file/d/1_MPdw88PM-dw2s-Qy4R1qV8ZRcX-9N4C/view?usp=drivesdk' },
  { name: 'TALLY ERP 9', authority: 'SFS College', link: 'https://drive.google.com/file/d/1bVYmxBGDPMUP8XASeVx4FGppE9UPqJVd/view?usp=drivesdk' },
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 xl:py-32 px-4 bg-background relative">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <h2 className="text-4xl xl:text-6xl font-normal text-center mb-16 xl:mb-24 serif-heading">
            Certificates
          </h2>
        </ScrollReveal>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border transform -translate-x-1/2" />

          <div className="space-y-16 xl:space-y-20">
            {certificates.map((cert, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-full xl:w-5/12 ${index % 2 === 0 ? 'pr-8 xl:pr-16 text-right' : 'pl-8 xl:pl-16 text-left'}`}>
                    <a
                      href={cert.link}
                      className="block border border-border p-6 hover:shadow-lg smooth-transition bg-background"
                    >
                      <h3 className="text-lg xl:text-xl font-normal serif-heading mb-2">
                        {cert.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        by {cert.authority}
                      </p>
                    </a>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-foreground border-4 border-background" />

                  <div className={`absolute left-1/2 w-8 h-px bg-border ${index % 2 === 0 ? 'transform -translate-x-full' : ''}`} />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
