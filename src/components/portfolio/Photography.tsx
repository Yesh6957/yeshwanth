import { useState } from 'react';
import { X } from 'lucide-react';

const photos = [
	{
		id: 1,
		title: 'Photo 1',
		url: 'https://raw.githubusercontent.com/Yesh6957/images/refs/heads/main/photo%201.jpg',
	},
	{
		id: 2,
		title: 'Photo 2',
		url: 'https://raw.githubusercontent.com/Yesh6957/images/refs/heads/main/photo%202.jpg',
	},
	{
		id: 3,
		title: 'Photo 3',
		url: 'https://raw.githubusercontent.com/Yesh6957/images/refs/heads/main/photo%203.jpg',
	},
	{
		id: 4,
		title: 'Photo 4',
		url: 'https://raw.githubusercontent.com/Yesh6957/images/refs/heads/main/photo%204.jpg',
	},
];

export default function Photography() {
	const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);

	// continuous marquee uses pure CSS animation (no JS interval)

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
					{/* continuous marquee: duplicated items for seamless loop */}
					<div className="photography-marquee">
						<div className="photography-track" aria-hidden="false">
							{[...photos, ...photos].map((photo, i) => (
								<div
									key={`${photo.id}-${i}`}
									className="photography-item cursor-pointer"
									onClick={() => setSelectedPhoto(photo)}
								>
									<div className="border border-border hover:shadow-lg smooth-transition bg-background p-2 rounded-md">
										<div
											className="bg-muted flex items-center justify-center rounded-sm overflow-hidden"
											style={{ height: 140 }}
										>
											<img
												src={photo.url}
												alt={photo.title}
												className="w-full h-full object-cover"
												loading="lazy"
											/>
										</div>
										<p className="text-center mt-2 text-sm text-muted-foreground">
											{photo.title}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* no manual dots for continuous marquee */}
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
