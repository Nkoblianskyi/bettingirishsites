"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import Image from "next/image"

export function HeroSection() {
  const [isAnimated, setIsAnimated] = useState(false)

  useEffect(() => {
    setIsAnimated(true)
  }, [])

  return (
    <section className="relative bg-emerald-green py-4 overflow-hidden" style={{ height: "250px" }}>
      {/* Irish flag background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 flex">
          <div className="w-1/3 bg-emerald-green"></div>
          <div className="w-1/3 bg-pure-white"></div>
          <div className="w-1/3 bg-gaelic-orange"></div>
        </div>
      </div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-stone-black/40 z-5"></div>

      <div className="container max-w-4xl mx-auto px-4 relative z-10 h-full flex items-center">
        <div className="max-w-3xl mx-auto text-center space-y-2">
          <div className="inline-flex items-center px-3 py-1 bg-emerald-green/90 rounded-full border border-pure-white/20 backdrop-blur-sm">
            <span className="text-pure-white text-xs font-medium">Trusted Sports Betting in Ireland</span>
            <Image src='/flag.png' alt="BettingIrishSites Logo" width={16} height={16} />
          </div>

          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-pure-white leading-tight drop-shadow-lg">
            Your Winning Edge
            <span className="block text-gold-glow drop-shadow-lg">Starts Here</span>
          </h1>

          <p className="hidden md:block text-xs lg:text-sm text-pure-white leading-tight max-w-xl mx-auto drop-shadow-md">
            Welcome to Betting Irish Top, one of the most popular online betting portals in the country.
          </p>

          <div className="pt-2">
            <Button
              size="sm"
              className="bg-pure-white text-emerald-green hover:bg-fog-gray font-bold text-sm px-4 py-2 rounded-lg shadow-lg"
            >
              ☘ Explore Rankings
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-2 text-pure-white text-xs pt-1 drop-shadow-md">
            <span className="flex items-center">
              <div className="w-1 h-1 bg-green-400 rounded-full mr-1 animate-pulse"></div>
              Updated Monthly
            </span>
            <span>•</span>
            <span>Irish Punters Only</span>
            <span>•</span>
            <span>18+</span>
          </div>
        </div>
      </div>
    </section>
  )
}
