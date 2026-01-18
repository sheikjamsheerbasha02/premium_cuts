"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ShoppingBag, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
    { name: "Shop Meats", href: "#products" },
    { name: "Our Sourcing", href: "#about" },
    { name: "Recipes", href: "#recipes" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-stone-950/80 backdrop-blur-md">
            <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2">
                    <UtensilsCrossed className="h-8 w-8 text-amber-500" />
                    <span className="text-2xl font-bold tracking-tighter text-white font-serif">
                        Premium Cuts
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-stone-300 transition-colors hover:text-amber-500 uppercase tracking-wide"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button variant="premium" size="sm" className="gap-2">
                        <ShoppingBag className="h-4 w-4" />
                        Order Now
                    </Button>
                </nav>

                {/* Mobile Actions */}
                <div className="flex items-center gap-4 md:hidden">
                    <Button variant="premium" size="sm" className="h-9 px-3 gap-2">
                        <ShoppingBag className="h-4 w-4" />
                        <span className="hidden sm:inline">Order</span>
                    </Button>
                    <button
                        className="text-white p-2"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full border-t border-white/10 bg-stone-950 px-6 py-8 flex flex-col gap-6 shadow-2xl h-[calc(100vh-80px)]">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-xl font-medium text-stone-300 hover:text-amber-500 py-3 border-b border-white/5"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button variant="premium" className="w-full gap-2 mt-4 text-lg py-6">
                        <ShoppingBag className="h-5 w-5" />
                        Order Now
                    </Button>
                </div>
            )}
        </header>
    );
}
