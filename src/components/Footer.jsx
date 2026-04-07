import React from 'react'
import { Zap, Github, Linkedin, Mail, Heart } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const handleClick = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-cyber-border pt-14 pb-8 px-6 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-cyber-cyan/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 border border-cyber-cyan/40 rounded flex items-center justify-center glow-box-cyan">
                <Zap size={16} className="text-cyber-cyan" />
              </div>
              <span className="font-orbitron font-bold text-white tracking-wider">
                Prashant Kushwaha<span className="text-cyber-cyan">.</span>
              </span>
            </div>
            <p className="text-slate-500 font-syne text-sm leading-relaxed max-w-xs">
              ECE Engineering Student · Class of 2027. Building hardware-software experiences that matter.
            </p>
            <div className="flex gap-3 mt-5">
              {[
                { icon: Github, href: 'https://github.com/prash-02', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com/in/kushwaha7757', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:kushwaha7757@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 border border-cyber-border rounded flex items-center justify-center text-slate-500 hover:text-cyber-cyan hover:border-cyber-cyan/50 hover:shadow-[0_0_10px_rgba(0,245,255,0.3)] transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-orbitron text-xs text-cyber-cyan tracking-widest uppercase mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="text-slate-500 hover:text-cyber-cyan font-syne text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-cyber-cyan/40 group-hover:bg-cyber-cyan transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Status */}
          <div>
            <h3 className="font-orbitron text-xs text-cyber-amber tracking-widest uppercase mb-5">
              Status
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_6px_rgba(74,222,128,0.8)]" />
                <span className="text-slate-400 font-mono text-xs">Open to Internships</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-pulse" />
                <span className="text-slate-400 font-mono text-xs">Available for Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyber-amber" />
                <span className="text-slate-400 font-mono text-xs">Based in Surat, India</span>
              </div>
              <div className="mt-5 pt-4 border-t border-cyber-border">
                <p className="font-mono text-xs text-slate-600">Current CGPA</p>
                <p className="font-orbitron text-lg font-bold text-white mt-1">
                  8.3 <span className="text-cyber-cyan text-sm">/ 10.0</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-cyber-border to-transparent mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-mono text-xs text-slate-600">
            © {new Date().getFullYear()} [Prashant Kushwaha] · All rights reserved.
          </p>
          <p className="font-mono text-xs text-slate-600 flex items-center gap-1.5">
            Built with <Heart size={11} className="text-cyber-pink fill-cyber-pink" /> using React · Vite · Three.js · Tailwind
          </p>
          <p className="font-mono text-xs text-cyber-cyan/40">
            ECE · [GEC Surat] · 2027
          </p>
        </div>
      </div>
    </footer>
  )
}
