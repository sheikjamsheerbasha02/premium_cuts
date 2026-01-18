import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";

// Meat images from Unsplash
const images = [
    "https://images.unsplash.com/photo-1615937651143-b5805f29634f?q=80&w=2070&auto=format&fit=crop", // Tomahawk
    "https://images.unsplash.com/photo-1544025162-d7669d26563d?q=80&w=1974&auto=format&fit=crop", // Raw meat
    "https://images.unsplash.com/photo-1529694157872-4e0c0f3b238b?q=80&w=2070&auto=format&fit=crop", // BBQ
    "https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=1931&auto=format&fit=crop", // Steak cooked
    "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=2070&auto=format&fit=crop", // Butcher block
    "https://images.unsplash.com/photo-1432139555190-58524dae6a55?q=80&w=2076&auto=format&fit=crop"  // Plated steak
];

export default function Gallery() {
    return (
        <section id="gallery" className="py-12 md:py-24 bg-stone-950 text-stone-100">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-12 md:mb-16 text-center">
                    <FadeIn direction="up">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-serif mb-4 text-white">
                            Curated Excellence
                        </h2>
                        <p className="mx-auto max-w-[700px] text-stone-400 text-lg">
                            From the pasture to your plate, witness the quality of our cuts.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((src, index) => (
                        <FadeIn key={index} delay={index * 0.1} direction="up" className="h-full">
                            <div
                                className="relative aspect-[4/3] overflow-hidden rounded-xl border border-stone-800 bg-stone-900 group h-full w-full"
                            >
                                <Image
                                    src={src}
                                    alt={`Premium Meat Image ${index + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    unoptimized
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="text-white font-serif text-lg tracking-wider border border-white/30 px-6 py-2 rounded-full backdrop-blur-sm">View Cut</span>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
