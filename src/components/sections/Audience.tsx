'use client'
import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'

const forWhom = [
  'Analistas e profissionais que querem sair do operacional',
  'Profissionais que querem entregar mais com menos tempo',
  'Qualquer pessoa que sabe que precisa dominar IA para se diferenciar',
]

const notForWhom = [
  'Quem busca curso de programação (isso é sobre finanças, não código)',
  'Quem não trabalha com finanças e não pretende trabalhar',
  'Quem acha que IA é modismo e não vai impactar a profissão',
]

export function Audience() {
  return (
    <section id="para-quem" className="bg-white py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="font-mono text-xs text-muted uppercase tracking-widest mb-4">
            Público ideal
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Para quem é */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="bg-surface border border-border rounded-xl p-8"
          >
            <h3 className="font-body font-semibold text-xl text-dark mb-6">Para quem é</h3>
            <ul className="space-y-4">
              {forWhom.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check size={18} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-dark leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Para quem não é */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-dark rounded-xl p-8"
          >
            <h3 className="font-body font-semibold text-xl text-white mb-6">Para quem não é</h3>
            <ul className="space-y-4">
              {notForWhom.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <X size={18} className="text-zinc-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-zinc-400 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
