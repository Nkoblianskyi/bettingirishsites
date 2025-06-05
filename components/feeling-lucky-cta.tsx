"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Sparkles } from "lucide-react"

export function FeelingLuckyCTA() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-green via-emerald-green/90 to-gaelic-orange z-0"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        <div
          className="absolute top-10 left-[10%] text-6xl animate-float opacity-20"
          style={{ animationDuration: "3s" }}
        >
          🍀
        </div>
        <div
          className="absolute top-[20%] right-[15%] text-5xl animate-float opacity-20"
          style={{ animationDuration: "4s", animationDelay: "1s" }}
        >
          🎲
        </div>
        <div
          className="absolute bottom-[15%] left-[20%] text-5xl animate-float opacity-20"
          style={{ animationDuration: "5s", animationDelay: "0.5s" }}
        >
          💰
        </div>
        <div
          className="absolute bottom-[10%] right-[10%] text-6xl animate-float opacity-20"
          style={{ animationDuration: "4.5s", animationDelay: "1.5s" }}
        >
          🎯
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl lg:text-6xl font-bold text-pure-white mb-8">Feeling Lucky?</h2>
          <p className="text-2xl text-pure-white/90 mb-12">Let's find your bonus.</p>

          <Button
            size="lg"
            className={`bg-pure-white text-emerald-green hover:bg-gold-glow hover:text-stone-black font-bold text-xl px-10 py-8 transition-all duration-300 transform ${
              isHovered ? "scale-110" : ""
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Sparkles className={`w-6 h-6 mr-2 ${isHovered ? "animate-glow" : ""}`} />🎲 Show me best offer
          </Button>
        </div>
      </div>
    </section>
  )
}
