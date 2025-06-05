"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

const bonusCards = [
  {
    id: 1,
    type: "Welcome Offer",
    title: "New Player Special",
    bonus: "€50 Free Bet",
    description: "Perfect for first-time punters",
    color: "from-blue-500 to-blue-600",
    icon: "🎉",
  },
  {
    id: 2,
    type: "Casino Pack",
    title: "Slots & Table Games",
    bonus: "€100 + 100 Spins",
    description: "Best of both worlds",
    color: "from-purple-500 to-purple-600",
    icon: "🎰",
  },
  {
    id: 3,
    type: "No Deposit",
    title: "Risk-Free Start",
    bonus: "€10 Free",
    description: "No strings attached",
    color: "from-green-500 to-green-600",
    icon: "💚",
  },
  {
    id: 4,
    type: "Paddy's Day Exclusive",
    title: "Lucky Irish Special",
    bonus: "€77 + 77 Spins",
    description: "Limited time only",
    color: "from-orange-500 to-red-500",
    icon: "🍀",
  },
]

export function BonusStack() {
  const [pulledCard, setPulledCard] = useState<number | null>(null)
  const [stackOrder, setStackOrder] = useState([0, 1, 2, 3])

  const pullCard = () => {
    const topCardIndex = stackOrder[stackOrder.length - 1]
    setPulledCard(topCardIndex)

    setTimeout(() => {
      setStackOrder((prev) => {
        const newOrder = [...prev]
        const pulledIndex = newOrder.pop()!
        newOrder.unshift(pulledIndex)
        return newOrder
      })
      setPulledCard(null)
    }, 2000)
  }

  return (
    <section className="py-16 bg-gradient-to-br from-amber-50 to-yellow-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">🃏 Betting Bonus Stack</h2>
          <p className="text-xl text-gray-600">Pull a card, find your perfect bonus</p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="relative h-80 mb-8">
            {stackOrder.map((cardIndex, stackIndex) => {
              const card = bonusCards[cardIndex]
              const isTopCard = stackIndex === stackOrder.length - 1
              const isPulled = pulledCard === cardIndex

              return (
                <Card
                  key={card.id}
                  className={`absolute w-full transition-all duration-500 cursor-pointer hover:shadow-xl ${
                    isPulled
                      ? "transform translate-y-[-100px] rotate-12 scale-110 z-50"
                      : `transform translate-y-[${stackIndex * 4}px] rotate-[${stackIndex * 2}deg] z-[${10 + stackIndex}]`
                  } ${isTopCard && !isPulled ? "hover:-translate-y-2" : ""}`}
                  onClick={isTopCard && !isPulled ? pullCard : undefined}
                  style={{
                    transform: isPulled
                      ? "translateY(-100px) rotate(12deg) scale(1.1)"
                      : `translateY(${stackIndex * 4}px) rotate(${stackIndex * 2}deg)`,
                    zIndex: isPulled ? 50 : 10 + stackIndex,
                  }}
                >
                  <CardHeader className={`bg-gradient-to-r ${card.color} text-white rounded-t-lg`}>
                    <CardTitle className="flex items-center justify-between text-lg">
                      <span>
                        {card.icon} {card.type}
                      </span>
                      {isTopCard && !isPulled && <Badge className="bg-white/20">Pull Me!</Badge>}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 bg-white">
                    <div className="text-center space-y-3">
                      <h3 className="text-xl font-bold text-gray-900">{card.title}</h3>
                      <div className="text-2xl font-bold text-green-600">{card.bonus}</div>
                      <p className="text-sm text-gray-600">{card.description}</p>
                      {isPulled && (
                        <Button className="w-full bg-green-600 hover:bg-green-700 text-white">Claim This Bonus</Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600 mb-4">Click the top card to reveal your next bonus</p>
            <Button
              onClick={pullCard}
              disabled={pulledCard !== null}
              className="bg-amber-600 hover:bg-amber-700 text-white"
            >
              🎴 Shuffle Deck
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
