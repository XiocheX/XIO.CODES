
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

declare global {
  interface Window {
    emailjs: any;
  }
}

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', project: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [selectedTier, setSelectedTier] = useState<{ name: string; price: string } | null>(null);

  useEffect(() => {
    // Load EmailJS library
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/index.min.js';
    script.onload = () => {
      window.emailjs.init('xGmgwFb55nzYc3HRE'); // Public key for EmailJS
    };
    document.body.appendChild(script);

    // Check for pricing tier from sessionStorage
    const storedTier = sessionStorage.getItem('selectedTier');
    if (storedTier) {
      const tier = JSON.parse(storedTier);
      setSelectedTier(tier);
      // Auto-fill project field with tier info
      setFormState(prev => ({
        ...prev,
        project: `I'm interested in your ${tier.name} plan (${tier.price}). ` + prev.project
      }));
      // Clear the stored tier
      sessionStorage.removeItem('selectedTier');
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setError('');

    try {
      // Send to both email addresses
      const templateParams = {
        to_email: 'philipocheekele@gmail.com,philipemoche@gmail.com',
        from_name: formState.name,
        from_email: formState.email,
        message: formState.project,
        reply_to: formState.email
      };

      const response = await window.emailjs.send(
        'service_udabura',
        'template_contact',
        templateParams
      );

      if (response.status === 200) {
        alert("Got it. If this aligns, you'll hear back. If not, still rooting for you.");
        setFormState({ name: '', email: '', project: '' });
      }
    } catch (err: any) {
      setError('Failed to send message. Please try again.');
      console.error('Email error:', err);
    } finally {
      setSubmitted(false);
    }
  };

  const contactInfo = [
    {
      label: 'Email Me',
      value: 'Philipocheekele@gmail.com',
      href: 'mailto:Philipocheekele@gmail.com',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      label: 'WhatsApp',
      value: '+234 808 168 0736',
      href: 'https://wa.me/2348081680736',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412 0 6.556-5.338 11.892-11.893 11.892-1.996-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.589.943 3.147 1.411 4.75 1.412 5.432 0 9.854-4.422 9.855-9.854 0-2.628-1.024-5.1-2.885-6.961s-4.332-2.884-6.961-2.884c-5.433 0-9.855 4.422-9.856 9.854-.001 1.745.453 3.441 1.316 4.907l-1.099 4.01 4.103-1.076z"/>
        </svg>
      )
    },
    {
      label: 'Follow on X',
      value: '@Xi_oche',
      href: 'https://x.com/Xi_oche',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.514l-5.106-6.694-5.832 6.694H2.882l7.605-8.701-8.175-11.199h6.716l4.882 6.467 5.545-6.467zM11.41 13.968l-.635-.873-5.046-6.835h2.17l3.842 5.216.635.873 5.303 7.197h-2.17l-4.099-5.578z" />
        </svg>
      )
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-black relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black mb-8 leading-tight text-black dark:text-white">
              Let's build something <span className="text-blue-600">real.</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-16 leading-relaxed">
              Short message. Clear goal. I'll respond if it makes sense.
            </p>
            
            {/* X Profile Showcase Card */}
            <motion.a
              href="https://x.com/Xi_oche"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="block mb-12 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl hover:border-blue-600 dark:hover:border-blue-500/30 transition-all duration-300 group overflow-hidden"
            >
              {/* Header Background */}
              <div className="h-24 bg-blue-600" />
              
              {/* Profile Content */}
              <div className="px-6 pb-6">
                {/* Avatar */}
                <div className="flex items-start justify-between mb-4 -mt-16 relative z-10">
                  {/* Custom Avatar with Initials */}
                  <div className="w-24 h-24 bg-blue-600 border-4 border-white dark:border-black rounded-full flex items-center justify-center group-hover:scale-105 transition-transform shadow-lg">
                    <span className="text-3xl font-black text-white">X</span>
                  </div>
                  <a
                    href="https://x.com/Xi_oche"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="mt-4 px-4 py-2 bg-black dark:bg-white text-white dark:text-black font-bold rounded-full text-sm hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                  >
                    Follow
                  </a>
                </div>

                {/* Profile Info */}
                <div className="mb-2">
                  <h3 className="text-xl font-bold text-black dark:text-white">xi.codes</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">@Xi_oche</p>
                </div>

                {/* Bio */}
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 font-medium">
                  I CODE. I TRADE. I HACK.
                </p>

                {/* Stats */}
                <div className="flex gap-6 text-sm mb-4 pb-4 border-b border-gray-200 dark:border-white/10">
                  <div>
                    <span className="font-bold text-black dark:text-white">65</span>
                    <span className="text-gray-600 dark:text-gray-400 ml-1">Following</span>
                  </div>
                  <div>
                    <span className="font-bold text-black dark:text-white">33</span>
                    <span className="text-gray-600 dark:text-gray-400 ml-1">Followers</span>
                  </div>
                </div>

                {/* Quick Info */}
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-400 mb-4">
                  <p className="flex items-center gap-2">
                    <span className="text-lg">📍</span>
                    <span>oche-wziz.vercel.app</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span>🔗</span>
                    <a href="https://github.com/XiocheX" className="text-blue-600 dark:text-blue-400 hover:underline">
                      github.com/XiocheX
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <span>📅</span>
                    <span>Joined November 2025</span>
                  </p>
                </div>

                {/* Role/Description */}
                <div className="bg-blue-50 dark:bg-blue-500/10 rounded-lg p-3 border border-blue-200 dark:border-blue-500/20">
                  <p className="text-sm font-semibold text-blue-900 dark:text-blue-200">
                    Coming soon... Trader | Developer | Hacker
                  </p>
                </div>

                {/* CTA */}
                <div className="mt-4 text-sm font-bold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform">
                  View profile →
                </div>
              </div>
            </motion.a>

            {/* CV Download Button */}
            <motion.a
              href="https://drive.google.com/file/d/1Zu7pMwqD6ynCJ2kL5O8nQ9rS0tUvWxYz/view"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-4 p-4 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl hover:border-blue-600 dark:hover:border-blue-500/30 transition-all group mb-8"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 8l-4-4m4 4l4-4" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest">Download</p>
                <p className="font-bold text-black dark:text-white">My Resume / CV</p>
              </div>
              <svg className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>

            <div className="space-y-8">
              {contactInfo.map((item, idx) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 + 0.3 }}
                  className="flex items-center gap-6 group"
                >
                  <div className="w-14 h-14 bg-gray-200 dark:bg-white/5 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-500 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">{item.label}</div>
                    <div className="text-xl font-bold text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
                      {item.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-10 relative"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-600 dark:text-gray-400">Your Name</label>
                <input 
                  required
                  type="text" 
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  placeholder="Philip Moche" 
                  className="w-full bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-xl px-5 py-3 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-blue-600 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-600 dark:text-gray-400">Your Email</label>
                <input 
                  required
                  type="email" 
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  placeholder="you@example.com" 
                  className="w-full bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-xl px-5 py-3 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-blue-600 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-600 dark:text-gray-400">What are you trying to build?</label>
                <textarea 
                  required
                  rows={4}
                  value={formState.project}
                  onChange={(e) => setFormState({...formState, project: e.target.value})}
                  placeholder="Describe your idea, project, or what you're working on..."
                  className="w-full bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-xl px-5 py-3 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-blue-600 transition-colors resize-none"
                />
              </div>
              {error && <div className="text-red-600 dark:text-red-400 text-sm font-medium">{error}</div>}
              <div className="flex gap-3">
                <button 
                  type="submit" 
                  disabled={submitted}
                  className={`flex-1 py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all ${
                      submitted 
                        ? 'bg-gray-400 dark:bg-gray-700 text-gray-600 dark:text-gray-400' 
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  {submitted ? 'Sending...' : 'Send Message'}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const message = `Hi! I'm interested in your ${selectedTier ? selectedTier.name + ' plan (' + selectedTier.price + ')' : 'services'}. ${formState.project}`.trim();
                    const encodedMessage = encodeURIComponent(message);
                    window.open(`https://x.com/messages/compose?recipient_id=1525285554&text=${encodedMessage}`, '_blank');
                  }}
                  className="flex-1 py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all bg-slate-800 hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600 text-white"
                >
                  Message on X
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.514l-5.106-6.554-5.835 6.554H2.423l7.723-8.835L1.456 2.25h6.6l4.759 6.327L17.52 2.25h.724zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/></svg>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
