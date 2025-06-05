"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-stone-black border-b border-emerald-green/20 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-12 md:h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Image src='/logo.png' alt="BettingIrishSites Logo" width={32} height={32} />
            <span className="font-bold text-xl text-gold-glow">BettingIrishSites</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-pure-white hover:text-gold-glow transition-colors">
              Home
            </Link>
            <Link href="/irish-sports-culture" className="text-pure-white hover:text-gold-glow transition-colors">
              Irish Sports Culture
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-2 text-xs">
            <div className="flex items-center bg-emerald-green/20 px-3 py-1 gap-2 rounded-full border border-emerald-green/30">
              <Image src='/flag.png' alt="BettingIrishSites Logo" width={16} height={16} />
              <span className="text-pure-white font-medium">Irish Licensed</span>
            </div>
            <div className="flex items-center bg-pure-white/10 px-3 py-1 rounded-full border border-pure-white/20">
              <span className="text-pure-white font-medium">Safe & Secure</span>
            </div>
            <div className="flex items-center bg-gold-glow/20 px-3 py-1 rounded-full border border-gold-glow/30">
              <span className="font-bold text-gold-glow">18+</span>
            </div>
          </div>

          <button className="md:hidden text-pure-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-emerald-green/20">
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="py-2 text-pure-white hover:text-gold-glow">
                Home
              </Link>
              <Link href="/irish-sports-culture" className="py-2 text-pure-white hover:text-gold-glow">
                Irish Sports Culture
              </Link>
            </nav>

            <div className="mt-4 gap-2 flex justify-between text-xs text-pure-white/80 border-t border-emerald-green/20 pt-4">
              <div className="flex items-center">
                <Image src='/flag.png' alt="BettingIrishSites Logo" width={16} height={16} />
                <span>Irish Licensed</span>
              </div>
              <div className="flex items-center">
                <span>Safe & Secure</span>
              </div>
              <div className="flex items-center">
                <span className="font-bold text-gold-glow">18+</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
