import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            onComplete()
          }, 800) // small delay before hiding
          return 100
        }
        return prev + 1
      })
    }, 28) // speed (lower = faster)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 flex flex-col justify-center items-center bg-gradient-to-b from-white to-cyan-400 z-[9999]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
    {/* Logo */}
<div className="mb-8 sm:mb-10 md:mb-12 flex justify-center">
  <img
    src="/varad vidya pre.png"
    alt="logo"
    className="
      w-36 h-36
      sm:w-36 sm:h-36
      md:w-44 md:h-44
      lg:w-52 lg:h-52
      rounded-full
      object-contain
    "
  />
</div>

{/* Progress Line */}
<div className="
  w-5/6
  sm:w-3/4
  md:w-2/3
  h-2
  sm:h-3
  bg-white/30
  rounded-full
  overflow-hidden
">
  <motion.div
    className="h-full bg-cyan-500"
    style={{ width: `${progress}%` }}
  />
</div>

{/* Percentage */}
<div className="
  mt-6
  boldonse
  font-boldonse
  text-cyan-700
  text-5xl
  sm:text-5xl
  md:text-6xl
  lg:text-7xl
">
  {progress}
</div>

    </motion.div>
  )
}

export default Preloader
