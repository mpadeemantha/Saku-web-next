import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import ScrollReveal from "@/components/ScrollReveal";
import { Clock, MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen relative overflow-x-hidden bg-white">
            <Navbar />

            {/* Hero Section for Contact */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-saku-dark text-white overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-saku-dark"></div>
                    {/* Optionally add a map or pattern bg here */}
                </div>
                <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
                    <div className="max-w-3xl">
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <div className="h-[1px] w-12 bg-saku-red"></div>
                            <span className="text-saku-red font-bold tracking-[0.3em] uppercase text-sm">Let&apos;s Talk</span>
                            <div className="h-[1px] w-12 bg-saku-red"></div>
                        </div>
                        <h1 className="font-display text-3xl sm:text-4xl md:text-7xl font-bold mb-6 leading-tight">
                            Get in Touch.<br />
                            <span className="text-gray-400">We&apos;re here to help.</span>
                        </h1>
                        <p className="text-xl text-gray-300 font-sans leading-relaxed">
                            Whether you have a question about our language courses, visa processing, or the SSW program, our team is ready to assist you.
                        </p>
                    </div>
                </div>
            </section>

            {/* Quick Info Grid */}
            <section className="pt-24 pb-12 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="bg-white p-8 border border-gray-100 hover:border-saku-red/30 transition-colors duration-300 text-center flex flex-col items-center">
                            <div className="w-12 h-12 bg-saku-red/10 text-saku-red rounded-full flex items-center justify-center mb-4">
                                <Clock size={24} />
                            </div>
                            <h3 className="font-bold text-saku-dark mb-2">Opening Hours</h3>
                            <p className="text-gray-500 text-base md:text-lg">Mon - Fri: 8:00 AM - 5:00 PM</p>
                            <p className="text-gray-500 text-base md:text-lg">Sat - Sun: 8:00 AM - 2:00 PM</p>
                        </div>
                        <div className="bg-white p-8 border border-gray-100 hover:border-saku-red/30 transition-colors duration-300 text-center flex flex-col items-center">
                            <div className="w-12 h-12 bg-saku-red/10 text-saku-red rounded-full flex items-center justify-center mb-4">
                                <MapPin size={24} />
                            </div>
                            <h3 className="font-bold text-saku-dark mb-2">Main Campus</h3>
                            <p className="text-gray-500 text-base md:text-lg">07 Turnour Rd, </p>
                            <p className="text-gray-500 text-base md:text-lg">Colombo 07, Sri Lanka</p>
                        </div>
                        <div className="bg-white p-8 border border-gray-100 hover:border-saku-red/30 transition-colors duration-300 text-center flex flex-col items-center">
                            <div className="w-12 h-12 bg-saku-red/10 text-saku-red rounded-full flex items-center justify-center mb-4">
                                <Phone size={24} />
                            </div>
                            <h3 className="font-bold text-saku-dark mb-2">Phone</h3>
                            <p className="text-gray-500 text-base md:text-lg">+94 76 262 8498</p>
                            <p className="text-gray-500 text-base md:text-lg">+94 74 013 2946</p>
                        </div>
                        <div className="bg-white p-8 border border-gray-100 hover:border-saku-red/30 transition-colors duration-300 text-center flex flex-col items-center">
                            <div className="w-12 h-12 bg-saku-red/10 text-saku-red rounded-full flex items-center justify-center mb-4">
                                <Mail size={24} />
                            </div>
                            <h3 className="font-bold text-saku-dark mb-2">Email</h3>
                            <p className="text-gray-500 text-base md:text-lg">info@sakujls.lk</p>
                            <p className="text-gray-500 text-base md:text-lg">vishara@sakujls.lk</p>
                        </div>
                    </div>
                </div>
            </section>

            <ScrollReveal>
                <div className="mb-24">
                    {/* Render the contact component from main page, but we reuse it nicely */}
                    {/* NOTE: We've passed padding to original, it might look slightly doubled but it's acceptable. Alternatively we just render it. */}
                    <Contact />
                </div>
            </ScrollReveal>

            {/* Optional Map / Visual */}
            <section className="w-full h-96 bg-gray-200 relative">
                <div className="absolute inset-0 bg-saku-dark/10 flex items-center justify-center">
                    <p className="text-gray-500 font-bold uppercase tracking-widest text-base md:text-lg">[ Interactive Map Placeholder ]</p>
                </div>
                {/* Embed actual map here if needed */}
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31686.405631665584!2d79.880575!3d6.914416!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2599bfb85005f%3A0xb874f81fab171c2a!2s07%20Turnour%20Rd%2C%20Colombo%2000800%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1775769779111!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 grayscale contrast-125 opacity-70"
                ></iframe>
            </section>

            <Footer />
        </main>
    );
}
