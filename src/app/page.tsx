import { Header } from '@/components/layout/Header'
import { Hero } from '@/components/sections/Hero'
import { DataPoint } from '@/components/sections/DataPoint'
import { Problem } from '@/components/sections/Problem'
import { Agenda } from '@/components/sections/Agenda'
import { Deliverables } from '@/components/sections/Deliverables'
import { Audience } from '@/components/sections/Audience'
import { Pricing } from '@/components/sections/Pricing'
import { FAQ } from '@/components/sections/FAQ'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <DataPoint />
        <Problem />
        <Agenda />
        <Deliverables />
        <Audience />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
