import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";
import { CheckCircle2, Globe, Users, BookOpen, Star } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen relative overflow-x-hidden bg-white">
            <Navbar />

            {/* Hero Section for About */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-saku-dark text-white overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-saku-dark"></div>
                    <div className="w-full h-full bg-[url('/about.jpg')] bg-cover bg-center bg-no-repeat grayscale"></div>
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-saku-red font-bold tracking-[0.3em] uppercase text-sm">About Us</span>
                            <div className="h-[1px] w-12 bg-saku-red"></div>
                        </div>
                        <h1 className="font-display text-3xl sm:text-4xl md:text-7xl font-bold mb-6 leading-tight">
                            Who We Are<br />
                        </h1>
                        <p className="text-xl text-gray-300 font-sans leading-relaxed">
                            At Saku Japanese Language School, we are dedicated to helping Sri Lankan students and professionals achieve their dreams of studying, working, and living in Japan. Our institution provides top-quality Japanese language education, visa assistance, and consulting services to ensure a smooth transition for students aspiring to move to Japan.
                        </p>
                    </div>
                </div>
            </section>

            <ScrollReveal>
                <section className="py-24">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                            <div className="lg:w-1/2 relative">
                                <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
                                    <div className="absolute -top-6 -left-6 w-full h-full border-2 border-saku-red/20 z-0" />
                                    <div className="relative z-10 w-full h-full overflow-hidden shadow-2xl">
                                        <Image
                                            src="/about.jpg"
                                            alt="Saku Japanese Language School Heritage"
                                            fill
                                            className="object-cover transition-transform duration-700 hover:scale-105"
                                        />
                                    </div>
                                    <div className="absolute -bottom-8 -right-8 glass p-8 shadow-xl hidden sm:block z-20 bg-white/90 backdrop-blur-md border border-gray-100">
                                        <div className="flex flex-col items-center text-center">
                                            <span className="font-display text-3xl sm:text-4xl font-bold text-saku-dark">10+</span>
                                            <span className="text-sm font-bold uppercase tracking-widest text-gray-500 mt-1">Years of Legacy</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/2">
                                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-saku-dark leading-tight">
                                    Why Choose Saku?
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6 font-sans">
                                    Saku Japanese Language School pvt.Ltd | Trusted Experts in Japan Visa Services – Offering Comprehensive Assistance for SSW, Work, and Service Visas. With our in-depth knowledge of Japan’s immigration processes, personalized support, and commitment to excellence, we ensure a smooth and stress-free visa application experience for individuals and businesses.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                                    {[
                                        "Experienced visa consultants with a track record of successful applications.",
                                        "Step-by-step guidance tailored to your individual needs.",
                                        "Affordable service fees with a commitment to quality and reliability.",
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <CheckCircle2 size={20} className="text-saku-red mt-1 flex-shrink-0" />
                                            <span className="text-sm font-bold text-saku-dark/80 leading-snug">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <ScrollReveal>
                <section className="py-24 bg-gray-50 border-y border-gray-100">
                    <div className="container mx-auto px-6 text-center max-w-5xl">
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <div className="h-[1px] w-8 bg-saku-red"></div>
                            <span className="text-saku-red font-bold tracking-[0.3em] uppercase text-sm">Our Core</span>
                            <div className="h-[1px] w-8 bg-saku-red"></div>
                        </div>
                        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-16 text-saku-dark">Mission & Vision</h2>

                        <div className="grid md:grid-cols-2 gap-12 text-left">
                            <div className="bg-white p-10 shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-saku-red rounded-sm group relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none text-saku-dark">
                                    <Globe size={180} />
                                </div>
                                <h3 className="font-display text-2xl sm:text-3xl font-bold text-saku-dark mb-6 relative z-10">Mission</h3>
                                <p className="text-gray-600 text-lg leading-relaxed relative z-10">
                                    Our mission is to empower Sri Lankan students with the language skills, cultural knowledge, and guidance they need to achieve their dreams of studying, working, and living in Japan. Through high-quality education, expert visa services, and personalized consulting, we strive to make the journey to Japan seamless, enriching, and successful for every student.
                                </p>
                            </div>
                            <div className="bg-white p-10 shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-saku-dark rounded-sm group relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none text-saku-dark">
                                    <Star size={180} />
                                </div>
                                <h3 className="font-display text-2xl sm:text-3xl font-bold text-saku-dark mb-6 relative z-10">Vision</h3>
                                <p className="text-gray-600 text-lg leading-relaxed relative z-10">
                                    Our vision is to become the leading Japanese language school and consulting center in Sri Lanka, renowned for fostering cross-cultural connections and transforming the lives of students. We aim to build a community where individuals are equipped to thrive in Japan, contributing to global understanding and collaboration.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <ScrollReveal>
                <section className="py-24">
                    <div className="container mx-auto px-6">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="font-display text-3xl sm:text-4xl font-bold text-saku-dark mb-6">Why Choose Saku?</h2>
                            <p className="text-gray-600 text-lg">Our holistic approach ensures our students are well-prepared not just for exams, but for life in Japan.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: <Users size={40} className="text-saku-red" />,
                                    title: "Experienced Faculty",
                                    desc: "Learn from native Japanese speakers and seasoned local educators with years of experience."
                                },
                                {
                                    icon: <BookOpen size={40} className="text-saku-dark" />,
                                    title: "Proven Curriculum",
                                    desc: "Structured courses designed to guarantee success in JLPT, NAT, and JFT examinations."
                                },
                                {
                                    icon: <Globe size={40} className="text-saku-red" />,
                                    title: "End-to-End Support",
                                    desc: "From Language training to visa processing and post-arrival assistance in Japan."
                                }
                            ].map((feature, i) => (
                                <div key={i} className="flex flex-col items-center text-center p-8 bg-white border border-gray-100 hover:border-saku-red/30 transition-colors duration-300">
                                    <div className="mb-6">{feature.icon}</div>
                                    <h3 className="text-xl font-bold text-saku-dark mb-4">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <Footer />
        </main>
    );
}
