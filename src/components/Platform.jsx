import React from 'react';
import { Wallet, Users, CheckCircle, DoorOpen, HeartHandshake, Info, Eye, RefreshCcw } from 'lucide-react';
import { motion } from 'framer-motion';

function Platform() {
    const issues = [
        {
            title: "Consultation",
            desc: "We will hold regular izimbizo, community surveys, and ward meetings. Nothing about you, without you. Your voice will guide our priorities.",
            icon: <Users className="w-8 h-8" />
        },
        {
            title: "Service Standards",
            desc: "Clear, published timelines for fixing potholes, restoring power, and processing requests. You will know exactly what level of service to expect.",
            icon: <CheckCircle className="w-8 h-8" />
        },
        {
            title: "Access",
            desc: "Equal access for all residents. We'll champion decentralized municipal services, better hours, and accessible facilities for the elderly and disabled.",
            icon: <DoorOpen className="w-8 h-8" />
        },
        {
            title: "Courtesy",
            desc: "You deserve to be treated with respect. We will push for rigorous customer care training and accountability for all frontline municipal staff.",
            icon: <HeartHandshake className="w-8 h-8" />
        },
        {
            title: "Information",
            desc: "Full, accurate information about your ward. We'll provide regular newsletters, accessible public notices, and transparent updates on local projects.",
            icon: <Info className="w-8 h-8" />
        },
        {
            title: "Openness & Transparency",
            desc: "No more closed doors. We will publish budgets, project costs, and management structures so you know exactly where your rates and taxes go.",
            icon: <Eye className="w-8 h-8" />
        },
        {
            title: "Redress",
            desc: "When things go wrong, we fix them quickly. We'll establish a rapid-response complaints system with clear tracking and follow-through.",
            icon: <RefreshCcw className="w-8 h-8" />
        },
        {
            title: "Value for Money",
            desc: "Economical and efficient public services. We will eliminate wasteful expenditure and ensure every rand spent delivers tangible results for Ward 109.",
            icon: <Wallet className="w-8 h-8" />
        }
    ];

    return (
        <section id="platform" className="py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 text-[#F9721F] font-bold tracking-wide uppercase text-sm mb-4 justify-center">
                        <span className="w-8 h-0.5 bg-[#F9721F]"></span> The Batho Pele Principles <span className="w-8 h-0.5 bg-[#F9721F]"></span>
                    </div>
                    <h2 className="font-display text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">Our Platform</h2>
                    <p className="text-xl text-slate-600">Bringing the "People First" framework back to local government. This is our commitment to you.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {issues.map((issue, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.05 }}
                            className="bg-slate-50 border border-slate-100 p-8 rounded-3xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full"
                        >
                            <div className="w-14 h-14 bg-[#1142BB]/10 text-[#1142BB] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#1142BB] group-hover:text-white transition-colors duration-300 shrink-0">
                                {issue.icon}
                            </div>
                            <h3 className="font-display text-2xl font-bold text-slate-900 mb-3">{issue.title}</h3>
                            <p className="text-slate-600 text-base leading-relaxed grow">{issue.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Platform