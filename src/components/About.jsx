import React from 'react';
import { motion } from 'framer-motion';
import {ChevronRight} from 'lucide-react';
function About() {
  return (
    <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-100/50 transform -skew-x-12 translate-x-32 hidden lg:block"></div>
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-primary/10 rounded-[2rem] transform -rotate-3 z-0"></div>
            <div className="absolute -inset-4 bg-secondary/10 rounded-[2rem] transform rotate-2 z-0"></div>
            <img src="/candidate.png" alt="Elena Rodriguez" className="relative z-10 w-full h-[600px] object-cover rounded-2xl shadow-xl" />
            <div className="absolute -bottom-8 -right-8 bg-primary text-white p-8 rounded-2xl shadow-2xl z-20 max-w-[260px] hidden sm:block">
              <p className="font-display font-extrabold text-4xl mb-2">15 Yrs</p>
              <p className="text-sm text-primary-foreground/90 leading-relaxed">Fighting for Ward 109 families and real service delivery.</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 text-secondary font-bold tracking-wide uppercase text-sm mb-4">
              <span className="w-8 h-[2px] bg-secondary"></span> Meet Elena
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 tracking-tight leading-tight">Not just a politician.<br/>A public servant.</h2>
            <div className="space-y-6 text-lg text-slate-600">
              <p>
                Elena grew up right here in Ward 109. She knows the frustration of unreported potholes, dry taps, and unresponsive municipal offices. She believes that local government exists for one reason: to serve the people.
              </p>
              <p>
                For the last decade, she's been on the ground holding local officials accountable, helping residents navigate the bureaucracy to get basic services, and advocating for the true meaning of Batho Pele — "People First."
              </p>
              <blockquote className="border-l-4 border-secondary pl-6 py-2 my-8 font-medium text-slate-900 text-xl italic bg-white/50 rounded-r-lg">
                "We belong, we care, we serve. That's the promise of our democracy, and it's time we actually delivered on it in Ward 109. No more excuses. Just accountable service."
              </blockquote>
            </div>
            <div className="mt-10">
              <button variant="link" className="text-primary p-0 h-auto text-lg font-bold group">
                Read Elena's Full Story <ChevronRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About