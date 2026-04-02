'use client'
import { motion } from 'framer-motion'
import { AnimatedGroup } from '@/components/ui/animated-group'

const stats = [
  {
    value: '5+ anos',
    label: 'em consultoria de FP&A',
  },
  {
    value: '10x',
    label: 'mais rápido com IA no workflow',
  },
  {
    value: 'R$ 0/mês',
    label: 'em licenças de ferramentas',
  },
]

export function Instructor() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-start">
          {/* Left */}
          <AnimatedGroup preset="fade-slide" stagger={0.1}>
            <div>
              <div className="mt-2">
                <p className="font-body text-2xl font-bold text-dark">Pedro</p>
                <p className="font-mono text-sm text-muted mt-1">
                  Fundador da Equitye · Consultoria de FP&A
                </p>
              </div>
            </div>
            <div>
              <p className="text-base text-dark leading-relaxed mt-6 max-w-lg">
                Consultor de FP&A que atende grupos empresariais de médio porte com serviços
                de modelagem financeira, valuation, dashboards executivos e inteligência financeira.
              </p>
            </div>
            <div>
              <p className="text-base text-muted leading-relaxed mt-4 max-w-lg">
                Implementou IA em todo o workflow da consultoria — da extração de dados à
                geração de apresentações. Na imersão, vai abrir a tela e mostrar exatamente
                o que faz com clientes reais, usando as mesmas ferramentas do dia a dia.
              </p>
            </div>
            <div>
              <p className="text-base text-primary italic mt-6 max-w-lg leading-relaxed">
                &ldquo;Eu não vou ensinar teoria. Vou fazer, ao vivo, o que faço toda semana.&rdquo;
              </p>
            </div>
          </AnimatedGroup>

          {/* Right — Stats cards */}
          <div className="flex flex-col gap-3">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.12,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="border border-border rounded-xl p-6 hover:border-primary/20 hover:shadow-sm transition-all duration-200 group"
              >
                <div className="font-display text-3xl text-primary group-hover:text-primary-hover transition-colors">
                  {stat.value}
                </div>
                <div className="font-body text-sm text-muted mt-1.5">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
