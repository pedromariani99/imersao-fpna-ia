'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

function useCountUp(target: number, decimals = 1, duration = 2000) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [value, setValue] = useState('0')

  useEffect(() => {
    if (!inView) return
    const startTime = performance.now()

    const tick = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue((eased * target).toFixed(decimals))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, target, decimals, duration])

  return { ref, value }
}

export function DataPoint() {
  const { ref, value } = useCountUp(94.3, 1, 2000)

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
        {/* Big number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span
            ref={ref}
            className="font-display text-8xl md:text-9xl text-primary leading-none inline-block"
          >
            {value}%
          </span>
        </motion.div>

        {/* Explanation */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl mx-auto mt-6"
        >
          das tarefas em Finanças têm potencial para serem automatizadas com IA — a maior entre
          todas as 22 categorias profissionais analisadas.
        </motion.p>

        {/* Source */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="font-mono text-xs text-zinc-400 mt-4"
        >
          Fonte: Anthropic Economic Index, 2025 — baseado na análise de milhões de conversas reais com IA
        </motion.p>

        {/* Quote block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-primary-lightest border-l-4 border-primary rounded-r-xl p-6 md:p-8 text-left"
        >
          <p className="text-base md:text-lg text-dark leading-relaxed italic">
            &ldquo;Os profissionais que vão se diferenciar nos próximos anos são aqueles que
            combinam conhecimento técnico em finanças com domínio de Inteligência Artificial.
            Não é sobre substituição — é sobre quem vai liderar a mudança.&rdquo;
          </p>
        </motion.div>

        {/* Radar chart — Anthropic Economic Index */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10"
        >
          <Image
            src="/anthropic-radar-chart.png"
            alt="Gráfico radar do Anthropic Economic Index mostrando que Business & Finance tem a maior cobertura teórica de IA entre 22 categorias profissionais"
            width={716}
            height={887}
            className="mx-auto rounded-xl"
            quality={100}
            priority={false}
          />
        </motion.div>
      </div>
    </section>
  )
}
