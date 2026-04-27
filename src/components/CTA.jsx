import React from 'react'

function CTA() {
  return (
    <section className="py-32 bg-slate-900 text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 tracking-tight">Together beating the drum for service delivery.</h2>
        <p className="text-xl md:text-2xl text-secondary font-bold mb-4 uppercase tracking-widest">
          Because WE BELONG, WE CARE, WE SERVE
        </p>
        <p className="text-2xl md:text-3xl font-display font-bold text-white mb-12">
          to make A BETTER LIFE FOR ALL.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[100, 250, 500, 1000].map(amount => (
            <button key={amount} variant="outline" className="bg-slate-800/50 border-slate-700 text-white hover:bg-secondary hover:border-secondary hover:text-white text-2xl font-bold h-20 rounded-2xl transition-all duration-300">
              R{amount}
            </button>
          ))}
        </div>
        <button size="lg" className="bg-secondary hover:bg-secondary/90 text-white text-xl h-16 px-12 rounded-full w-full md:w-auto shadow-lg shadow-secondary/30">
          Donate Another Amount
        </button>
      </div>
    </section>
  );
}

export default CTA