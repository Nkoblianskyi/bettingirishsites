"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, Sparkles, Crown } from "lucide-react"
import { bookmakers } from "@/data/bookmakers"

export function DelayedModal() {
  const [isVisible, setIsVisible] = useState(false)
  const topThreeSites = bookmakers.slice(0, 3)

  useEffect(() => {
    // Show modal after 8 seconds
    const timer = setTimeout(() => {
      setIsVisible(true)
      // Prevent background scrolling when modal is open
      document.body.style.overflow = "hidden"
    }, 8000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  const closeModal = () => {
    setIsVisible(false)
    // Re-enable scrolling when modal is closed
    document.body.style.overflow = "auto"
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gradient-to-br from-emerald-900/90 via-stone-900/90 to-gaelic-orange/90 backdrop-blur-lg">
      <div className="relative w-full max-w-sm md:max-w-2xl rounded-3xl overflow-hidden shadow-2xl border border-gold-glow/30">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-stone-800 to-gaelic-orange opacity-95">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fillRule=evenodd%3E%3Cg fill=%23ffffff fillOpacity=0.05%3E%3Ccircle cx=30 cy=30 r=2/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        </div>

        {/* Header */}
        <div className="relative z-10 p-4 md:p-6 text-center">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Crown className="w-6 h-6 md:w-8 md:h-8 text-gold-glow mr-2" />
              <Sparkles className="w-4 h-4 md:w-6 md:h-6 text-gold-glow animate-pulse" />
            </div>
            <button
              onClick={closeModal}
              className="bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all backdrop-blur-sm border border-white/20"
            >
              <X size={20} className="text-white md:w-6 md:h-6" />
            </button>
          </div>

          <h2 className="text-xl md:text-3xl font-bold text-white mb-2 drop-shadow-lg">🍀 Exclusive Irish Offers</h2>
          <p className="text-white/90 text-sm md:text-base drop-shadow-md">Limited time bonuses just for you!</p>
        </div>

        {/* Content */}
        <div className="relative z-10 p-3 md:p-6">
          {/* Mobile: Single column, Desktop: Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            {topThreeSites.map((site, index) => (
              <div
                key={site.id}
                className="bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-white/20 hover:scale-105 transition-all duration-300"
              >
                {/* Mobile layout - horizontal */}
                <div className="md:hidden flex items-center p-3">
                  {/* Rank Badge */}
                  <div
                    className={`w-10 h-10 flex items-center justify-center font-bold text-sm rounded-full shadow-lg mr-3 flex-shrink-0 ${
                      index === 0
                        ? "bg-gradient-to-r from-gold-glow to-yellow-400 text-stone-black"
                        : index === 1
                          ? "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white"
                          : "bg-gradient-to-r from-gaelic-orange to-red-500 text-white"
                    }`}
                  >
                    {index === 0 ? "👑" : `#${index + 1}`}
                  </div>

                  {/* Logo */}
                  <div className="w-18 h-18 bg-gradient-to-br from-fog-gray to-white rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <Image
                      src={site.logo || "/placeholder.svg"}
                      alt={site.name}
                      width={80}
                      height={50}
                      className="max-w-full max-h-full object-contain drop-shadow-sm"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-stone-black mb-1">{site.name}</h3>
                    <div className="flex items-center mb-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} className="text-gold-glow text-xs">
                          ★
                        </span>
                      ))}
                      <span className="text-stone-black text-xs font-bold ml-1">4.9</span>
                    </div>
                    <div
                      className={`text-xs font-bold px-2 py-1 rounded text-center ${
                        index === 0
                          ? "bg-gradient-to-r from-gold-glow to-yellow-500 text-stone-black"
                          : "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white"
                      }`}
                    >
                      {site.id === 1 && "€30 + €10 Casino"}
                      {site.id === 2 && "€20 + 50 Spins"}
                      {site.id === 3 && "€50 Free Bet"}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-lg ml-3 flex-shrink-0 ${
                      index === 0
                        ? "bg-gradient-to-r from-gold-glow to-yellow-500 hover:from-yellow-500 hover:to-gold-glow text-stone-black"
                        : "bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-500 text-white"
                    }`}
                  >
                    Claim
                  </a>
                </div>

                {/* Desktop layout - vertical (original) */}
                <div className="hidden md:flex md:flex-col md:h-full">
                  {/* Rank Badge */}
                  <div className="relative">
                    <div
                      className={`absolute -top-2 -right-2 w-10 h-10 flex items-center justify-center font-bold text-sm z-10 rounded-full shadow-lg ${
                        index === 0
                          ? "bg-gradient-to-r from-gold-glow to-yellow-400 text-stone-black"
                          : index === 1
                            ? "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white"
                            : "bg-gradient-to-r from-gaelic-orange to-red-500 text-white"
                      }`}
                    >
                      {index === 0 ? "👑" : `#${index + 1}`}
                    </div>

                    {/* Logo container */}
                    <div className="bg-gradient-to-br from-fog-gray to-white p-4 h-20 flex items-center justify-center">
                      <Image
                        src={site.logo || "/placeholder.svg"}
                        alt={site.name}
                        width={70}
                        height={35}
                        className="max-w-full max-h-full object-contain drop-shadow-sm"
                      />
                    </div>
                  </div>

                  {/* Site name */}
                  <div className="px-3 py-2 text-center">
                    <h3 className="text-base font-bold text-stone-black">{site.name}</h3>
                  </div>

                  {/* Bonus */}
                  <div
                    className={`text-white p-3 text-sm font-bold text-center h-20 flex items-center justify-center ${
                      index === 0
                        ? "bg-gradient-to-r from-gold-glow to-yellow-500 text-stone-black"
                        : "bg-gradient-to-r from-emerald-500 to-emerald-600"
                    }`}
                  >
                    {site.id === 1 && (
                      <div className="leading-tight">
                        Bet €10 Get €30 +<br />
                        €10 Casino Bonus
                      </div>
                    )}
                    {site.id === 2 && (
                      <div className="leading-tight">
                        Bet €10 Get €20 + 50
                        <br />
                        Free Spins
                      </div>
                    )}
                    {site.id === 3 && (
                      <div className="leading-tight">
                        Bet €10
                        <br />
                        Get €50
                      </div>
                    )}
                  </div>

                  {/* Rating */}
                  <div className="px-3 py-2 flex justify-center">
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} className="text-gold-glow text-base drop-shadow-sm">
                          ★
                        </span>
                      ))}
                      <span className="text-stone-black text-sm font-bold ml-1">4.9</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="p-3 mt-auto">
                    <a
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block w-full py-3 rounded-xl text-base font-bold transition-all text-center shadow-lg ${
                        index === 0
                          ? "bg-gradient-to-r from-gold-glow to-yellow-500 hover:from-yellow-500 hover:to-gold-glow text-stone-black"
                          : "bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-500 text-white"
                      }`}
                    >
                      🎯 Claim Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-4 md:mt-5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-3 md:p-4">
            <p className="text-center text-xs md:text-sm text-white drop-shadow-md">
              <span className="text-gold-glow font-bold">⚠️ 18+ Only</span> | T&Cs Apply |{" "}
              <span className="text-emerald-300 font-bold">Licensed for Irish Players</span>
            </p>
            <p className="text-center text-xs md:text-sm text-white/80 mt-1 md:mt-2 drop-shadow-md">
              Please gamble responsibly - visit{" "}
              <a href="https://www.begambleaware.org" className="text-gold-glow underline font-medium">
                BeGambleAware.org
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
