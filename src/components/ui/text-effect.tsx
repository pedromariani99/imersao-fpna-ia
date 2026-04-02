'use client'
import { motion, type Variants } from 'framer-motion'

type TextPreset = 'fade' | 'blur' | 'slide'
type TextPer = 'word' | 'char' | 'line'

interface PresetVariant {
  hidden: object
  visible: object
}

const wordVariants: Record<TextPreset, PresetVariant> = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } },
  },
  blur: {
    hidden: { opacity: 0, filter: 'blur(8px)', y: 8 },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  },
  slide: {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
    },
  },
}

interface TextEffectProps {
  children: string
  className?: string
  preset?: TextPreset
  per?: TextPer
  delay?: number
  stagger?: number
  animate?: boolean
}

export function TextEffect({
  children,
  className,
  preset = 'blur',
  per = 'word',
  delay = 0,
  stagger,
  animate = true,
}: TextEffectProps) {
  const tokens =
    per === 'word'
      ? children.split(' ')
      : per === 'char'
        ? children.split('')
        : children.split('\n')

  const defaultStagger = per === 'char' ? 0.03 : 0.07

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger ?? defaultStagger,
        delayChildren: delay,
      },
    },
  }

  const vars = wordVariants[preset]
  const itemVariants: Variants = {
    hidden: vars.hidden as Variants['hidden'],
    visible: vars.visible as Variants['visible'],
  }

  return (
    <motion.span
      className={className}
      initial={animate ? 'hidden' : 'visible'}
      animate="visible"
      variants={containerVariants}
    >
      {tokens.map((token, i) => (
        <motion.span
          key={i}
          className="inline-block"
          variants={itemVariants}
          style={{ whiteSpace: per === 'char' ? 'pre' : undefined }}
        >
          {token}
          {per === 'word' && i < tokens.length - 1 ? '\u00A0' : ''}
        </motion.span>
      ))}
    </motion.span>
  )
}
