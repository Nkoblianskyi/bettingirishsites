import { Card, CardContent } from "@/components/ui/card"

const ratingCriteria = [
  {
    number: "1",
    title: "Legality & Irish Access",
    description: "We only list bookmakers that are legally accessible to Irish punters with proper licensing.",
  },
  {
    number: "2",
    title: "Odds Quality",
    description: "We compare odds across markets to ensure you're getting competitive prices on your bets.",
  },
  {
    number: "3",
    title: "Payout Speed",
    description: "Fast, hassle-free withdrawals are essential for a quality betting experience.",
  },
  {
    number: "4",
    title: "UX (especially mobile)",
    description: "The betting platform should be intuitive and responsive, especially on mobile devices.",
  },
  {
    number: "5",
    title: "Support + Real Player Data",
    description: "We collect feedback from real Irish punters and test customer support quality.",
  },
]

export function RatingMethodology() {
  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            <span className="text-emerald-green">How We Rate</span>{" "}
            <span className="text-gaelic-orange">Bookmakers</span>
          </h2>
          <p className="text-lg text-stone-black/70">Our thorough methodology ensures only the best make our list</p>
        </div>

        <div className="max-w-3xl mx-auto">
          {ratingCriteria.map((criteria, index) => (
            <Card key={index} className="mb-4 border border-gray-200 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6 flex items-start">
                <div className="w-10 h-10 rounded-full bg-emerald-green text-pure-white flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                  {criteria.number}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-stone-black mb-2">{criteria.title}</h3>
                  <p className="text-stone-black/70">{criteria.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
