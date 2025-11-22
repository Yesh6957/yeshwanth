import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const photos = [
  { id: 1, title: 'Photo 1', url: 'https://via.placeholder.com/800x600/000000/FFFFFF?text=Photo+1' },
  { id: 2, title: 'Photo 2', url: 'https://via.placeholder.com/800x600/000000/FFFFFF?text=Photo+2' },
  { id: 3, title: 'Photo 3', url: 'https://via.placeholder.com/800x600/000000/FFFFFF?text=Photo+3' },
  { id: 4, title: 'Photo 4', url: 'https://via.placeholder.com/800x600/000000/FFFFFF?text=Photo+4' },
];

export default function Photography() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section id="photography" className="py-20 xl:py-32 px-4 bg-background relative">
        <div className="sticky top-0 z-30 glass-header py-6 mb-12">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl xl:text-5xl font-normal text-center serif-heading">
              Photography Portfolio
            </h2>
          </div>
        </div>

        <div className="container mx-auto max-w-7xl overflow-hidden">
          <div 
            className="flex gap-8 smooth-transition"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / photos.length)}%)`,
              width: `${photos.length * 100}%`
            }}
          >
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="flex-shrink-0 cursor-pointer"
                style={{ width: `${100 / photos.length}%` }}
                onClick={() => setSelectedPhoto(photo)}
              >
                <div className="border border-border hover:shadow-lg smooth-transition bg-background p-4 mx-4">
                  <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                    <img
                      src={photo.url}
                      alt={photo.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-center mt-4 text-sm text-muted-foreground">
                    {photo.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full smooth-transition ${
                  index === currentIndex ? 'bg-foreground' : 'bg-border'
                }`}
                aria-label={`Go to photo ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-md"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            className="absolute top-8 right-8 w-12 h-12 rounded-full bg-foreground text-background hover:bg-foreground/90 flex items-center justify-center smooth-transition"
            onClick={() => setSelectedPhoto(null)}
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="max-w-5xl max-h-[90vh] p-4">
            <img
              src={selectedPhoto.url}
              alt={selectedPhoto.title}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
