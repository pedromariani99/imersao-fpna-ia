'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { AnimatedGroup } from '@/components/ui/animated-group'

const faqs = [
  {
    q: 'Preciso saber programar?',
    a: 'Não. Você vai ver código na tela em alguns momentos, mas o foco é no resultado, não na programação. O objetivo é que você entenda o workflow e consiga replicar usando ferramentas de IA, não que vire desenvolvedor.',
  },
  {
    q: 'O que exatamente vou ver na imersão?',
    a: 'Um case real de modelagem financeira sendo executado ao vivo: organização de documentos, criação de base de dados, modelagem, premissas, projeções, dashboard interativo e apresentação executiva. Tudo com IA.',
  },
  {
    q: 'A imersão será gravada?',
    a: 'Sim. Todos os participantes recebem o replay com acesso por 90 dias.',
  },
  {
    q: 'Funciona para quem trabalha em empresa, não em consultoria?',
    a: 'Sim. O workflow é o mesmo: extrair dados, modelar, projetar, apresentar. Funciona para controllers, analistas, gerentes financeiros, qualquer pessoa que trabalha com dados e relatórios financeiros.',
  },
  {
    q: 'E se eu não puder ficar o dia todo?',
    a: 'Cada etapa do case é sequencial mas independente. Assista ao vivo o que puder e veja o resto no replay.',
  },
  {
    q: 'De onde vem o dado de 94,3%?',
    a: 'Do Anthropic Economic Index — um estudo publicado em 2025 baseado na análise de milhões de conversas reais com IA. O estudo identificou que Business & Finance tem 94,3% de cobertura teórica de IA, empatado com Computer & Math como a área mais exposta à transformação.',
  },
]

function FAQItem({ item }: { item: (typeof faqs)[0] }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group cursor-pointer"
        aria-expanded={open}
      >
        <span className="font-body font-medium text-dark text-base group-hover:text-primary transition-colors">
          {item.q}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className="flex-shrink-0 text-muted group-hover:text-primary transition-colors"
        >
          <ChevronDown size={18} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-muted text-base leading-relaxed max-w-prose">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQ() {
  return (
    <section id="faq" className="bg-surface py-24 md:py-32">
      <div className="max-w-2xl mx-auto px-6 lg:px-10">
        <AnimatedGroup preset="blur-slide" stagger={0.1}>
          <div>
            <p className="font-mono text-xs text-muted uppercase tracking-widest mb-4">
              Dúvidas
            </p>
          </div>
          <div>
            <h2 className="font-display text-3xl md:text-4xl text-dark mb-10">
              Perguntas frequentes
            </h2>
          </div>
        </AnimatedGroup>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {faqs.map((item, i) => (
            <FAQItem key={i} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
