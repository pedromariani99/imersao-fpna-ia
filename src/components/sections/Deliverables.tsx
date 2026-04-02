'use client'
import { motion } from 'framer-motion'
import { Play, FileText, Users, Sparkles, MessageSquare } from 'lucide-react'

const deliverables = [
  {
    icon: Play,
    title: 'Replay integral',
    description: 'Acesso por 90 dias para assistir quantas vezes quiser.',
  },
  {
    icon: FileText,
    title: 'Templates do case completo',
    description: 'Modelo financeiro, scripts e prompts usados na imersão. Prontos para uso.',
  },
  {
    icon: Sparkles,
    title: 'Framework de prompts para análise financeira',
    description: 'Biblioteca de prompts otimizados para tarefas de FP&A com IA.',
  },
  {
    icon: MessageSquare,
    title: 'Grupo exclusivo de WhatsApp',
    description: 'Comunidade com participantes para trocar experiências e tirar dúvidas.',
  },
  {
    icon: Users,
    title: 'Oferta exclusiva para a comunidade FP&A Intelligence',
    description: 'Condição especial para continuar aprofundando o aprendizado.',
  },
]

export function Deliverables() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="font-mono text-xs text-muted uppercase tracking-widest mb-4">
            O que você leva
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-dark text-balance">
            Além das 7 horas ao vivo
          </h2>
        </motion.div>

        <div className="divide-y divide-border">
          {deliverables.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="flex items-start gap-5 py-6 group"
              >
                <div className="flex-shrink-0 mt-0.5">
                  <Icon
                    size={20}
                    className="text-primary group-hover:text-primary-hover transition-colors"
                  />
                </div>
                <div>
                  <p className="font-body font-semibold text-dark text-base group-hover:text-primary transition-colors">
                    {item.title}
                  </p>
                  <p className="text-sm text-muted mt-0.5 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
