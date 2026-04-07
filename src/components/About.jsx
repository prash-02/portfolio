import React from 'react'
import { Cpu, Code2, Wifi, BookOpen } from 'lucide-react'

const highlights = [
  {
    icon: Cpu,
    title: 'Hardware & Embedded',
    desc: 'Fascinated by the intersection of hardware and software — from microcontrollers to FPGA design.',
    color: 'cyan',
  },
  {
    icon: Wifi,
    title: 'Communication Systems',
    desc: 'Deep understanding of signal processing, modulation, and wireless communication protocols.',
    color: 'amber',
  },
  {
    icon: Code2,
    title: 'Software Development',
    desc: 'Building robust full-stack applications and automation tools using modern frameworks.',
    color: 'pink',
  },
  {
    icon: BookOpen,
    title: 'Continuous Learner',
    desc: 'Actively exploring AI/ML integration with hardware systems and pursuing relevant certifications.',
    color: 'cyan',
  },
]

const colorMap = {
  cyan: {
    icon: 'text-cyber-cyan',
    border: 'border-cyber-cyan/20',
    bg: 'bg-cyber-cyan/5',
    glow: 'hover:shadow-[0_0_20px_rgba(0,245,255,0.15)]',
  },
  amber: {
    icon: 'text-cyber-amber',
    border: 'border-cyber-amber/20',
    bg: 'bg-cyber-amber/5',
    glow: 'hover:shadow-[0_0_20px_rgba(255,184,0,0.15)]',
  },
  pink: {
    icon: 'text-cyber-pink',
    border: 'border-cyber-pink/20',
    bg: 'bg-cyber-pink/5',
    glow: 'hover:shadow-[0_0_20px_rgba(255,45,120,0.15)]',
  },
}

export default function About() {
  return (
    <section id="about" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="reveal mb-16">
          <p className="section-tag mb-3">// WHO AM I</p>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-cyber-cyan to-cyber-amber" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: bio */}
          <div className="reveal space-y-6">
            {/* Terminal-style block */}
            <div className="glass-card p-6 border-gradient font-mono text-sm">
              <div className="flex gap-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-2 text-slate-500 text-xs">student.profile</span>
              </div>
              <div className="text-cyber-cyan">
                <span className="text-slate-500">const </span>
                <span className="text-white">student</span>
                <span className="text-slate-500"> = </span>
                <span>{'{'}</span>
              </div>
              <div className="pl-4 space-y-1 text-slate-300">
                <div><span className="text-cyber-amber">name</span>: <span className="text-green-400">"Prashant Kushwaha"</span>,</div>
                <div><span className="text-cyber-amber">college</span>: <span className="text-green-400">"GEC Surat"</span>,</div>
                <div><span className="text-cyber-amber">degree</span>: <span className="text-green-400">"B.E. Electronics & Communication"</span>,</div>
                <div><span className="text-cyber-amber">batch</span>: <span className="text-green-400">"2023 – 2027"</span>,</div>
                <div><span className="text-cyber-amber">status</span>: <span className="text-cyber-cyan">"Seeking Internships & Opportunities"</span>,</div>
                <div><span className="text-cyber-amber">location</span>: <span className="text-green-400">"[Surat, India]"</span>,</div>
              </div>
              <div className="text-cyber-cyan">{'}'}</div>
            </div>

            <p className="text-slate-400 leading-relaxed font-syne text-base">
              I'm a passionate Electronics and Communication Engineering student at{' '}
              <span className="text-white font-semibold">GEC Surat</span>, graduating in 2027.
              My journey sits at the crossroads of hardware design and software development — where
              circuits meet code.
            </p>

            <p className="text-slate-400 leading-relaxed font-syne text-base">
              From designing embedded systems and exploring signal processing fundamentals to building
              full-stack web applications, I thrive on solving complex, multi-disciplinary problems.
              I'm actively seeking internships and collaborative projects where I can apply and expand
              my technical toolkit.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {['Problem Solver', 'Team Player', 'Fast Learner', 'Open Source Enthusiast'].map((t) => (
                <span key={t} className="tag-pill">{t}</span>
              ))}
            </div>
          </div>

          {/* Right: highlight cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 reveal">
            {highlights.map(({ icon: Icon, title, desc, color }) => {
              const cls = colorMap[color]
              return (
                <div
                  key={title}
                  className={`glass-card p-5 border ${cls.border} ${cls.bg} ${cls.glow} transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 bg-cyber-dark border ${cls.border}`}>
                    <Icon size={20} className={cls.icon} />
                  </div>
                  <h3 className="font-orbitron text-sm font-semibold text-white mb-2">{title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-syne">{desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
