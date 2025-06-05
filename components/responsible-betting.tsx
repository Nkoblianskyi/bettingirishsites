import { Card, CardContent } from "@/components/ui/card"
import { Shield, Clock, AlertTriangle } from "lucide-react"

const organizations = [
  { name: "GambleAware", url: "https://www.begambleaware.org" },
  { name: "GamCare", url: "https://www.gamcare.org.uk" },
  { name: "GamblingTherapy", url: "https://www.gamblingtherapy.org" },
  { name: "Gamblers Anonymous IE", url: "https://www.gamblersanonymous.ie" },
  { name: "Gambling Commission UK", url: "https://www.gamblingcommission.gov.uk" },
  { name: "EGBA", url: "https://www.egba.eu" },
]

export function ResponsibleBetting() {
  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            <span className="text-emerald-green">Responsible Betting</span>{" "}
            <span className="text-gaelic-orange">in Ireland</span>
          </h2>
          <p className="text-lg text-stone-black/70">Smart punters know their limits and bet responsibly</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="border border-gray-200 bg-white/90 backdrop-blur-sm">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-green/10 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-emerald-green" />
              </div>
              <h3 className="text-xl font-bold text-stone-black mb-3">Bet What You Can Afford</h3>
              <p className="text-stone-black/70">
                Only bet with money you can afford to lose. Never use essential funds for gambling.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 bg-white/90 backdrop-blur-sm">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-green/10 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-emerald-green" />
              </div>
              <h3 className="text-xl font-bold text-stone-black mb-3">Set Time & Money Limits</h3>
              <p className="text-stone-black/70">
                Establish clear limits before you start betting and stick to them regardless of outcomes.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 bg-white/90 backdrop-blur-sm">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-green/10 flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-emerald-green" />
              </div>
              <h3 className="text-xl font-bold text-stone-black mb-3">Don't Bet to Escape</h3>
              <p className="text-stone-black/70">
                Betting should be entertainment, not a way to cope with stress, anxiety, or depression.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
