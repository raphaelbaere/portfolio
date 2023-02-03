import React from 'react'
import { motion, useScroll } from "framer-motion";
import '../styles/Hero.css'


function ScrollBar() {
    const { scrollYProgress } = useScroll();
  return (
    <motion.div
    className="progress-bar"
    style={{ scaleX: scrollYProgress }}
  />
  )
}

export default ScrollBar