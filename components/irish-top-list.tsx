"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Users, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import { bookmakers } from "@/data/bookmakers"

// Add this function to get the next month and year
function getNextMonthDate() {
  const date = new Date()
  date.setMonth(date.getMonth() + 1)
  const monthName = date.toLocaleString("en-US", { month: "long" })
  const year = date.getFullYear()
  return `${monthName} ${year}`
}

export function IrishTopList() {
  // Debug log to see what data we're getting
  console.log("Bookmakers data:", bookmakers)

  return (
    <section className="pt-4 pb-20 md:py-4 relative z-10 bg-gradient-to-r from-emerald-green/20 via-pure-white/50 to-gaelic-orange/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-2 md:mb-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-stone-black mb-2 md:mb-4">
            <span className="block md:hidden text-base whitespace-nowrap">
              Top Betting Irish Sites — {getNextMonthDate()}
            </span>
            <span className="hidden md:block">
              <span className="text-emerald-green">Top-Ranked</span> Irish Sportsbooks —{" "}
              <span className="text-gaelic-orange">Updated {getNextMonthDate()}</span>
            </span>
          </h2>
          <p className="hidden md:block text-lg text-stone-black/70 max-w-2xl mx-auto">
            Thoroughly tested and verified by our expert team of Irish betting specialists
          </p>
        </div>

        {/* Desktop view - Grid of cards */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {bookmakers.map((bookie, index) => (
            <Link key={bookie.id} href={bookie.url} target="_blank" rel="noopener noreferrer" className="block">
              <Card
                className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border h-[480px] ${index === 0
                    ? "border-emerald-green bg-gradient-to-br from-emerald-green/5 to-transparent"
                    : "border-gray-200"
                  } relative overflow-hidden bg-white/90 backdrop-blur-sm`}
              >
                {index === 0 && (
                  <div className="absolute top-0 right-0 bg-emerald-green text-pure-white px-3 py-1 text-sm font-bold rounded-bl-lg">
                    #1 PICK
                  </div>
                )}

                <CardContent className="p-6 h-full">
                  <div className="h-full flex flex-col">
                    {/* Logo section - fixed height */}
                    <div className="h-24 mb-4">
                      <div className="w-full h-full flex items-center justify-center bg-white rounded-lg shadow-sm border border-gray-200">
                        <img
                          src={bookie.logo || `/placeholder.svg?height=60&width=120&text=${bookie.name}`}
                          alt={`${bookie.name} logo`}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                    </div>

                    {/* Name section - fixed height */}
                    <div className="h-8 flex items-center justify-center mb-3">
                      <h3 className="text-lg font-bold text-stone-black text-center">{bookie.name}</h3>
                    </div>

                    {/* Rating section - fixed height */}
                    <div className="h-6 flex items-center justify-center space-x-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(bookie.rating) ? "text-gold-glow fill-current" : "text-gray-300"
                            }`}
                        />
                      ))}
                      <span className="ml-2 text-sm text-stone-black/70">({bookie.rating})</span>
                    </div>

                    {/* Bonus section - fixed height */}
                    <div className="h-16 mb-4">
                      <div className="bg-emerald-green/5 rounded-lg p-3 border border-emerald-green/10 h-full flex items-center justify-center">
                        <div className="text-sm font-bold text-emerald-green text-center">{bookie.bonus}</div>
                      </div>
                    </div>

                    {/* Users section - fixed height */}
                    <div className="h-6 flex items-center justify-center text-sm text-stone-black/70 mb-4">
                      <Users className="w-4 h-4 mr-1" />
                      <span>{bookie.users} Irish bettors claimed this</span>
                    </div>

                    {/* Features section - fixed height */}
                    <div className="h-16 mb-6">
                      <div className="space-y-1">
                        {bookie.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-xs text-stone-black/80">
                            <CheckCircle className="w-3 h-3 mr-1 text-emerald-green flex-shrink-0" />
                            <span className="truncate">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Button section - always at bottom */}
                    <div className="mt-auto">
                      <div className="w-full bg-emerald-green hover:bg-emerald-green/90 text-pure-white font-medium py-2 px-4 rounded-md text-center transition-colors">
                        💸 Claim Bonus
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Mobile view - Compact list */}
        <div className="md:hidden space-y-4">
          {bookmakers.map((bookie, index) => (
            <Link key={bookie.id} href={bookie.url} target="_blank" rel="noopener noreferrer" className="block">
              <Card
                className={`hover:shadow-md transition-all duration-300 border ${index === 0 ? "border-emerald-green bg-emerald-green/5" : "border-gray-200"
                  } relative bg-white/90 backdrop-blur-sm`}
              >
                {index === 0 && (
                  <div className="absolute top-0 right-0 bg-emerald-green text-pure-white px-2 py-1 text-xs font-bold rounded-bl-lg">
                    #1 PICK
                  </div>
                )}
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <div className="w-[100px] h-16 flex-shrink-0 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center mr-4">
                      <img
                        src={bookie.logo || `/placeholder.svg?height=40&width=80&text=${bookie.name}`}
                        alt={`${bookie.name} logo`}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-bold text-stone-black">{bookie.name}</h3>
                      <div className="flex items-center space-x-1 my-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${i < Math.floor(bookie.rating) ? "text-gold-glow fill-current" : "text-gray-300"
                              }`}
                          />
                        ))}
                        <span className="ml-1 text-xs text-stone-black/70">({bookie.rating})</span>
                      </div>
                      <div className="text-xs font-bold text-emerald-green">{bookie.bonus}</div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-emerald-green flex-shrink-0" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
