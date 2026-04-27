import React from 'react';
import { Clock,MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

function Events() {
  const events = [
    {
      date: "OCT 12",
      title: "Southside Community Imbizo",
      time: "10:00 AM",
      location: "Community Hall"
    },
    {
      date: "OCT 15",
      title: "Service Delivery Town Hall",
      time: "6:30 PM",
      location: "Recreation Center"
    },
    {
      date: "OCT 18",
      title: "Ward 109 Door Knocking",
      time: "9:00 AM",
      location: "Campaign HQ"
    }
  ];

  return (
    <section id="events" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-secondary font-bold tracking-wide uppercase text-sm mb-4">
              <span className="w-8 h-[2px] bg-secondary"></span> Consultation in Action
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">Upcoming Events</h2>
          </div>
          <button variant="outline" className="h-12 px-6 rounded-full border-slate-300 hover:bg-slate-100 shrink-0">
            View All Events
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {events.map((event, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-secondary/50 transition-colors group cursor-pointer"
            >
              <div className="text-secondary font-bold tracking-widest text-sm mb-4">{event.date}</div>
              <h3 className="font-display text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">{event.title}</h3>
              <div className="space-y-2 text-slate-600 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" /> {event.time}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> {event.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Events