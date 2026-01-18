import { Button } from "@/components/ui/button";

export default function Contact() {
    return (
        <section id="contact" className="py-12 md:py-24 bg-stone-900 border-t border-stone-800 text-stone-100">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Info Side */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-serif mb-4 text-white">
                                Contact & Wholesale
                            </h2>
                            <p className="text-stone-400 text-lg">
                                Have questions about our sourcing? Interested in wholesale for your restaurant? Get in touch.
                            </p>
                        </div>

                        <div className="bg-stone-950 p-6 rounded-xl border border-stone-800">
                            <h3 className="font-bold text-xl mb-4 text-amber-500 font-serif">Headquarters</h3>
                            <p className="mb-2">101 Market Street, Meatpacking District</p>
                            <p>New York, NY 10014</p>
                        </div>

                        <div className="bg-stone-950 p-6 rounded-xl border border-stone-800">
                            <h3 className="font-bold text-xl mb-4 text-amber-500 font-serif">Customer Support</h3>
                            <ul className="space-y-2">
                                <li className="flex justify-between"><span>Mon - Fri</span> <span>8:00 AM - 6:00 PM EST</span></li>
                                <li className="flex justify-between"><span>Email</span> <span className="text-stone-400">support@premiumcuts.com</span></li>
                            </ul>
                        </div>
                    </div>

                    {/* Map/Form Side */}
                    <div className="bg-stone-950 p-8 rounded-xl border border-stone-800">
                        <h3 className="font-bold text-2xl mb-6 font-serif">Inquiry Form</h3>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-stone-400">Name</label>
                                    <input id="name" className="w-full rounded-md border border-stone-800 bg-stone-900 px-3 py-2 text-sm text-white placeholder:text-stone-600 focus:outline-none focus:ring-2 focus:ring-red-600" placeholder="Jane Smith" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-stone-400">Email</label>
                                    <input id="email" type="email" className="w-full rounded-md border border-stone-800 bg-stone-900 px-3 py-2 text-sm text-white placeholder:text-stone-600 focus:outline-none focus:ring-2 focus:ring-red-600" placeholder="jane@example.com" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="inquiry-type" className="text-sm font-medium text-stone-400">Inquiry Type</label>
                                <select id="inquiry-type" className="w-full rounded-md border border-stone-800 bg-stone-900 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-red-600">
                                    <option>Order Support</option>
                                    <option>Wholesale / Bulk</option>
                                    <option>Sourcing Question</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-stone-400">Message</label>
                                <textarea id="message" className="min-h-[120px] w-full rounded-md border border-stone-800 bg-stone-900 px-3 py-2 text-sm text-white placeholder:text-stone-600 focus:outline-none focus:ring-2 focus:ring-red-600" placeholder="How can we help you?" />
                            </div>
                            <Button variant="premium" className="w-full bg-red-700 hover:bg-red-800">
                                Send Message
                            </Button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
