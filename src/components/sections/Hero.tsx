import { Button } from "@/components/ui/button";
import FadeIn from "@/components/ui/FadeIn";

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-stone-950">
            {/* Background with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-50"
                style={{
                    // Steak image
                    backgroundImage: "url('https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2070&auto=format&fit=crop')"
                }}
            />
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />

            {/* Content */}
            <div className="relative z-10 container mx-auto flex h-full flex-col items-center justify-center px-4 text-center md:px-6">
                <FadeIn delay={0.2} direction="up">
                    <h1 className="mb-6 text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-7xl lg:text-8xl font-serif">
                        Farm to Table <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-amber-600">
                            Butcher's Excellence
                        </span>
                    </h1>
                </FadeIn>

                <FadeIn delay={0.4} direction="up">
                    <p className="mb-8 max-w-[300px] sm:max-w-[600px] text-base text-stone-200 sm:text-xl md:text-2xl text-shadow-sm mx-auto">
                        Premium sustainably sourced steaks, chops, and poultry delivered straight to your doorstep.
                    </p>
                </FadeIn>

                <FadeIn delay={0.6} direction="up">
                    <div className="flex flex-col gap-4 sm:flex-row">
                        <Button variant="premium" size="lg" className="min-w-[160px] bg-red-700 hover:bg-red-800 shadow-red-900/20">
                            Shop Cuts
                        </Button>
                        <Button variant="outline" size="lg" className="min-w-[160px] border-white/20 text-white hover:bg-white/10">
                            Our Sourcing
                        </Button>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
