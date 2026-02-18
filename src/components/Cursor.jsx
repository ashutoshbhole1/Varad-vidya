import { useEffect, useState } from "react"
import { motion, useSpring } from "framer-motion"

const Cursor = () => {
  const [isDesktop, setIsDesktop] = useState(false)

  const cursorX = useSpring(0, { stiffness: 150, damping: 25 })
  const cursorY = useSpring(0, { stiffness: 150, damping: 25 })

  useEffect(() => {
    // Detect if device has fine pointer (mouse)
    const mediaQuery = window.matchMedia("(pointer: fine)")
    setIsDesktop(mediaQuery.matches)

    const handleChange = () => setIsDesktop(mediaQuery.matches)
    mediaQuery.addEventListener("change", handleChange)

    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  useEffect(() => {
    if (!isDesktop) return

    document.documentElement.style.cursor = "none"

    const moveCursor = (e) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    window.addEventListener("mousemove", moveCursor)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      document.documentElement.style.cursor = "auto"
    }
  }, [isDesktop, cursorX, cursorY])

  // Don't render on mobile
  if (!isDesktop) return null

  return (
    <motion.div
      style={{
        position: "fixed",
        left: cursorX,
        top: cursorY,
        translateX: "-50%",
        translateY: "-50%",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    >
      <img
        src="/cursor-3d.png"
        alt="cursor"
        style={{
          width: "28px",
          height: "28px",
          objectFit: "contain",
        }}
      />
    </motion.div>
  )
}

export default Cursor
