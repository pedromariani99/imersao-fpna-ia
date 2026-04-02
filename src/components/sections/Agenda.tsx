'use client'
import { motion } from 'framer-motion'

const agendaItems = [
  {
    etapa: '01',
    time: '09h30',
    title: 'Organização de Documentos com IA',
    description:
      'Dezenas de arquivos — balancetes, DREs, contratos, notas fiscais — organizados, classificados e estruturados automaticamente. O caos vira ordem em minutos.',
    badge: 'AO VIVO',
    type: 'live' as const,
  },
  {
    etapa: '02',
    time: '10h30',
    title: 'Geração de Base de Dados',
    description:
      'Dados extraídos de PDFs, planilhas e sistemas diferentes, unificados em uma base limpa e consistente. Pronta para análise, sem digitação manual.',
    badge: 'AO VIVO',
    type: 'live' as const,
  },
  {
    etapa: '03',
    time: '11h30',
    title: 'Modelagem Financeira',
    description:
      'Construção de um modelo financeiro estruturado — DRE, fluxo de caixa, balanço patrimonial projetado — com IA acelerando cada etapa.',
    badge: 'AO VIVO',
    type: 'live' as const,
  },
  {
    etapa: null,
    time: '12h30',
    title: 'Almoço',
    description: '',
    badge: 'INTERVALO',
    type: 'break' as const,
  },
  {
    etapa: '04',
    time: '13h30',
    title: 'Construção de Premissas',
    description:
      'Premissas de receita, custos e crescimento construídas com pesquisa de mercado, dados setoriais e benchmarks — tudo com suporte de IA.',
    badge: 'AO VIVO',
    type: 'live' as const,
  },
  {
    etapa: '05',
    time: '14h30',
    title: 'Projeção Financeira',
    description:
      'Cenários projetados, sensibilidades calculadas, resultados consolidados. O modelo ganha vida com números que fazem sentido.',
    badge: 'AO VIVO',
    type: 'live' as const,
  },
  {
    etapa: '06',
    time: '15h30',
    title: 'Dashboards Interativos',
    description:
      'Um dashboard web profissional, publicado e acessível por link. Gráficos, KPIs, filtros — tudo construído ao vivo.',
    badge: 'AO VIVO',
    type: 'live' as const,
  },
  {
    etapa: '07',
    time: '16h30',
    title: 'Apresentação Executiva com IA',
    description:
      'O produto final: uma apresentação profissional para o cliente, gerada automaticamente a partir dos dados do modelo.',
    badge: 'AO VIVO',
    type: 'live' as const,
  },
  {
    etapa: null,
    time: '17h30',
    title: 'Recapitulação + Próximos Passos',
    description:
      'Revisão do que foi construído, mapa de implementação para o participante, e oportunidade exclusiva de continuar na comunidade.',
    badge: 'ENCERRAMENTO',
    type: 'closing' as const,
  },
]

export function Agenda() {
  return (
    <section id="programa" className="bg-dark py-24 md:py-32 grain-overlay">
      {/* Background accent */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-50"
          style={{
            background: 'radial-gradient(circle, hsla(220, 100%, 33%, .06) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-5xl text-white text-balance leading-tight">
            Um case real.{' '}
            <br className="hidden md:block" />
            Do documento ao dashboard.{' '}
            <br className="hidden md:block" />
            <span className="text-zinc-500">Ao vivo, na sua tela.</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed mt-5">
            Você vai assistir à execução completa de um projeto de modelagem financeira,
            do início ao fim, usando IA em cada etapa.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-16">
          {/* Vertical line — desktop */}
          <div className="absolute left-[7px] top-3 bottom-3 w-px bg-primary/20 hidden md:block" />

          <div className="space-y-0">
            {agendaItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.08,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className={`relative flex gap-6 md:gap-8 pb-8 last:pb-0 ${
                  item.type === 'break' ? 'opacity-60' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex flex-shrink-0 w-4 items-start pt-1.5">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.08 + 0.2 }}
                    className={`w-3.5 h-3.5 rounded-full ring-2 ring-offset-2 ring-offset-dark ${
                      item.type === 'break'
                        ? 'bg-zinc-600 ring-zinc-600/20'
                        : item.type === 'closing'
                          ? 'bg-primary-light ring-primary-light/20'
                          : 'bg-primary ring-primary/20'
                    }`}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 group">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    {item.etapa && (
                      <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                        Etapa {item.etapa}
                      </span>
                    )}
                    <span className="font-mono text-sm text-primary-light tracking-wider">
                      {item.time}
                    </span>
                    <span
                      className={`font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded border ${
                        item.type === 'live'
                          ? 'border-accent/40 text-accent'
                          : item.type === 'break'
                            ? 'border-zinc-600/40 text-zinc-500'
                            : 'border-primary-light/40 text-primary-light'
                      }`}
                    >
                      {item.badge}
                    </span>
                  </div>
                  <h3
                    className={`text-xl font-semibold font-body mb-2 transition-colors duration-200 ${
                      item.type === 'break'
                        ? 'text-zinc-500'
                        : 'text-white group-hover:text-primary-light'
                    }`}
                  >
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-zinc-400 text-base leading-relaxed max-w-xl">
                      {item.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <p className="font-mono text-xs text-zinc-600 uppercase tracking-wider">
            Sábado · 9h às 18h · Google Meet
          </p>
          <div className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
              Ao vivo
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
