import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Globe } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen relative overflow-x-hidden bg-white">
            <Navbar />

            {/* Hero — matches Visa/About/SSW hero style */}
            <section className="relative pt-24 pb-16 lg:pt-48 lg:pb-32 bg-saku-dark text-white overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-saku-dark"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-30">
                        <Globe size={400} className="text-gray-500 animate-[spin_120s_linear_infinite]" />
                    </div>
                </div>
                <div className="container mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center text-center">
                    <div className="max-w-3xl">
                        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4">
                            <div className="h-[1px] w-8 sm:w-12 bg-saku-red"></div>
                            <span className="text-saku-red text-overline">Let&apos;s Talk</span>
                            <div className="h-[1px] w-8 sm:w-12 bg-saku-red"></div>
                        </div>
                        <h1 className="font-display text-hero font-bold mb-6 leading-tight">
                            Get in Touch.<br />
                            <span className="text-gray-400">We&apos;re here to help.</span>
                        </h1>
                        <p className="text-body text-gray-300 leading-relaxed max-w-2xl mx-auto">
                            Whether you have a question about our language courses, visa processing, or the SSW program — our team is ready to assist you.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Form + Info */}
            <Contact />

            {/* Google Map */}
            <section className="w-full h-80 md:h-96 relative">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31686.405631665584!2d79.880575!3d6.914416!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2599bfb85005f%3A0xb874f81fab171c2a!2s07%20Turnour%20Rd%2C%20Colombo%2000800%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1775769779111!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 grayscale opacity-80"
                ></iframe>
                {/* Map overlay label */}
                <div className="absolute top-4 left-4 z-10 bg-white rounded-xl px-4 py-2 shadow-md border border-slate-100 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-saku-red animate-pulse"></div>
                    <span className="text-label text-slate-600 font-semibold">07 Turnour Rd, Colombo</span>
                </div>
            </section>

            <Footer />
        </main>
    );
}
