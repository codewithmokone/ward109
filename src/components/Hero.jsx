import { motion } from 'framer-motion';
import React from 'react';
import {ArrowRight} from 'lucide-react';
// import heroImage from '../assets/map.jpg'; 
import heroImage from '../assets/heroimage.jpeg';

function Hero() {
    return (
    <section id='home' className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Community marching" className="w-full h-full object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1142BB]/95 via-[#1142BB]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-6 max-w-6xl mt-20">
        <div className="max-w-3xl text-white">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-block bg-[#F9721F] text-white px-5 py-2 rounded-full text-sm font-bold tracking-wide uppercase mb-8 shadow-lg shadow-[#F9721F]/20"
          >
            Ward 109
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="font-display text-6xl md:text-8xl lg:text-9xl font-extrabold leading-[0.95] tracking-tight mb-8"
          >
            People First.<br/>Service First.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl text-white/90 leading-relaxed mb-12 max-w-2xl font-medium"
          >
            It's time for leadership that actually listens. We're fighting for safer streets, fully-funded schools, and housing that working families can afford.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button 
            className="bg-[#F9721F] hover:bg-[#F9721F]/90 font-medium border inline-flex justify-center align-center items-center text-white text-lg h-14 px-8 rounded-full shadow-xl shadow-[#F9721F]/30 min-h-10"
            onClick={"#contact"}
            >
              Join the Movement <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="bg-white/10 border text-white font-semibold border-white/30 hover:bg-white hover:text-[#1142BB] text-lg h-14 px-8 rounded-full backdrop-blur-sm">
              Read Our Plan
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero