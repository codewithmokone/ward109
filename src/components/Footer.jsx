import React from 'react'
import { Link } from 'react-router';

function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-800">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16 pb-12 border-b border-slate-800">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2 uppercase tracking-wide">
            WE BELONG, WE CARE, WE SERVE
          </h3>
          <p className="text-secondary font-bold tracking-widest uppercase">
            A Better Life For All
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="font-display font-bold text-3xl text-white tracking-tighter">WARD 109</span>
            </Link>
            <p className="max-w-sm text-slate-400 leading-relaxed mb-6">
              A grassroots campaign dedicated to bringing real Batho Pele representation to Ward 109. Fighting for responsive, accountable local government.
            </p>
            {/* <div className="inline-block border border-slate-700 px-4 py-3 rounded-lg text-sm text-slate-300 font-medium tracking-wide">
              Paid for by Friends of Elena Rodriguez
            </div> */}
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="hover:text-white transition-colors">Meet Elena</a></li>
              <li><a href="#platform" className="hover:text-white transition-colors">Our Platform</a></li>
              <li><a href="#endorsements" className="hover:text-white transition-colors">Endorsements</a></li>
              <li><a href="#events" className="hover:text-white transition-colors">Events</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Take Action</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-secondary transition-colors text-white">Donate</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Volunteer</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Host an Imbizo</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Request a Yard Sign</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} Ward 109. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer