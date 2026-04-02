import type { Metadata } from 'next'
import { DM_Sans, Instrument_Serif, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const instrumentSerif = Instrument_Serif({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Imersão FP&A com IA — Na Prática | Equitye',
  description:
    'Um dia inteiro ao vivo mostrando como automatizar tarefas de FP&A com Inteligência Artificial. Com dados financeiros reais, na prática. Sábado, 25 de Abril — R$ 149.',
  keywords: ['FP&A', 'Inteligência Artificial', 'automação financeira', 'controller', 'finanças corporativas'],
  openGraph: {
    title: 'Imersão FP&A com IA — Na Prática',
    description: 'O relatório que levava 2 dias agora leva 47 segundos.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${dmSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  )
}
