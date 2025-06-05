"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

const bookmakerPins = [
  { id: 1, name: "BetFred", bonus: "€50 Free Bet", x: 45, y: 35, city: "Dublin" },
  { id: 2, name: "BetVictor", bonus: "€30 Free Bets", x: 25, y: 55, city: "Cork" },
  { id: 3, name: "BoyleSports", bonus: "€30 + €10 Casino", x: 35, y: 25, city: "Galway" },
  { id: 4, name: "Spreadex", bonus: "€60 Free Bets", x: 55, y: 45, city: "Limerick" },
  { id: 5, name: "Midnite", bonus: "€20 + 50 Spins", x: 65, y: 20, city: "Belfast" },
]

export function MapOfTrust() {
  const [selectedPin, setSelectedPin] = useState<number | null>(null)
  const [hoveredPin, setHoveredPin] = useState<number | null>(null)

  return (
    <section className="py-16 bg-gradient-to-b from-green-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">🗺️ Map of Trust</h2>
          <p className="text-xl text-gray-600">Discover trusted bookmakers across Ireland</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Ireland Map SVG */}
            <div className="relative bg-green-100 rounded-2xl p-8 min-h-[400px] border-2 border-green-200">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Simplified Ireland outline */}
                <path
                  d="M20,20 Q30,15 40,20 L60,25 Q70,30 75,40 L80,60 Q75,75 65,80 L40,85 Q25,80 20,65 Z"
                  fill="#22c55e"
                  fillOpacity="0.3"
                  stroke="#16a34a"
                  strokeWidth="2"
                />

                {/* Bookmaker pins */}
                {bookmakerPins.map((pin) => (
                  <g key={pin.id}>
                    <circle
                      cx={pin.x}
                      cy={pin.y}
                      r={hoveredPin === pin.id ? "4" : "3"}
                      fill="#dc2626"
                      stroke="#ffffff"
                      strokeWidth="2"
                      className="cursor-pointer transition-all duration-200 hover:fill-red-700"
                      onMouseEnter={() => setHoveredPin(pin.id)}
                      onMouseLeave={() => setHoveredPin(null)}
                      onClick={() => setSelectedPin(selectedPin === pin.id ? null : pin.id)}
                    />
                    <text
                      x={pin.x}
                      y={pin.y - 6}
                      textAnchor="middle"
                      className="text-xs font-bold fill-gray-800 pointer-events-none"
                    >
                      {pin.city}
                    </text>
                  </g>
                ))}
              </svg>

              {/* Hover tooltip */}
              {hoveredPin && (
                <div className="absolute top-4 right-4 bg-white p-3 rounded-lg shadow-lg border border-green-200">
                  <div className="text-sm font-bold text-gray-900">
                    {bookmakerPins.find((p) => p.id === hoveredPin)?.name}
                  </div>
                  <div className="text-xs text-green-600">{bookmakerPins.find((p) => p.id === hoveredPin)?.bonus}</div>
                </div>
              )}
            </div>

            {/* Selected pin modal */}
            {selectedPin && (
              <Card className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 z-10 shadow-xl border-2 border-green-200">
                <CardContent className="p-6">
                  {(() => {
                    const pin = bookmakerPins.find((p) => p.id === selectedPin)!
                    return (
                      <div className="text-center space-y-4">
                        <div className="text-2xl">🍀</div>
                        <h3 className="text-xl font-bold text-gray-900">{pin.name}</h3>
                        <Badge className="bg-green-100 text-green-800">{pin.city}</Badge>
                        <div className="bg-green-50 p-3 rounded-lg">
                          <div className="text-lg font-bold text-green-600">🎁 {pin.bonus}</div>
                        </div>
                        <div className="flex space-x-2">
                          <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white">Visit Site</Button>
                          <Button variant="outline" onClick={() => setSelectedPin(null)} className="border-gray-300">
                            Close
                          </Button>
                        </div>
                      </div>
                    )
                  })()}
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
