import React from 'react'
import { Award, BadgeCheck, Trophy, Star } from 'lucide-react'

const achievements = [
  // {
  //   icon: Trophy,
  //   type: 'Hackathon',
  //   title: '[Hackathon / Competition Name]',
  //   issuer: '[Organizer / Institution]',
  //   date: '[Month Year]',
  //   description: '[Describe what you built or won — e.g., 1st place, best hardware hack, top 10 finalist]',
  //   color: 'amber',
  // },
  {
    icon: BadgeCheck,
    type: 'Certification',
    title: 'Oracle certified Datascience Associate',
    issuer: 'Oracle University',
    date: 'October 2025',
    description: 'Validated skills in data science fundamentals, including data analysis, machine learning, and AI concepts using Oracle\'s platform.',
    color: 'cyan',
  },
  {
    icon: Award,
    type: 'Certification',
    title: 'CS50x: Introduction to Programming with Python',
    issuer: 'Harvard University',
    date: 'December 2024',
    description: 'Mastered fundamental programming concepts and problem-solving techniques using Python.',
    color: 'cyan',
  },
  // {
  //   icon: Star,
  //   type: 'Academic Award',
  //   title: '[Scholarship / Award Name]',
  //   issuer: '[Your College / Institution]',
  //   date: '[Year]',
  //   description: '[Describe the recognition — e.g., Department merit scholarship, Dean\'s List, top 5% of batch]',
  //   color: 'pink',
  // },
]

const colorConfig = {
  cyan: {
    icon: 'text-cyber-cyan',
    border: 'border-cyber-cyan/20',
    badge: 'bg-cyber-cyan/10 text-cyber-cyan border-cyber-cyan/20',
    glow: 'hover:shadow-[0_0_25px_rgba(0,245,255,0.12)]',
    iconBg: 'bg-cyber-cyan/10',
  },
  amber: {
    icon: 'text-cyber-amber',
    border: 'border-cyber-amber/20',
    badge: 'bg-cyber-amber/10 text-cyber-amber border-cyber-amber/20',
    glow: 'hover:shadow-[0_0_25px_rgba(255,184,0,0.12)]',
    iconBg: 'bg-cyber-amber/10',
  },
  pink: {
    icon: 'text-cyber-pink',
    border: 'border-cyber-pink/20',
    badge: 'bg-cyber-pink/10 text-cyber-pink border-cyber-pink/20',
    glow: 'hover:shadow-[0_0_25px_rgba(255,45,120,0.12)]',
    iconBg: 'bg-cyber-pink/10',
  },
}

export default function Achievements() {
  return (
    <section id="achievements" className="py-28 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-pink/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="reveal mb-16">
          <p className="section-tag mb-3">// RECOGNITION & LEARNING</p>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white mb-6">
            Achievements <span className="gradient-text">&</span> Certs
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-cyber-cyan to-cyber-amber" />
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {achievements.map((item, idx) => {
            const c = colorConfig[item.color]
            const Icon = item.icon
            return (
              <div
                key={idx}
                className={`glass-card border ${c.border} ${c.glow} p-6 flex gap-4 hover:-translate-y-1 transition-all duration-300 reveal`}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${c.iconBg} border ${c.border}`}>
                  <Icon size={22} className={c.icon} />
                </div>

                {/* Content */}
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className={`text-xs font-mono px-2 py-0.5 rounded-full border ${c.badge}`}>
                      {item.type}
                    </span>
                    <span className="text-xs font-mono text-slate-600">{item.date}</span>
                  </div>
                  <h3 className="font-orbitron text-sm font-bold text-white mb-0.5">{item.title}</h3>
                  <p className={`font-mono text-xs mb-2 ${c.icon}`}>{item.issuer}</p>
                  <p className="text-slate-400 text-sm font-syne leading-relaxed">{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
