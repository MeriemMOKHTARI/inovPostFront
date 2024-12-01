import React from 'react';
import { motion } from "framer-motion"

export function OnboardingSlide({ icon: Icon, title, description, isActive }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: isActive ? 1 : 0,
        y: isActive ? 0 : 20,
        scale: isActive ? 1 : 0.95
      }}
      transition={{ duration: 0.5 }}
      className={`absolute inset-0 flex flex-col items-center justify-center px-12 ${
        isActive ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <div className="text-center">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: isActive ? 1 : 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
          className="mb-8 mx-auto"
        >
          <div className="relative inline-flex h-32 w-32 items-center justify-center rounded-full bg-yellow-400/90 shadow-lg">
            <Icon className="h-16 w-16 text-[#003DA5]" />
            <div className="absolute inset-0 rounded-full bg-yellow-400/20 animate-ping" />
          </div>
        </motion.div>
        <motion.h2 
          initial={{ y: 20 }}
          animate={{ y: isActive ? 0 : 20 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-6 text-5xl font-bold text-white"
        >
          {title}
        </motion.h2>
        <motion.p 
          initial={{ y: 20 }}
          animate={{ y: isActive ? 0 : 20 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mx-auto max-w-lg text-xl leading-relaxed text-blue-100"
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  )
}
