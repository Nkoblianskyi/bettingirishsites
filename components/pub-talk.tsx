"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useState, useEffect } from "react"

const quotes = [
  {
    text: "You haven't bet 'till you bet on a rainy match in Limerick.",
    author: "Sean, Galway",
    icon: "🍺",
  },
  {
    text: "Sure, I've been backing the horses since before you were born, and I'll tell ya - trust is everything.",
    author: "Paddy, Cork",
    icon: "🎩",
  },
  {
    text: "The best bets are made with a clear head and a full stomach.",
    author: "Brigid, Dublin",
    icon: "🥧",
  },
  {
    text: "Never bet more than you'd spend on a good night at the pub.",
    author: "Liam, Belfast",
    icon: "🍻",
  },
  {
    text: "I always say - if the odds seem too good to be true, check twice!",
    author: "Siobhan, Waterford",
    icon: "🔍",
  },
]

export function PubTalk() {
  const [currentQuote, setCurrentQuote] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-16 bg-gradient-to-r from-amber-900 to-yellow-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">🍻 Pub Talk</h2>
          <p className="text-xl opacity-90">Wisdom from the locals</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8">
              <div className="text-center space-y-6">
                <div className="text-6xl">{quotes[currentQuote].icon}</div>
                <blockquote className="text-2xl lg:text-3xl font-medium italic leading-relaxed">
                  "{quotes[currentQuote].text}"
                </blockquote>
                <cite className="text-lg opacity-80">— {quotes[currentQuote].author}</cite>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-8 space-x-2">
            {quotes.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${index === currentQuote ? "bg-white" : "bg-white/30"}`}
                onClick={() => setCurrentQuote(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
