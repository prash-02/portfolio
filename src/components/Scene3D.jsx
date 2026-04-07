import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function Scene3D() {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, mount.clientWidth / mount.clientHeight, 0.1, 100)
    camera.position.set(0, 0, 5)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    // Mouse tracking
    const mouse = new THREE.Vector2()
    const targetRotation = new THREE.Vector2()
    const onMouseMove = (e) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1
      targetRotation.x = mouse.y * 0.3
      targetRotation.y = mouse.x * 0.5
    }
    window.addEventListener('mousemove', onMouseMove)

    // ── Core orb group ──────────────────────────────────────────
    const group = new THREE.Group()
    scene.add(group)

    // Inner glowing sphere
    const sphereGeo = new THREE.SphereGeometry(1, 64, 64)
    const sphereMat = new THREE.MeshPhongMaterial({
      color: 0x00f5ff,
      emissive: 0x003344,
      transparent: true,
      opacity: 0.15,
      wireframe: false,
    })
    const sphere = new THREE.Mesh(sphereGeo, sphereMat)
    group.add(sphere)

    // Wireframe shell
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x00f5ff,
      wireframe: true,
      transparent: true,
      opacity: 0.08,
    })
    const wireShell = new THREE.Mesh(new THREE.SphereGeometry(1.02, 24, 24), wireMat)
    group.add(wireShell)

    // ── Rings ───────────────────────────────────────────────────
    const createRing = (radius, tube, color, rotX, rotZ, opacity = 0.6) => {
      const geo = new THREE.TorusGeometry(radius, tube, 16, 120)
      const mat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity })
      const ring = new THREE.Mesh(geo, mat)
      ring.rotation.x = rotX
      ring.rotation.z = rotZ
      group.add(ring)
      return ring
    }

    const ring1 = createRing(1.6, 0.006, 0x00f5ff, Math.PI / 2, 0, 0.8)
    const ring2 = createRing(1.8, 0.004, 0xffb800, Math.PI / 4, Math.PI / 6, 0.5)
    const ring3 = createRing(2.0, 0.003, 0xff2d78, -Math.PI / 5, Math.PI / 3, 0.4)
    const ring4 = createRing(2.2, 0.002, 0x00f5ff, Math.PI / 7, -Math.PI / 4, 0.25)

    // ── Circuit nodes (small glowing spheres on ring1) ──────────
    const nodeMat = new THREE.MeshBasicMaterial({ color: 0x00f5ff })
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2
      const node = new THREE.Mesh(new THREE.SphereGeometry(0.04, 8, 8), nodeMat)
      node.position.set(Math.cos(angle) * 1.6, Math.sin(angle) * 1.6, 0)
      node.rotation.x = Math.PI / 2
      group.add(node)
    }

    // ── Floating particles ───────────────────────────────────────
    const particleCount = 180
    const positions = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = 2.5 + Math.random() * 1.5
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = r * Math.cos(phi)
    }
    const particleGeo = new THREE.BufferGeometry()
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const particleMat = new THREE.PointsMaterial({
      color: 0x00f5ff,
      size: 0.025,
      transparent: true,
      opacity: 0.6,
    })
    const particles = new THREE.Points(particleGeo, particleMat)
    group.add(particles)

    // ── Lights ───────────────────────────────────────────────────
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3)
    scene.add(ambientLight)

    const pointLight1 = new THREE.PointLight(0x00f5ff, 3, 20)
    pointLight1.position.set(3, 3, 3)
    scene.add(pointLight1)

    const pointLight2 = new THREE.PointLight(0xffb800, 2, 20)
    pointLight2.position.set(-3, -2, 2)
    scene.add(pointLight2)

    // ── Animation loop ───────────────────────────────────────────
    let frameId
    const clock = new THREE.Clock()
    const animate = () => {
      frameId = requestAnimationFrame(animate)
      const elapsed = clock.getElapsedTime()

      // Smooth mouse follow
      group.rotation.x += (targetRotation.x - group.rotation.x) * 0.05
      group.rotation.y += (targetRotation.y - group.rotation.y) * 0.05

      // Auto-rotate rings
      ring1.rotation.y = elapsed * 0.4
      ring2.rotation.x = elapsed * 0.3
      ring3.rotation.z = elapsed * 0.5
      ring4.rotation.y = -elapsed * 0.2

      // Orb slow spin
      sphere.rotation.y = elapsed * 0.15
      wireShell.rotation.y = -elapsed * 0.1

      // Particle drift
      particles.rotation.y = elapsed * 0.05

      // Light pulsing
      pointLight1.intensity = 2.5 + Math.sin(elapsed * 1.5) * 0.8
      pointLight2.intensity = 1.5 + Math.cos(elapsed * 1.2) * 0.5

      renderer.render(scene, camera)
    }
    animate()

    // ── Resize handler ────────────────────────────────────────────
    const onResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mount.clientWidth, mount.clientHeight)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={mountRef} className="w-full h-full" />
}
