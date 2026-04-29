import React from 'react';
import { Phone, MapPin, Mail } from 'lucide-react';


function Contact() {
    //   const { toast } = useToast();

    const handleSubmit = (e) => {
        e.preventDefault();
        // toast({
        //   title: "Message Sent!",
        //   description: "Thank you for reaching out. We will respond promptly — that is our commitment to service.",
        // });
    };

    return (
        <section id='contact' className="py-32 bg-white">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid md:grid-cols-2 gap-20 items-start">
                    <div>
                        <div className="inline-flex items-center gap-2 text-[#F9721F] font-bold tracking-wide uppercase text-sm mb-4">
                            <span className="w-8 h-0.5 bg-[#F9721F]"></span> Contact Us
                        </div>
                        <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 tracking-tight text-slate-900">Join the Team</h2>
                        <p className="text-slate-600 text-xl mb-12">
                            Whether you can hand out flyers, make phone calls, or help organize a local imbizo, we need your help to win this.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6 group">
                                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-[#1142BB] group-hover:bg-[#1142BB] group-hover:text-white transition-colors shrink-0">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl text-slate-900 mb-1">Campaign HQ</h4>
                                    <p className="text-slate-600 text-lg">1245 Northside Blvd<br />Ward 109</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-6 group">
                                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-[#1142BB] group-hover:bg-[#1142BB] group-hover:text-white transition-colors shrink-0">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl text-slate-900 mb-1">Email Us</h4>
                                    <p className="text-slate-600 text-lg">hello@elena109.co.za</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-6 group">
                                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-[#1142BB] group-hover:bg-[#1142BB] group-hover:text-white transition-colors shrink-0">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl text-slate-900 mb-1">Call HQ</h4>
                                    <p className="text-slate-600 text-lg">0800 123 4567</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-50 p-10 rounded-3xl border border-slate-200 shadow-xl">
                        <h3 className="font-display text-3xl font-bold mb-8 text-slate-900">Volunteer Sign Up</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700">First Name</label>
                                    <input required className="bg-white border-slate-300 h-12 text-lg focus-visible:ring-[#1142BB]flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1" placeholder="Sipho" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700">Last Name</label>
                                    <input required className="bg-white border-slate-300 h-12 text-lg focus-visible:ring-[#1142BB] flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1" placeholder="Ndlovu" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">Email Address</label>
                                <input required type="email" className="bg-white border-slate-300 h-12 text-lg focus-visible:ring-[#1142BB] flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1" placeholder="sipho@example.co.za" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">Phone Number</label>
                                <input required type="tel" className="bg-white border-slate-300 h-12 text-lg focus-visible:ring-[#1142BB] flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1" placeholder="082 000 0000" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">How would you like to help?</label>
                                <textarea className="bg-white border-slate-300 min-h-30 text-lg focus-visible:ring-[#1142BB] resize-none flex min-h-30 w-full rounded-md border border-input bg-transparent px-3 py-2" placeholder="Distributing flyers, hosting meetings, etc." />
                            </div>
                            <button type="submit" className="w-full bg-[#1142BB] hover:bg-[#1142BB]/90 text-white h-14 text-xl font-bold rounded-xl mt-4">
                                I'm In
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact