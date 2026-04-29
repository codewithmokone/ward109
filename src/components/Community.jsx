import React from 'react';
import {Quote} from 'lucide-react';
import { motion } from 'framer-motion';

function Community() {
    const endorsements = [
        {
            quote: "For years, our streetlights were broken and no one answered the phone at the municipal office. Elena organized us, demanded answers, and got them fixed. She understands service delivery.",
            author: "Marcus T.",
            role: "Ward 109 Resident & Small Business Owner"
        },
        {
            quote: "We need a councillor who actually listens. At every imbizo Elena has hosted, she doesn't just talk — she takes notes, and then she takes action. That's real consultation.",
            author: "Sarah J.",
            role: "Community Forum Leader"
        },
        {
            quote: "Elena's commitment to transparency is exactly what we need. She has consistently fought for openness in how our local budget is spent. She puts the community first.",
            author: "Ward 109 Ratepayers Association",
            role: "Representing 3,000+ Households"
        }
    ];

    return (
        <section id="community" className="py-24 bg-[#1142BB] text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-150 h-150 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-100 h-100 bg-[#F9721F]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">The Community is With Us</h2>
                    <p className="text-xl text-[#F9721F]-foreground/80 max-w-2xl mx-auto">Hear from the neighbors and organizations backing our movement for accountable service.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {endorsements.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl flex flex-col h-full"
                        >
                            <Quote className="w-10 h-10 text-[#F9721F] mb-6 opacity-80 shrink-0" />
                            <p className="text-lg leading-relaxed mb-8 font-medium grow">"{item.quote}"</p>
                            <div>
                                <p className="font-bold text-xl">{item.author}</p>
                                <p className="text-gray-400 text-sm mt-1">{item.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Community