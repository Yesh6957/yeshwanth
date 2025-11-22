import ScrollReveal from './ScrollReveal';

export default function ResearchPaper() {
  return (
    <section id="research" className="py-20 xl:py-32 px-4 bg-secondary relative">
      <div className="container mx-auto max-w-6xl">
        <div className="relative">
          <div className="absolute left-1/2 top-0 w-px h-20 bg-border transform -translate-x-1/2" />
          
          <ScrollReveal>
            <div className="relative pt-20">
              <div className="absolute left-1/2 top-20 transform -translate-x-1/2 w-4 h-4 rounded-full bg-foreground border-4 border-secondary" />
              <div className="absolute left-1/2 top-[88px] w-8 h-px bg-border transform -translate-x-full" />

              <div className="grid xl:grid-cols-2 gap-12 xl:gap-16">
                <div className="space-y-6">
                  <h2 className="text-3xl xl:text-5xl font-normal serif-heading mb-6">
                    Research
                  </h2>
                  
                  <h3 className="text-2xl xl:text-3xl font-normal leading-tight">
                    A Hybrid Movie Recommender Enhanced by Conversational AI and Online Knowledge Retrieval
                  </h3>
                  
                  <p className="text-lg body-text leading-relaxed italic text-foreground/80" style={{ fontFamily: "'Playfair Display', serif" }}>
                    "This article presents a hybrid movie recommender system that integrates collaborative filtering, content-based filtering, conversational AI, and dynamic online information retrieval. Our hybrid system enables interactive multi-turn conversations with users to understand their preferences and, at the same time, it fetches the most up-to-date, relevant, and dynamic information about movies from various online sources."
                  </p>
                </div>

                <div className="flex items-center justify-center">
                  <div className="w-full aspect-square border-2 border-border bg-muted flex items-center justify-center">
                    <span className="text-lg text-muted-foreground font-light tracking-wider">
                      RESEARCH DIAGRAM
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
