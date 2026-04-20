import React, { useEffect, useState } from 'react'
import { Link } from 'react-router';

function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className={`font-display font-bold text-2xl tracking-tighter ${scrolled ? "text-[#1142BB]" : "text-white"}`}>
            WARD 109
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className={`text-sm font-medium ${scrolled ? "text-slate-600 hover:text-[#1142BB]" : "text-white/80 hover:text-white"} transition-colors`}>Meet Elena</a>
          <a href="#issues" className={`text-sm font-medium ${scrolled ? "text-slate-600 hover:text-[#1142BB]" : "text-white/80 hover:text-white"} transition-colors`}>The Issues</a>
          <a href="#endorsements" className={`text-sm font-medium ${scrolled ? "text-slate-600 hover:text-[#1142BB]" : "text-white/80 hover:text-white"} transition-colors`}>Community</a>
          <a href="#events" className={`text-sm font-medium ${scrolled ? "text-slate-600 hover:text-[#1142BB]" : "text-white/80 hover:text-white"} transition-colors`}>Events</a>
        </div>
        <div className="flex items-center gap-4">
          <button variant={scrolled ? "outline" : "secondary"} className={!scrolled ? "bg-white text-[#1142BB] hover:bg-white/90 hidden sm:flex" : "hidden sm:flex"}>
            Volunteer
          </button>
          <button className="bg-secondary hover:bg-secondary/90 text-white">
            Donate
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav