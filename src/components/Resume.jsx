import React from 'react'
import { Download, FileText, Eye } from 'lucide-react'

export default function Resume() {
  return (
    <section id="resume" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="reveal glass-card border border-cyber-cyan/20 p-10 md:p-14 text-center relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5 circuit-bg pointer-events-none" />

          {/* Decorative corners */}
          <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-cyber-cyan/40" />
          <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-cyber-cyan/40" />
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-cyber-amber/40" />
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-cyber-amber/40" />

          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-cyber-cyan/30 bg-cyber-cyan/5 mb-6 mx-auto">
              <FileText size={28} className="text-cyber-cyan" />
            </div>

            <p className="section-tag mb-3">// MY RESUME</p>
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-white mb-4">
              Download My <span className="gradient-text">CV</span>
            </h2>
            <p className="text-slate-400 font-syne max-w-xl mx-auto mb-8 leading-relaxed">
              Get a comprehensive overview of my academic background, technical skills, projects,
              and achievements. Updated regularly with the latest milestones.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="[Your Resume Link]"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                <Download size={16} />
                Download PDF
              </a>
              <a
                href="[Your Resume Link]"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2"
              >
                <Eye size={16} />
                View Online
              </a>
            </div>

            <p className="mt-6 text-slate-600 font-mono text-xs">
              Last updated: [Month Year] · [Your Name]_Resume.pdf
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
