import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const cultureTopics = [
  {
    title: "History of Betting in Ireland",
    description:
      "From ancient Celtic wagers to modern digital platforms - discover how betting evolved in the Emerald Isle.",
    icon: "🕰️",
    image: "/placeholder.svg?height=200&width=300",
    link: "/culture#history",
  },
  {
    title: "Paddy Power Era",
    description:
      "How an Irish bookmaker revolutionized the industry with bold marketing and innovative betting options.",
    icon: "🍀",
    image: "/placeholder.svg?height=200&width=300",
    link: "/culture#paddy-power",
  },
  {
    title: "Horse Racing + GAA",
    description:
      "The heart of Irish betting culture - from the Curragh to Croke Park, these sports define Irish punting.",
    icon: "🏇",
    image: "/placeholder.svg?height=200&width=300",
    link: "/culture#sports",
  },
]

export function CultureCards() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">🏛️ Irish Betting Culture</h2>
          <p className="text-xl text-gray-600">Discover the rich heritage behind Irish punting</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cultureTopics.map((topic, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-green-100"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={topic.image || "/placeholder.svg"}
                  alt={topic.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 text-4xl bg-white/90 rounded-full p-2">{topic.icon}</div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">{topic.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed">{topic.description}</p>
                <Link href={topic.link}>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">Learn More →</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/culture">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
              🇮🇪 Explore Full Culture Guide
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
