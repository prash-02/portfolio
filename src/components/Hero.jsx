import React, { useEffect, useRef, useState } from 'react'
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'
import Scene3D from './Scene3D'

const TAGLINE = "Building innovative hardware-software experiences with a focus on electronics, embedded systems, and modern web technology."

function TypewriterText({ text, delay = 50 }) {
  const [displayed, setDisplayed] = useState('')
  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i <= text.length) {
        setDisplayed(text.slice(0, i))
        i++
      } else {
        clearInterval(timer)
      }
    }, delay)
    return () => clearInterval(timer)
  }, [text, delay])
  return (
    <span>
      {displayed}
      <span className="animate-pulse text-cyber-cyan">|</span>
    </span>
  )
}

export default function Hero() {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D Canvas */}
      <div className="absolute inset-0 z-0">
        <Scene3D />
      </div>

      {/* Radial fade overlay */}
      <div className="absolute inset-0 z-10 bg-radial-fade pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 0%, #030711 75%)'
        }}
      />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center pt-24">
        {/* Text side */}
        <div className="order-2 lg:order-1">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-cyber-cyan/20 bg-cyber-cyan/5">
            <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-pulse" />
            <span className="font-mono text-xs text-cyber-cyan tracking-widest">
              ECE STUDENT · CLASS OF 2027
            </span>
          </div>

          {/* Name */}
          <h1 className="font-orbitron text-5xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight">
            <span className="text-white">Hi, I'm</span>
            <br />
            <span className="gradient-text glow-cyan">Prashant Kushwaha</span>
          </h1>

          {/* Typewriter tagline */}
          <p className="font-syne text-lg text-slate-400 mb-8 max-w-xl leading-relaxed min-h-[80px]">
            <TypewriterText text={TAGLINE} delay={28} />
          </p>

          {/* Stat row */}
          <div className="flex gap-8 mb-10">
            {[
              { value: '3+', label: 'Projects' },
              { value: '2027', label: 'Graduation' },
              { value: '10+', label: 'Skills' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-orbitron text-2xl font-bold text-cyber-cyan">{stat.value}</div>
                <div className="font-mono text-xs text-slate-500 tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-10">
            <button
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              View Projects
            </button>
            <a href="[Your Resume Link]" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Download CV
            </a>
          </div>

          {/* Social links */}
          <div className="flex gap-4">
            {[
              { icon: Github, label: 'GitHub', href: 'https://github.com/[Your GitHub]' },
              { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/[Your LinkedIn]' },
              { icon: Mail, label: 'Email', href: 'mailto:[Your Email]' },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 border border-cyber-border rounded flex items-center justify-center text-slate-400 hover:text-cyber-cyan hover:border-cyber-cyan hover:shadow-[0_0_12px_rgba(0,245,255,0.4)] transition-all duration-300"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* 3D canvas placeholder on desktop — the canvas fills the whole bg */}
        <div className="order-1 lg:order-2 hidden lg:block h-[500px]" />
      </div>

      {/* Scroll cue */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-slate-500 hover:text-cyber-cyan transition-colors group"
      >
        <span className="font-mono text-xs tracking-widest">SCROLL</span>
        <ChevronDown size={18} className="animate-bounce" />
      </button>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyber-dark to-transparent z-10 pointer-events-none" />
    </section>
  )
}
