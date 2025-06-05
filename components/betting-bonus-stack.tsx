"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

const bonusCards = [
  {
    id: 1,
    type: "Welcome",
    title: "New Player Bonus",
    bonus: "€50 Free Bet",
    description: "Get a free bet when you sign up and deposit!",
    color: "from-emerald-green to-green-600",
    icon: "🎉",
  },
  {
    id: 4,
    type: "Sports Bonus",
    title: "Risk-Free Bet",
    bonus: "€10 Free Bet",
    description: "Place a bet, if you lose, get your money back!",
    color: "from-purple-500 to-purple-600",
    icon: "💚",
  },
  {
    id: 5,
    type: "Accumulator",
    title: "Acca Insurance",
    bonus: "Money Back",
    description: "Get your stake back if one leg lets you down.",
    color: "from-blue-500 to-blue-600",
    icon: "🛡️",
  },
  {
    id: 6,
    type: "Enhanced Odds",
    title: "Price Boost",
    bonus: "Higher Returns",
    description: "Get bigger odds on selected events.",
    color: "from-orange-500 to-orange-600",
    icon: "🚀",
  },
]

export function BettingBonusStack() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section className="py-20 bg-pure-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-stone-black mb-6">🃏 Betting Bonus Stack</h2>
          <p className="text-xl text-stone-black/70">Hover over cards to reveal your perfect bonus</p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="relative h-96 mb-8">
            {bonusCards.map((card, index) => {
              const isHovered = hoveredCard === card.id
              const zIndex = isHovered ? 50 : 10 + index
              const translateY = isHovered ? -50 : index * 8
              const rotate = isHovered ? 5 : index * 3
              const scale = isHovered ? 1.1 : 1

              return (
                <Card
                  key={card.id}
                  className="absolute w-full transition-all duration-500 cursor-pointer shadow-xl"
                  style={{
                    transform: `translateY(${translateY}px) rotate(${rotate}deg) scale(${scale})`,
                    zIndex,
                  }}
                  onMouseEnter={() => setHoveredCard(card.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <CardHeader className={`bg-gradient-to-r ${card.color} text-pure-white rounded-t-lg`}>
                    <CardTitle className="flex items-center justify-between text-lg">
                      <span>
                        {card.icon} {card.type}
                      </span>
                      {isHovered && <Badge className="bg-gold-glow text-stone-black animate-glow">REVEALED!</Badge>}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 bg-pure-white">
                    <div className="text-center space-y-3">
                      <h3 className="text-xl font-bold text-stone-black">{card.title}</h3>
                      <div className="text-3xl font-bold text-emerald-green">{card.bonus}</div>
                      <p className="text-sm text-stone-black/70">{card.description}</p>
                      {isHovered && (
                        <Button className="w-full bg-emerald-green hover:bg-emerald-green/90 text-pure-white">
                          Claim This Bonus
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center">
            <p className="text-sm text-stone-black/70 mb-4">Hover over cards to explore different bonus types</p>
          </div>
        </div>
      </div>
    </section>
  )
}
