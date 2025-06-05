"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUp, ArrowDown, Trophy } from "lucide-react"

const weeklyBookmakers = [
  {
    id: 1,
    name: "BetFred",
    position: 1,
    previousPosition: 2,
    bonus: "Bet €10 → Get €50",
    reason: "Increased welcome bonus",
    trend: "up",
  },
  {
    id: 2,
    name: "BoyleSports",
    position: 2,
    previousPosition: 3,
    bonus: "Bet €10 → Get €30 + €10 Casino",
    reason: "Added casino bonus",
    trend: "up",
  },
  {
    id: 3,
    name: "BetVictor",
    position: 3,
    previousPosition: 1,
    bonus: "Bet €10 → Get €30 in Free Bets",
    reason: "Stricter bonus terms",
    trend: "down",
  },
  {
    id: 4,
    name: "Spreadex",
    position: 4,
    previousPosition: 5,
    bonus: "Join & Get €60 in Free Bets",
    reason: "Improved mobile app",
    trend: "up",
  },
  {
    id: 5,
    name: "Midnite",
    position: 5,
    previousPosition: 4,
    bonus: "Bet €10 → Get €20 + 50 Free Spins",
    reason: "Slower withdrawals",
    trend: "down",
  },
]

export function LuckyLadder() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % weeklyBookmakers.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-pure-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-stone-black mb-6">🪜 Lucky Ladder</h2>
          <p className="text-xl text-stone-black/70">This week's top movers and shakers</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Ladder graphic */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-4 bg-emerald-green/20 rounded-full z-0"></div>

            {weeklyBookmakers.map((bookmaker, index) => {
              const isActive = index === activeIndex
              const offset = (index - activeIndex) * 60
              const opacity = isActive ? 1 : 0.7
              const scale = isActive ? 1 : 0.95
              const zIndex = isActive ? 20 : 10

              return (
                <Card
                  key={bookmaker.id}
                  className="mb-4 border-2 transition-all duration-500 gold-hover"
                  style={{
                    transform: `translateY(${offset}px) scale(${scale})`,
                    opacity,
                    zIndex,
                    borderColor: isActive ? "#ffd700" : "rgba(21, 128, 61, 0.2)",
                  }}
                >
                  <CardContent className="p-6 flex items-center">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-green flex items-center justify-center text-pure-white font-bold text-xl mr-4">
                      {bookmaker.position}
                    </div>

                    <div className="flex-grow">
                      <div className="flex items-center">
                        <h3 className="text-xl font-bold text-stone-black">{bookmaker.name}</h3>
                        {bookmaker.trend === "up" ? (
                          <Badge className="ml-2 bg-green-100 text-green-800 flex items-center">
                            <ArrowUp className="w-3 h-3 mr-1" />
                            {bookmaker.previousPosition - bookmaker.position}
                          </Badge>
                        ) : (
                          <Badge className="ml-2 bg-red-100 text-red-800 flex items-center">
                            <ArrowDown className="w-3 h-3 mr-1" />
                            {bookmaker.position - bookmaker.previousPosition}
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-stone-black/70 mt-1">{bookmaker.reason}</p>
                      <div className="text-emerald-green font-bold mt-2">{bookmaker.bonus}</div>
                    </div>

                    <Button
                      className="flex-shrink-0 bg-emerald-green hover:bg-emerald-green/90 text-pure-white"
                      size="sm"
                    >
                      🎯 Try Now
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center mt-20">
            <Button
              size="lg"
              className="bg-gaelic-orange hover:bg-gaelic-orange/90 text-pure-white font-bold px-8 py-6 text-lg"
            >
              <Trophy className="w-5 h-5 mr-2" /> View Full Rankings
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
