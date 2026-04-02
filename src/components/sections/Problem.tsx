'use client'
import { motion } from 'framer-motion'
import { AnimatedGroup } from '@/components/ui/animated-group'

const blocks = [
  {
    label: 'O operacional',
    number: '70%',
    text: 'do tempo de um analista financeiro é gasto em tarefas que a IA já faz melhor: extração de dados, consolidação, formatação de relatórios.',
  },
  {
    label: 'O gap',
    number: '2x',
    text: 'Profissionais que usam IA entregam em horas o que outros levam dias. A diferença de produtividade já é visível — e está acelerando.',
  },
  {
    label: 'O risco',
    number: 'agora',
    text: 'Empresas já estão contratando (e promovendo) quem domina IA aplicada a finanças. Quem não se adaptar vai competir com ferramentas, não com pessoas.',
  },
]

export function Problem() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <AnimatedGroup preset="blur-slide" stagger={0.12}>
          <div>
            <h2 className="font-display text-3xl md:text-4xl text-dark text-balance leading-tight max-w-3xl">
              O mercado financeiro está mudando. A pergunta é se você está mudando com ele.
            </h2>
          </div>
        </AnimatedGroup>

        {/* Three tension blocks */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-10 mt-16">
          {blocks.map((block, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <p className="font-mono text-xs text-primary-light uppercase tracking-widest mb-3">
                {block.label}
              </p>
              <p className="font-display text-5xl md:text-6xl text-primary leading-none mb-4">
                {block.number}
              </p>
              <p className="text-base text-muted leading-relaxed">{block.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Closing line */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg text-center font-medium text-dark mt-16 max-w-2xl mx-auto"
        >
          A boa notícia? Você não precisa virar programador. Precisa aprender a usar as
          ferramentas certas no contexto certo.
        </motion.p>
      </div>
    </section>
  )
}
