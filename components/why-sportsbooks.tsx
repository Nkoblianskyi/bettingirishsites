import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, XCircle, BarChart3 } from "lucide-react"

export function WhySportsbooks() {
  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            <span className="text-emerald-green">Why We Focus on</span>{" "}
            <span className="text-gaelic-orange">Sports Betting Excellence</span>
          </h2>
          <p className="text-lg text-stone-black/70">
            Our mission is to help Irish punters choose only the best sports betting platforms with comprehensive
            coverage, competitive odds, and reliable service.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border border-gray-200 bg-white/90 backdrop-blur-sm">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-green/10 flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-emerald-green" />
              </div>
              <h3 className="text-xl font-bold text-stone-black mb-3">Comprehensive Sports Coverage</h3>
              <p className="text-stone-black/70">
                We only recommend platforms with extensive sports markets, from GAA and horse racing to international
                football and rugby.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 bg-white/90 backdrop-blur-sm">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-green/10 flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-emerald-green" />
              </div>
              <h3 className="text-xl font-bold text-stone-black mb-3">Data-Driven Odds Analysis</h3>
              <p className="text-stone-black/70">
                Our team compares odds across 20+ markets daily to ensure you're getting the best value on every sports
                bet you place.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 bg-white/90 backdrop-blur-sm">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-green/10 flex items-center justify-center mb-4">
                <XCircle className="w-6 h-6 text-emerald-green" />
              </div>
              <h3 className="text-xl font-bold text-stone-black mb-3">Irish Sports Expertise</h3>
              <p className="text-stone-black/70">
                We specialize in platforms that understand Irish sports culture, offering GAA markets, local horse
                racing, and Irish-friendly features.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
