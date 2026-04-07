import React, { useState } from 'react'
import { Github, ExternalLink, ArrowRight } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Smart Anti Theft System',
    subtitle: 'Embedded Systems / IoT',
    description:
      'A smart IoT-based system that leverages microcontrollers and wireless communication protocols to monitor and control hardware components in real time. Features sensor integration, MQTT messaging, and a real-time dashboard.',
    tags: ['C/C++', 'Arduino', 'MQTT', 'IoT', 'Python'],
    github: 'https://github.com/[Your GitHub]/[project-1]',
    demo: '#',
    color: 'cyan',
    number: '01',
  },
  {
    id: 2,
    title: 'Digital Signal Processing Project',
    subtitle: 'Signal Processing / MATLAB',
    description:
      'Implementation and performance analysis of digital communication schemes including BPSK, QPSK, and QAM under AWGN and Rayleigh fading channels. Includes BER vs SNR simulation with comparative results.',
    tags: ['MATLAB', 'Signal Processing', 'DSP', 'Communication Systems'],
    github: 'https://github.com/[Your GitHub]/[project-2]',
    demo: '#',
    color: 'amber',
    number: '02',
  },
  {
    id: 3,
    title: 'Full-Stack Web Application',
    subtitle: 'Full-Stack Web Application',
    description:
      'A responsive web application built with React and Node.js, featuring real-time data visualization, user authentication, and integration with hardware sensor APIs. Deployed and optimized for production.',
    tags: ['React', 'Node.js', 'REST API', 'Tailwind CSS', 'MongoDB'],
    github: 'https://github.com/[Your GitHub]/[project-3]',
    demo: '#',
    color: 'pink',
    number: '03',
  },
]

const colorConfig = {
  cyan: {
    accent: 'text-cyber-cyan',
    border: 'border-cyber-cyan/20',
    tag: 'bg-cyber-cyan/10 text-cyber-cyan border-cyber-cyan/20',
    number: 'text-cyber-cyan/20',
    hover: 'hover:border-cyber-cyan/50 hover:shadow-[0_0_30px_rgba(0,245,255,0.1)]',
    line: 'bg-cyber-cyan',
  },
  amber: {
    accent: 'text-cyber-amber',
    border: 'border-cyber-amber/20',
    tag: 'bg-cyber-amber/10 text-cyber-amber border-cyber-amber/20',
    number: 'text-cyber-amber/20',
    hover: 'hover:border-cyber-amber/50 hover:shadow-[0_0_30px_rgba(255,184,0,0.1)]',
    line: 'bg-cyber-amber',
  },
  pink: {
    accent: 'text-cyber-pink',
    border: 'border-cyber-pink/20',
    tag: 'bg-cyber-pink/10 text-cyber-pink border-cyber-pink/20',
    number: 'text-cyber-pink/20',
    hover: 'hover:border-cyber-pink/50 hover:shadow-[0_0_30px_rgba(255,45,120,0.1)]',
    line: 'bg-cyber-pink',
  },
}

function ProjectCard({ project }) {
  const { title, subtitle, description, tags, github, demo, color, number } = project
  const c = colorConfig[color]

  return (
    <div
      className={`glass-card border ${c.border} ${c.hover} transition-all duration-400 hover:-translate-y-2 group relative overflow-hidden`}
    >
      {/* Top accent line */}
      <div className={`absolute top-0 left-0 right-0 h-0.5 ${c.line} opacity-50 group-hover:opacity-100 transition-opacity`} />

      <div className="p-7">
        {/* Number + subtitle */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <span className={`font-mono text-xs tracking-widest ${c.accent} mb-1 block`}>
              {subtitle}
            </span>
            <h3 className="font-orbitron text-xl font-bold text-white group-hover:text-inherit transition-colors">
              {title}
            </h3>
          </div>
          <span className={`font-orbitron text-6xl font-black ${c.number} leading-none select-none group-hover:scale-110 transition-transform`}>
            {number}
          </span>
        </div>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-5 font-syne">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span key={tag} className={`text-xs px-2.5 py-1 rounded-full border font-mono ${c.tag}`}>
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 border-t border-cyber-border pt-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 text-xs font-mono ${c.accent} hover:opacity-70 transition-opacity`}
          >
            <Github size={14} />
            Source Code
          </a>
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-white transition-colors ml-auto"
          >
            <ExternalLink size={14} />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-amber/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="reveal mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="section-tag mb-3">// WHAT I'VE BUILT</p>
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-cyber-cyan to-cyber-amber" />
          </div>
          <a
            href="https://github.com/[Your GitHub]"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-slate-400 hover:text-cyber-cyan transition-colors font-mono group"
          >
            View all on GitHub
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="reveal">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
