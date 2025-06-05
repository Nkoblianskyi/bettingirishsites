"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const bonusTypes = [
  {
    id: "free-bet",
    name: "Free Bet",
    icon: "🍀",
    bonuses: [
      { bookmaker: "BetFred", offer: "Bet €10 Get €50", terms: "1x wagering, 7 days expiry" },
      { bookmaker: "BetVictor", offer: "Bet €10 Get €30", terms: "2x wagering, 7 days expiry" },
      { bookmaker: "BoyleSports", offer: "Bet €10 Get €30", terms: "1x wagering, 7 days expiry" },
      { bookmaker: "Spreadex", offer: "Get €60 in Free Bets", terms: "No wagering, 5 days expiry" },
    ],
  },
  {
    id: "no-deposit",
    name: "No Deposit",
    icon: "🎁",
    bonuses: [
      { bookmaker: "BetFred", offer: "€5 No Deposit Bonus", terms: "10x wagering, 3 days expiry" },
      { bookmaker: "Midnite", offer: "10 Free Spins", terms: "40x wagering, 2 days expiry" },
      { bookmaker: "BetVictor", offer: "€5 Free Bet", terms: "1x wagering, 3 days expiry" },
    ],
  },
  {
    id: "cashback",
    name: "Cashback",
    icon: "🔄",
    bonuses: [
      { bookmaker: "BetVictor", offer: "10% Weekly Cashback", terms: "Up to €100, sports only" },
      { bookmaker: "Spreadex", offer: "Money Back if 2nd", terms: "Selected horse races" },
      { bookmaker: "BoyleSports", offer: "Acca Insurance", terms: "5+ selections, one fails" },
    ],
  },
  {
    id: "exclusive",
    name: "Exclusive",
    icon: "🥇",
    bonuses: [
      { bookmaker: "BetFred", offer: "Irish Exclusive: €60 Free Bet", terms: "Irish customers only" },
      { bookmaker: "BoyleSports", offer: "GAA Special: Double Odds", terms: "First goalscorer" },
      { bookmaker: "Midnite", offer: "Irish Welcome: €30 + 100 Spins", terms: "With code IRISH30" },
    ],
  },
]

export function CloverCategories() {
  const [activeTab, setActiveTab] = useState("free-bet")

  return (
    <section className="py-20 bg-fog-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-stone-black mb-6">🍀 Clover Categories</h2>
          <p className="text-xl text-stone-black/70">Find the perfect bonus type for your betting style</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="free-bet" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-transparent h-auto mb-8">
              {bonusTypes.map((type) => (
                <TabsTrigger
                  key={type.id}
                  value={type.id}
                  className={`data-[state=active]:bg-emerald-green data-[state=active]:text-pure-white py-3 px-4 rounded-lg border-2 ${
                    activeTab === type.id
                      ? "border-emerald-green shadow-lg"
                      : "border-emerald-green/20 hover:border-emerald-green/50"
                  } transition-all duration-300`}
                >
                  <div className="flex flex-col items-center space-y-1">
                    <span className="text-2xl">{type.icon}</span>
                    <span className="font-medium">{type.name}</span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {bonusTypes.map((type) => (
              <TabsContent key={type.id} value={type.id} className="mt-0">
                <Card className="border-2 border-emerald-green/20">
                  <CardContent className="p-6">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b-2 border-emerald-green/20">
                            <th className="text-left py-4 px-2 text-stone-black font-bold">Bookmaker</th>
                            <th className="text-left py-4 px-2 text-stone-black font-bold">Offer</th>
                            <th className="text-left py-4 px-2 text-stone-black font-bold">Key Terms</th>
                            <th className="text-center py-4 px-2"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {type.bonuses.map((bonus, idx) => (
                            <tr
                              key={idx}
                              className={`border-b border-emerald-green/10 hover:bg-emerald-green/5 transition-colors`}
                            >
                              <td className="py-4 px-2 font-medium text-stone-black">{bonus.bookmaker}</td>
                              <td className="py-4 px-2 text-emerald-green font-bold">{bonus.offer}</td>
                              <td className="py-4 px-2 text-stone-black/70 text-sm">{bonus.terms}</td>
                              <td className="py-4 px-2">
                                <Button
                                  size="sm"
                                  className="bg-emerald-green hover:bg-emerald-green/90 text-pure-white w-full"
                                >
                                  Claim
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}
