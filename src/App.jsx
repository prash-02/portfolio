import React, { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Achievements from './components/Achievements'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const cursorRef = useRef(null)
  const cursorRingRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const ring = cursorRingRef.current
    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0

    const moveCursor = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (cursor) {
        cursor.style.left = mouseX + 'px'
        cursor.style.top = mouseY + 'px'
      }
    }

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      if (ring) {
        ring.style.left = ringX + 'px'
        ring.style.top = ringY + 'px'
      }
      requestAnimationFrame(animateRing)
    }

    document.addEventListener('mousemove', moveCursor)
    animateRing()

    // Scroll reveal
    const revealElements = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )
    revealElements.forEach((el) => observer.observe(el))

    return () => {
      document.removeEventListener('mousemove', moveCursor)
      observer.disconnect()
    }
  }, [])

  return (
    <div className="relative bg-cyber-dark min-h-screen overflow-x-hidden">
      {/* Custom cursor */}
      <div ref={cursorRef} className="cursor hidden md:block" />
      <div ref={cursorRingRef} className="cursor-ring hidden md:block" />

      {/* Global circuit grid background */}
      <div className="fixed inset-0 circuit-bg pointer-events-none opacity-40" />

      {/* Ambient glow blobs */}
      <div className="fixed top-[-20vh] left-[-10vw] w-[60vw] h-[60vw] rounded-full opacity-[0.04] bg-cyber-cyan blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-20vh] right-[-10vw] w-[50vw] h-[50vw] rounded-full opacity-[0.04] bg-cyber-amber blur-[120px] pointer-events-none" />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
