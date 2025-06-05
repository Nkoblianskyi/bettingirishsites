import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const cultureArticles = [
  {
    title: "History of Irish Betting",
    description:
      "From ancient Celtic wagers to modern digital platforms - discover how betting evolved in the Emerald Isle.",
    icon: "📜",
    image: "/placeholder.svg?height=200&width=400",
    link: "/culture/history",
  },
  {
    title: "Horse Racing + GAA",
    description:
      "The heart of Irish betting culture - from the Curragh to Croke Park, these sports define Irish punting.",
    icon: "🏇",
    image: "/placeholder.svg?height=200&width=400",
    link: "/culture/sports",
  },
  {
    title: "Paddy Power Era",
    description:
      "How an Irish bookmaker revolutionized the industry with bold marketing and innovative betting options.",
    icon: "☘",
    image: "/placeholder.svg?height=200&width=400",
    link: "/culture/paddy-power",
  },
]

export function CultureSpotlight() {
  return (
    <section className="py-20 bg-fog-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-stone-black mb-6">🏛️ Culture Spotlight</h2>
          <p className="text-xl text-stone-black/70">Discover the rich heritage of Irish betting</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cultureArticles.map((article, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-2 border-emerald-green/20 gold-hover overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 text-4xl bg-pure-white/90 rounded-full p-2 shadow-lg">
                  {article.icon}
                </div>
              </div>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-stone-black">{article.title}</h3>
                <p className="text-stone-black/70 leading-relaxed">{article.description}</p>
                <Link href={article.link}>
                  <Button className="w-full bg-emerald-green hover:bg-emerald-green/90 text-pure-white">
                    Read More →
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/culture">
            <Button
              size="lg"
              className="bg-gaelic-orange hover:bg-gaelic-orange/90 text-pure-white font-bold px-8 py-6 text-lg"
            >
              Explore Irish Betting Culture
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
