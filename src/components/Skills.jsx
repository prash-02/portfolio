import React, { useEffect, useRef, useState } from 'react'

const skillCategories = [
  {
    label: 'Programming Languages',
    color: 'cyan',
    skills: [
      { name: 'C / C++', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'JavaScript', level: 72 },
      { name: 'MATLAB', level: 65 },
      { name: 'Verilog / HDL', level: 55 },
    ],
  },
  {
    label: 'Web & Frameworks',
    color: 'amber',
    skills: [
      { name: 'React.js', level: 75 },
      { name: 'HTML / CSS', level: 88 },
      { name: 'Node.js', level: 60 },
      { name: 'Tailwind CSS', level: 78 },
    ],
  },
  {
    label: 'Hardware & Embedded',
    color: 'pink',
    skills: [
      { name: 'Embedded Systems', level: 80 },
      { name: 'Arduino / STM32', level: 78 },
      { name: 'PCB Design Basics', level: 60 },
      { name: 'IoT Systems', level: 70 },
    ],
  },
  {
    label: 'Tools & Concepts',
    color: 'cyan',
    skills: [
      { name: 'Git / GitHub', level: 82 },
      { name: 'Communication Systems', level: 75 },
      { name: 'Signal Processing', level: 68 },
      { name: 'Linux / Bash', level: 65 },
    ],
  },
]

const colorGradient = {
  cyan: 'from-cyber-cyan to-blue-400',
  amber: 'from-cyber-amber to-orange-400',
  pink: 'from-cyber-pink to-purple-400',
}

const colorLabel = {
  cyan: 'text-cyber-cyan',
  amber: 'text-cyber-amber',
  pink: 'text-cyber-pink',
}

const colorBorder = {
  cyan: 'border-cyber-cyan/20',
  amber: 'border-cyber-amber/20',
  pink: 'border-cyber-pink/20',
}

function SkillBar({ name, level, color, animate }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1.5">
        <span className="font-mono text-xs text-slate-300">{name}</span>
        <span className={`font-mono text-xs ${colorLabel[color]}`}>{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-cyber-border overflow-hidden">
        <div
          className={`skill-bar-fill bg-gradient-to-r ${colorGradient[color]}`}
          style={{ width: animate ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const [animated, setAnimated] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimated(true)
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-28 relative" ref={sectionRef}>
      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-cyan/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="reveal mb-16">
          <p className="section-tag mb-3">// WHAT I KNOW</p>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-cyber-cyan to-cyber-amber" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map(({ label, color, skills }) => (
            <div
              key={label}
              className={`glass-card p-6 border ${colorBorder[color]} reveal hover:-translate-y-1 transition-transform duration-300`}
            >
              <h3 className={`font-orbitron text-xs font-semibold tracking-widest mb-6 ${colorLabel[color]} uppercase`}>
                {label}
              </h3>
              {skills.map((skill) => (
                <SkillBar key={skill.name} {...skill} color={color} animate={animated} />
              ))}
            </div>
          ))}
        </div>

        {/* Tech badges */}
        <div className="mt-12 reveal">
          <p className="section-tag mb-5 text-center">// ALSO FAMILIAR WITH</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Raspberry Pi', 'RTOS', 'NumPy', 'Pandas', 'Proteus', 'LTspice',
              'VSCode', 'Docker', 'REST APIs', 'MQTT', 'I2C / SPI / UART',
            ].map((tech) => (
              <span key={tech} className="tag-pill cursor-default">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
