'use client'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

const inclusions = [
  '7 horas de imersão ao vivo',
  'Case real completo do início ao fim',
  'Replay por 90 dias',
  'Templates e frameworks de prompts',
  'Grupo exclusivo + certificado',
]

export function Pricing() {
  const handleCTA = () => {
    window.open('https://invoice.infinitepay.io/pedro-henrique-61n/7a05mFps2H', '_blank')
  }

  return (
    <section id="investimento" className="bg-dark py-24 md:py-32 grain-overlay">
      <div className="relative max-w-2xl mx-auto px-6 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs text-zinc-600 uppercase tracking-widest mb-6">
            Investimento
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-white text-balance leading-tight">
            O custo de não aprender é maior do que R$&nbsp;149.
          </h2>
        </motion.div>

        {/* Price card */}
        <motion.div
          id="inscricao"
          initial={{ opacity: 0, y: 32, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 bg-dark-lighter border border-primary/[0.15] rounded-2xl p-8 md:p-10 text-left"
        >
          {/* Price */}
          <div className="text-center mb-6">
            <div className="font-display text-6xl md:text-7xl text-white leading-none">
              R$ 149
            </div>
            <div className="font-mono text-xs uppercase tracking-widest text-zinc-500 mt-2">
              pagamento único
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/[0.08] my-6" />

          {/* Inclusions */}
          <ul className="space-y-3 mb-8">
            {inclusions.map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-zinc-400">
                <span className="text-primary-light flex-shrink-0">&#10003;</span>
                {item}
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Button
            variant="accent"
            size="xl"
            className="w-full text-lg font-semibold"
            onClick={handleCTA}
          >
            Quero participar
          </Button>
        </motion.div>

        {/* Guarantee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 space-y-2"
        >
          <p className="font-mono text-xs text-zinc-500">
            Apenas 50 vagas · Google Meet
          </p>
          <p className="font-mono text-xs text-zinc-600 uppercase tracking-wider">
            Sábado · 9h às 18h
          </p>
        </motion.div>
      </div>
    </section>
  )
}
