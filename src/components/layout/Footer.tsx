import { UtensilsCrossed, Instagram, Facebook, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-stone-950 border-t border-stone-900 pt-16 pb-8 text-stone-400">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-4 text-white">
                            <UtensilsCrossed className="h-6 w-6 text-amber-500" />
                            <span className="text-xl font-bold font-serif">Premium Cuts</span>
                        </div>
                        <p className="text-sm mb-6 max-w-[250px]">
                            Delivering the world's finest meats directly to your kitchen with uncompromising quality and ethics.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="hover:text-amber-500 transition-colors"><Instagram className="h-5 w-5" /></Link>
                            <Link href="#" className="hover:text-amber-500 transition-colors"><Facebook className="h-5 w-5" /></Link>
                            <Link href="#" className="hover:text-amber-500 transition-colors"><Twitter className="h-5 w-5" /></Link>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Shop</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#" className="hover:text-amber-500">Beef</Link></li>
                            <li><Link href="#" className="hover:text-amber-500">Pork</Link></li>
                            <li><Link href="#" className="hover:text-amber-500">Lamb</Link></li>
                            <li><Link href="#" className="hover:text-amber-500">Poultry</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Company</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#" className="hover:text-amber-500">About Us</Link></li>
                            <li><Link href="#" className="hover:text-amber-500">Our Farms</Link></li>
                            <li><Link href="#" className="hover:text-amber-500">Wholesale</Link></li>
                            <li><Link href="#" className="hover:text-amber-500">Careers</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Support</h3>
                        <ul className="space-y-2 text-sm">
                            <li>101 Market Street</li>
                            <li>New York, NY 10014</li>
                            <li className="mt-4"><a href="tel:+15550000000" className="hover:text-amber-500">+1 (555) 000-0000</a></li>
                            <li><a href="mailto:orders@premiumcuts.com" className="hover:text-amber-500">orders@premiumcuts.com</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-stone-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
                    <p>&copy; {new Date().getFullYear()} Premium Cuts. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white">Shipping Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
