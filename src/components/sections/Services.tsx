import { Flame, CheckCircle, Truck, Info } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

// Meat products
const products = [
    {
        title: "A5 Japanese Wagyu",
        price: "$120/lb",
        description: "Authentic Miyazaki beef with exquisite marbling and tenderness.",
        icon: Flame,
    },
    {
        title: "Dry-Aged Ribeye",
        price: "$45/lb",
        description: "Aged for 45 days for concentrated flavor and buttery texture.",
        icon: CheckCircle,
    },
    {
        title: "Organic Lamb Chops",
        price: "$35/lb",
        description: "Grass-fed, pasture-raised boneless chops from local farms.",
        icon: Info,
    },
    {
        title: "Heritage Pork Chop",
        price: "$22/lb",
        description: "Thick-cut, bone-in chops known for superior juiciness.",
        icon: Truck,
    },
];

export default function Services() {
    return (
        <section id="products" className="py-12 md:py-24 bg-stone-900 text-stone-100">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-12 md:mb-16 text-center">
                    <FadeIn direction="up">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-serif mb-4 text-amber-500">
                            Premium Selections
                        </h2>
                        <p className="mx-auto max-w-[700px] text-stone-400 text-lg">
                            Hand-selected, ethically sourced, and expertly butchered for your table.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {products.map((product, index) => (
                        <FadeIn key={index} delay={index * 0.1} direction="up">
                            <div
                                className="group relative h-full overflow-hidden rounded-xl border border-stone-800 bg-stone-950 p-6 md:p-8 hover:border-red-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-900/10"
                            >
                                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-stone-900 text-red-500 group-hover:bg-red-600 group-hover:text-white transition-colors">
                                    <product.icon className="h-6 w-6" />
                                </div>
                                <h3 className="mb-2 text-xl font-bold font-serif">{product.title}</h3>
                                <p className="mb-4 text-sm text-stone-400 group-hover:text-stone-300">
                                    {product.description}
                                </p>
                                <div className="text-2xl font-bold text-amber-500">{product.price}</div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
