'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'

const terminalSteps = [
  { num: '01', text: 'Documentos organizados', done: true },
  { num: '02', text: 'Base de dados gerada', done: true },
  { num: '03', text: 'Modelo financeiro construído', done: true },
  { num: '04', text: 'Premissas validadas', done: true },
  { num: '05', text: 'Projeções calculadas', done: true },
  { num: '06', text: 'Dashboard publicado', done: true },
  { num: '07', text: 'Apresentação gerada', done: false },
]

function FinancialTerminal() {
  const [visibleLines, setVisibleLines] = useState<Set<number>>(new Set())
  const [showStats, setShowStats] = useState(false)

  useEffect(() => {
    const timers: NodeJS.Timeout[] = []
    terminalSteps.forEach((_, i) => {
      timers.push(
        setTimeout(() => {
          setVisibleLines((prev) => new Set(Array.from(prev).concat(i)))
        }, 800 + i * 350)
      )
    })
    timers.push(setTimeout(() => setShowStats(true), 800 + terminalSteps.length * 350 + 300))
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative rounded-2xl border border-white/10 bg-dark-lighter/80 backdrop-blur-sm shadow-2xl ring-1 ring-white/5 overflow-hidden"
    >
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.08]">
        <div className="w-3 h-3 rounded-full bg-red-500/60" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
        <div className="w-3 h-3 rounded-full bg-green-500/60" />
        <span className="ml-3 font-mono text-xs text-zinc-600 tracking-wider">
          case-completo.sh
        </span>
      </div>

      {/* Terminal content */}
      <div className="p-5 md:p-6 space-y-1.5 min-h-[280px]">
        {terminalSteps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={
              visibleLines.has(i)
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: -8 }
            }
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="font-mono text-sm leading-relaxed flex items-center gap-3"
          >
            <span className="text-primary-light w-5 text-right">{step.num}</span>
            <span className="text-zinc-300 flex-1">
              {step.text}
              <span className="text-zinc-600 mx-1">
                {' '}{'·'.repeat(Math.max(1, 32 - step.text.length))}{' '}
              </span>
            </span>
            {step.done ? (
              <span className="text-green-400">&#10003;</span>
            ) : (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 1, ease: 'steps(1)' }}
                className="text-accent"
              >
                &#9679;
              </motion.span>
            )}
          </motion.div>
        ))}

        {/* Stats */}
        {showStats && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="pt-4 space-y-1"
          >
            <div className="font-mono text-sm text-accent">
              &#9656; Tempo total: 2h47min
            </div>
            <div className="font-mono text-sm text-zinc-500">
              &#9656; Método tradicional: ~5 dias úteis
            </div>
          </motion.div>
        )}
      </div>

      {/* Fade bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-dark-lighter/90 to-transparent pointer-events-none" />
    </motion.div>
  )
}

export function Hero() {
  const handleCTA = () => {
    const el = document.querySelector('#inscricao')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const handlePrograma = () => {
    const el = document.querySelector('#programa')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen bg-dark flex items-center grain-overlay overflow-hidden">
      {/* Background gradients */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, hsla(220, 100%, 33%, .10) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, hsla(220, 100%, 25%, .07) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, hsla(220, 100%, 30%, .04) 0%, transparent 60%)',
          }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            <AnimatedGroup preset="blur-slide" stagger={0.12} delay={0.1}>
              {/* Badge */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/5 px-4 py-1.5">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  <span className="font-mono text-xs text-zinc-400 tracking-widest uppercase">
                    Imersão ao vivo · Sábado · 50 vagas
                  </span>
                </div>
              </div>

              {/* Headline */}
              <div>
                <h1 className="font-display text-5xl md:text-6xl xl:text-[5.25rem] leading-[1.05] text-white text-balance mt-6">
                  Finanças é a área mais exposta à IA.{' '}
                  <span className="text-primary-light">Você está preparado?</span>
                </h1>
              </div>

              {/* Subheadline */}
              <div>
                <p className="text-lg text-zinc-400 text-balance max-w-xl leading-relaxed mt-5">
                  Uma imersão de um dia inteiro onde você vai assistir, ao vivo, um case real de
                  como aplicar Inteligência Artificial à finanças, do básico ao avançado.
                  Da organização dos documentos à apresentação final.
                </p>
              </div>

              {/* CTAs */}
              <div>
                <div className="flex flex-col sm:flex-row gap-3 mt-8">
                  <div className="rounded-[14px] border border-white/10 bg-white/5 p-0.5">
                    <Button
                      variant="accent"
                      size="lg"
                      onClick={handleCTA}
                      className="w-full sm:w-auto"
                    >
                      Garantir minha vaga — R$&nbsp;149
                    </Button>
                  </div>
                  <Button
                    variant="ghost-white"
                    size="lg"
                    onClick={handlePrograma}
                    className="gap-2"
                  >
                    <ArrowDown size={16} />
                    Ver o programa
                  </Button>
                </div>
              </div>

              {/* Microcopy */}
              <div>
                <p className="font-mono text-xs text-zinc-600 tracking-wider mt-5 uppercase">
                  100% prático · Replay incluso · Case real do início ao fim
                </p>
              </div>
            </AnimatedGroup>
          </div>

          {/* Right: Terminal */}
          <div className="hidden lg:block">
            <FinancialTerminal />
          </div>
        </div>

        {/* Mobile terminal */}
        <div className="lg:hidden mt-12">
          <FinancialTerminal />
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  )
}
