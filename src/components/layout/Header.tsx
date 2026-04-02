'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Programa', href: '#programa' },
  { label: 'Para Quem', href: '#para-quem' },
  { label: 'Investimento', href: '#investimento' },
  { label: 'FAQ', href: '#faq' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={cn(
          'w-full transition-all duration-500 ease-in-out px-5 py-3',
          scrolled
            ? 'max-w-4xl bg-dark/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl shadow-black/20'
            : 'max-w-6xl bg-transparent'
        )}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="font-display text-white text-xl tracking-tight hover:opacity-80 transition-opacity"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            equitye
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-body text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <div className="rounded-[14px] border border-white/10 bg-white/5 p-0.5">
              <Button
                variant="accent"
                size="sm"
                onClick={() => handleNavClick('#inscricao')}
              >
                Garantir Vaga
              </Button>
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="overflow-hidden md:hidden"
            >
              <div className="pt-4 pb-2 flex flex-col gap-1 border-t border-white/10 mt-3">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm font-body text-zinc-400 hover:text-white transition-colors py-2 text-left cursor-pointer"
                  >
                    {link.label}
                  </button>
                ))}
                <div className="pt-2">
                  <Button
                    variant="accent"
                    size="sm"
                    className="w-full"
                    onClick={() => handleNavClick('#inscricao')}
                  >
                    Garantir Vaga — R$ 149
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  )
}
