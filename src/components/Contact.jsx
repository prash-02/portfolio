import React, { useState } from 'react'
import { Mail, Github, Linkedin, MapPin, Send, MessageSquare } from 'lucide-react'

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'kushwaha7757@gmail.com',
    href: 'mailto:kushwaha7757@gmail.com',
    color: 'cyan',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/prash-02',
    href: 'https://github.com/prash-02',
    color: 'amber',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/prashantkushwaha',
    href: 'https://linkedin.com/in/prashantkushwaha-ec',
    color: 'cyan',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Gujarat, India',
    href: '#',
    color: 'pink',
  },
]

const colorConfig = {
  cyan: {
    icon: 'text-cyber-cyan',
    border: 'border-cyber-cyan/20',
    hover: 'hover:border-cyber-cyan/50 hover:shadow-[0_0_20px_rgba(0,245,255,0.1)]',
    iconBg: 'bg-cyber-cyan/10',
  },
  amber: {
    icon: 'text-cyber-amber',
    border: 'border-cyber-amber/20',
    hover: 'hover:border-cyber-amber/50 hover:shadow-[0_0_20px_rgba(255,184,0,0.1)]',
    iconBg: 'bg-cyber-amber/10',
  },
  pink: {
    icon: 'text-cyber-pink',
    border: 'border-cyber-pink/20',
    hover: 'hover:border-cyber-pink/50 hover:shadow-[0_0_20px_rgba(255,45,120,0.1)]',
    iconBg: 'bg-cyber-pink/10',
  },
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Replace with your preferred form handler (Formspree, EmailJS, etc.)
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`)
    window.location.href = `mailto:[Your Email]?subject=${subject}&body=${body}`
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="py-28 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-cyan/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="reveal mb-16">
          <p className="section-tag mb-3">// LET'S CONNECT</p>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-cyber-cyan to-cyber-amber" />
          <p className="mt-6 text-slate-400 font-syne max-w-xl leading-relaxed">
            Whether you have an internship opportunity, a project idea, or just want to talk tech — my inbox
            is always open. I'll respond within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-4 reveal">
            {contactLinks.map(({ icon: Icon, label, value, href, color }) => {
              const c = colorConfig[color]
              return (
                <a
                  key={label}
                  href={href}
                  target={href !== '#' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className={`glass-card border ${c.border} ${c.hover} p-4 flex items-center gap-4 transition-all duration-300 hover:-translate-x-1 group block`}
                >
                  <div className={`w-11 h-11 rounded-lg ${c.iconBg} border ${c.border} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon size={18} className={c.icon} />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-slate-500 tracking-wider">{label}</p>
                    <p className="font-syne text-white text-sm font-medium">{value}</p>
                  </div>
                </a>
              )
            })}

            {/* Status */}
            <div className="glass-card border border-green-500/20 p-4 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
              <p className="text-slate-400 text-sm font-syne">
                <span className="text-green-400 font-semibold">Available</span> — Open for internships and collaborations
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className="reveal">
            <div className="glass-card border border-cyber-border p-7">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare size={16} className="text-cyber-cyan" />
                <h3 className="font-orbitron text-sm font-semibold text-white tracking-wide">Send a Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-mono text-xs text-slate-500 tracking-wider mb-2">YOUR NAME</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="[Your Full Name]"
                    className="w-full bg-cyber-darker border border-cyber-border rounded px-4 py-3 text-white placeholder-slate-600 font-syne text-sm focus:outline-none focus:border-cyber-cyan/50 focus:shadow-[0_0_10px_rgba(0,245,255,0.1)] transition-all"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs text-slate-500 tracking-wider mb-2">EMAIL ADDRESS</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full bg-cyber-darker border border-cyber-border rounded px-4 py-3 text-white placeholder-slate-600 font-syne text-sm focus:outline-none focus:border-cyber-cyan/50 focus:shadow-[0_0_10px_rgba(0,245,255,0.1)] transition-all"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs text-slate-500 tracking-wider mb-2">MESSAGE</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Hi, I'd love to discuss an opportunity with you..."
                    className="w-full bg-cyber-darker border border-cyber-border rounded px-4 py-3 text-white placeholder-slate-600 font-syne text-sm focus:outline-none focus:border-cyber-cyan/50 focus:shadow-[0_0_10px_rgba(0,245,255,0.1)] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  {sent ? '✓ Opening Email Client' : (
                    <>
                      <Send size={14} />
                      Send Message
                    </>
                  )}
                </button>

                <p className="text-slate-600 text-xs font-mono text-center mt-2">
                  * Opens your default mail app with the message pre-filled
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
