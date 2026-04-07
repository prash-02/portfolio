import React from 'react'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

const experiences = [
  {
    role: '[Internship Role / Title]',
    company: '[Company Name]',
    duration: '[Month Year] – [Month Year]',
    location: '[City, State / Remote]',
    type: 'Internship',
    color: 'cyan',
    bullets: [
      '[Describe your key responsibility or project during the internship]',
      '[Another impactful task or skill demonstrated here]',
      '[Quantifiable achievement, e.g., improved X by Y%, or built Z feature]',
    ],
    tags: ['[Skill 1]', '[Skill 2]', '[Tool]'],
  },
  {
    role: '[Research Assistant / Volunteer / Club Role]',
    company: '[Organization / Lab / Club Name]',
    duration: '[Month Year] – Present',
    location: '[Your College], [City]',
    type: 'Research / Club',
    color: 'amber',
    bullets: [
      '[Describe your contribution to the research or club activity]',
      '[Another responsibility you held or initiative you led]',
      '[Technologies or methods used in this role]',
    ],
    tags: ['[Skill 1]', '[Skill 2]', '[Domain]'],
  },
]

const colorConfig = {
  cyan: {
    dot: 'bg-cyber-cyan shadow-[0_0_8px_rgba(0,245,255,0.8)]',
    line: 'border-cyber-cyan/20',
    badge: 'bg-cyber-cyan/10 text-cyber-cyan border-cyber-cyan/20',
    tag: 'bg-cyber-cyan/5 text-cyber-cyan/80 border-cyber-cyan/15',
    accent: 'text-cyber-cyan',
  },
  amber: {
    dot: 'bg-cyber-amber shadow-[0_0_8px_rgba(255,184,0,0.8)]',
    line: 'border-cyber-amber/20',
    badge: 'bg-cyber-amber/10 text-cyber-amber border-cyber-amber/20',
    tag: 'bg-cyber-amber/5 text-cyber-amber/80 border-cyber-amber/15',
    accent: 'text-cyber-amber',
  },
}

export default function Experience() {
  return (
    <section id="experience" className="py-28 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-cyan/20 to-transparent" />

      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <div className="reveal mb-16">
          <p className="section-tag mb-3">// WHERE I'VE WORKED</p>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white mb-6">
            Experience <span className="gradient-text">&</span> Roles
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-cyber-cyan to-cyber-amber" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-cyber-cyan/40 via-cyber-amber/20 to-transparent hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp, idx) => {
              const c = colorConfig[exp.color]
              return (
                <div key={idx} className="reveal flex gap-8 md:ml-0">
                  {/* Timeline dot */}
                  <div className="hidden md:flex flex-col items-center relative">
                    <div className={`w-10 h-10 rounded-full border ${c.line} flex items-center justify-center bg-cyber-dark z-10`}>
                      <div className={`w-3 h-3 rounded-full ${c.dot}`} />
                    </div>
                  </div>

                  {/* Card */}
                  <div className={`glass-card border ${c.line} p-6 flex-1 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-all duration-300`}>
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Briefcase size={14} className={c.accent} />
                          <span className={`font-mono text-xs ${c.accent} tracking-wider`}>{exp.type}</span>
                        </div>
                        <h3 className="font-orbitron text-lg font-bold text-white">{exp.role}</h3>
                        <p className="font-syne text-slate-300 text-sm mt-0.5">{exp.company}</p>
                      </div>
                      <div className="text-right text-xs text-slate-500 font-mono space-y-1">
                        <div className="flex items-center gap-1 justify-end">
                          <Calendar size={11} />
                          {exp.duration}
                        </div>
                        <div className="flex items-center gap-1 justify-end">
                          <MapPin size={11} />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    {/* Bullets */}
                    <ul className="space-y-2 mb-4">
                      {exp.bullets.map((b, i) => (
                        <li key={i} className="flex gap-3 text-sm text-slate-400 font-syne">
                          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${c.dot} flex-shrink-0`} />
                          {b}
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-3 border-t border-cyber-border">
                      {exp.tags.map((t) => (
                        <span key={t} className={`text-xs px-2.5 py-1 rounded-full border font-mono ${c.tag}`}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Open to work notice */}
        <div className="mt-12 reveal glass-card border border-cyber-cyan/20 p-5 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse flex-shrink-0 shadow-[0_0_10px_rgba(74,222,128,0.8)]" />
          <p className="text-slate-300 font-syne text-sm">
            <span className="text-white font-semibold">Open to Opportunities —</span> Actively seeking
            summer internships and part-time roles in embedded systems, communication systems, or full-stack
            engineering. Let's connect!
          </p>
          <a
            href="mailto:[Your Email]"
            className="btn-primary whitespace-nowrap text-xs flex-shrink-0"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}
