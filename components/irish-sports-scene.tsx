import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const sportsCategories = [
  {
    title: "GAA (Gaelic Athletic Association)",
    description:
      "Hurling and Gaelic football are uniquely Irish sports with passionate local followings. These games offer specialized betting markets including county championships, All-Ireland series, and local derbies.",
    icon: "🏐",
    facts: ["32 counties compete", "Over 2,600 clubs nationwide", "Summer championship peak season"],
  },
  {
    title: "Horse Racing",
    description:
      "Ireland has a world-renowned horse racing tradition with prestigious tracks like the Curragh, Punchestown, and Leopardstown offering year-round betting opportunities.",
    icon: "🏇",
    facts: ["26 racecourses across Ireland", "Cheltenham Festival major event", "Breeding industry worth €1.8bn"],
  },
  {
    title: "Football & Rugby",
    description:
      "Premier League football and rugby (both union and league) dominate Irish betting preferences, with strong support for Irish teams and players in international competitions.",
    icon: "⚽",
    facts: ["League of Ireland domestic league", "Six Nations rugby championship", "Irish players in Premier League"],
  },
]

export function IrishSportsScene() {
  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            <span className="text-emerald-green">Irish Sports</span>{" "}
            <span className="text-gaelic-orange">Betting Landscape</span>
          </h2>
          <p className="text-lg text-stone-black/70">Understanding the sports that drive Irish betting culture</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {sportsCategories.map((category, index) => (
            <Card
              key={index}
              className="border border-gray-200 hover:shadow-lg transition-all duration-300 bg-white/90 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{category.icon}</span>
                  <h3 className="text-xl font-bold text-stone-black">{category.title}</h3>
                </div>
                <p className="text-stone-black/70 mb-4 leading-relaxed">{category.description}</p>
                <div className="space-y-2">
                  {category.facts.map((fact, idx) => (
                    <div key={idx} className="flex items-center text-sm text-emerald-green">
                      <div className="w-2 h-2 bg-emerald-green rounded-full mr-2"></div>
                      {fact}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="bg-emerald-green/5 border-emerald-green/20">
            <CardContent className="p-8">
              <div className="flex">
                <Quote className="w-12 h-12 text-emerald-green/40 flex-shrink-0 mr-4" />
                <div>
                  <p className="text-xl italic text-stone-black mb-4">
                    "Irish bookmakers understand our sports better than anyone. From GAA specials to horse racing
                    insights, they know what punters want."
                  </p>
                  <p className="text-stone-black/70 font-medium">— Seamus O'Brien, Cork</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <Card className="border border-gray-200 bg-white/90 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-stone-black mb-4">🏆 Popular Betting Markets</h3>
              <ul className="space-y-2 text-stone-black/70">
                <li>• GAA Championship outright winners</li>
                <li>• Horse racing each-way betting</li>
                <li>• Premier League Irish player specials</li>
                <li>• Six Nations rugby match betting</li>
                <li>• Local derby match outcomes</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 bg-white/90 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-stone-black mb-4">📅 Key Betting Seasons</h3>
              <ul className="space-y-2 text-stone-black/70">
                <li>
                  • <strong>Summer:</strong> GAA Championship peak
                </li>
                <li>
                  • <strong>Spring:</strong> Cheltenham Festival
                </li>
                <li>
                  • <strong>Winter:</strong> Six Nations rugby
                </li>
                <li>
                  • <strong>Year-round:</strong> Premier League football
                </li>
                <li>
                  • <strong>March:</strong> St. Patrick's Day specials
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
