'use client'
import { motion, type Variants } from 'framer-motion'
import React from 'react'

type AnimationPreset = 'fade' | 'blur-slide' | 'scale' | 'fade-slide' | 'slide-up'

const presets: Record<AnimationPreset, { hidden: Variants['hidden']; visible: Variants['visible'] }> = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  },
  'blur-slide': {
    hidden: { opacity: 0, filter: 'blur(10px)', y: 16 },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.92 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  },
  'fade-slide': {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  },
  'slide-up': {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  },
}

interface AnimatedGroupProps {
  children: React.ReactNode
  className?: string
  preset?: AnimationPreset
  delay?: number
  stagger?: number
  viewport?: { once?: boolean; margin?: string }
}

export function AnimatedGroup({
  children,
  className,
  preset = 'fade-slide',
  delay = 0,
  stagger = 0.1,
  viewport = { once: true, margin: '-80px' },
}: AnimatedGroupProps) {
  const animation = presets[preset]

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: animation.hidden,
    visible: animation.visible,
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={containerVariants}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}
