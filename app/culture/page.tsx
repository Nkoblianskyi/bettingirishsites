import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CulturePage() {
  return (
    <div className="min-h-screen bg-pure-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Irish Flag Background */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-r from-emerald-green/20 via-pure-white/50 to-gaelic-orange/20"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-stone-black mb-6">Irish Betting Culture</h1>
            <p className="text-xl text-stone-black/70 mb-8">
              Discover the rich heritage and unique traditions that make Irish sports betting culture so special
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-fog-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-black mb-8 text-center">
              The History of Irish Betting
            </h2>

            <div className="space-y-12">
              <Card className="border-2 border-emerald-green/20">
                <CardHeader>
                  <CardTitle className="text-2xl">Ancient Beginnings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-stone-black/80 leading-relaxed">
                    Betting in Ireland dates back to ancient Celtic times, where wagers were placed on feats of
                    strength, chariot races, and other competitions during festivals and gatherings. The Brehon Laws,
                    Ireland's ancient legal system, even contained provisions for gambling disputes.
                  </p>
                  <p className="text-stone-black/80 leading-relaxed">
                    By the 18th century, horse racing had become firmly established as a national pastime, with the
                    Curragh racecourse in County Kildare hosting races since 1727, making it one of the oldest
                    racecourses in the world.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-emerald-green/20">
                <CardHeader>
                  <CardTitle className="text-2xl">The Bookmaker Era</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-stone-black/80 leading-relaxed">
                    The 20th century saw the rise of Irish bookmaking families like Power, Boylesports, and others who
                    built betting empires from humble beginnings. These local bookmakers became fixtures in Irish towns
                    and villages, creating a uniquely Irish betting culture centered around personal relationships and
                    community.
                  </p>
                  <p className="text-stone-black/80 leading-relaxed">
                    The 1926 Betting Act formalized legal bookmaking in Ireland, creating the regulatory framework that
                    would evolve into today's system. This legislation helped establish Ireland's reputation for fair
                    and well-regulated betting.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-emerald-green/20">
                <CardHeader>
                  <CardTitle className="text-2xl">Modern Digital Transformation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-stone-black/80 leading-relaxed">
                    The late 1990s and early 2000s saw Irish betting culture embrace the digital revolution. Paddy Power
                    led the way with innovative online platforms and marketing that captured the Irish sense of humor
                    and irreverence.
                  </p>
                  <p className="text-stone-black/80 leading-relaxed">
                    Today, Ireland has one of the highest per-capita rates of online betting in Europe, with a
                    sophisticated punter base that values competitive odds, innovative features, and platforms that
                    understand uniquely Irish sporting interests like GAA and horse racing.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Sports Section */}
      <section className="py-20 bg-pure-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-stone-black mb-12 text-center">
            The Heart of Irish Sports Betting
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-emerald-green/10 hover:shadow-lg transition-all duration-300">
              <div className="h-48 bg-emerald-green/10 flex items-center justify-center">
                <span className="text-6xl">🏐</span>
              </div>
              <CardHeader>
                <CardTitle>Gaelic Games (GAA)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-stone-black/80 leading-relaxed mb-4">
                  Gaelic football and hurling represent the heart of Irish sporting identity. The All-Ireland
                  Championships draw massive betting interest, with county loyalties driving passionate wagering.
                </p>
                <ul className="space-y-2 text-stone-black/70">
                  <li>• All-Ireland Football & Hurling Championships</li>
                  <li>• County Championships</li>
                  <li>• Club Championships</li>
                  <li>• Special markets like first goalscorer</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-emerald-green/10 hover:shadow-lg transition-all duration-300">
              <div className="h-48 bg-emerald-green/10 flex items-center justify-center">
                <span className="text-6xl">🏇</span>
              </div>
              <CardHeader>
                <CardTitle>Horse Racing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-stone-black/80 leading-relaxed mb-4">
                  Ireland's horse racing tradition is world-renowned, with prestigious events like the Irish Derby and
                  Punchestown Festival. Irish punters are known for their deep knowledge of form and breeding.
                </p>
                <ul className="space-y-2 text-stone-black/70">
                  <li>• Cheltenham Festival (Irish raiders)</li>
                  <li>• Irish Derby</li>
                  <li>• Punchestown Festival</li>
                  <li>• Galway Races</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-emerald-green/10 hover:shadow-lg transition-all duration-300">
              <div className="h-48 bg-emerald-green/10 flex items-center justify-center">
                <span className="text-6xl">⚽</span>
              </div>
              <CardHeader>
                <CardTitle>Football & Rugby</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-stone-black/80 leading-relaxed mb-4">
                  While not native to Ireland, football (especially the Premier League) and rugby have massive
                  followings. The Six Nations rugby tournament is a particular highlight of the betting calendar.
                </p>
                <ul className="space-y-2 text-stone-black/70">
                  <li>• Premier League</li>
                  <li>• Champions League</li>
                  <li>• Six Nations Rugby</li>
                  <li>• European Rugby Champions Cup</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Traditions Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-green/5 via-fog-gray to-gaelic-orange/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-stone-black mb-12 text-center">
            Unique Irish Betting Traditions
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-2 border-emerald-green/20">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="text-3xl mr-3">🍻</span>
                  The Pub and Betting Culture
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-stone-black/80 leading-relaxed">
                  Irish pubs have long been centers for betting discussion and camaraderie. Before online betting,
                  punters would gather to share tips, celebrate wins, and commiserate losses. This social aspect remains
                  important today, with major sporting events drawing crowds to pubs where betting is part of the shared
                  experience.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-emerald-green/20">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="text-3xl mr-3">🍀</span>
                  Lucky Charms and Superstitions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-stone-black/80 leading-relaxed">
                  Irish betting culture is rich with superstitions and lucky charms. From carrying a four-leaf clover to
                  wearing "lucky" items of clothing to the races, these traditions add color and character to the
                  betting experience. Many punters have personal rituals they follow before placing important bets.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-emerald-green/20">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="text-3xl mr-3">🗣️</span>
                  Betting Slang and Terminology
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-stone-black/80 leading-relaxed">
                  Irish betting has developed its own colorful vocabulary. Terms like "on the nose" (betting to win),
                  "having a flutter" (placing a casual bet), or "sure thing" (a supposedly guaranteed winner) are part
                  of everyday language. This unique terminology reflects the deep integration of betting into Irish
                  culture.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-emerald-green/20">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="text-3xl mr-3">📅</span>
                  Festival Betting
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-stone-black/80 leading-relaxed">
                  Major Irish festivals like St. Patrick's Day, Christmas racing at Leopardstown, and the Galway Races
                  summer festival have strong betting traditions. These events see increased betting activity even among
                  casual punters who might not bet regularly throughout the year.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-green text-pure-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Experience Irish Betting Excellence</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ready to be part of Ireland's rich betting tradition? Explore our top-rated Irish sportsbooks and claim
            exclusive bonuses today.
          </p>
          <Link href="/">
            <Button size="lg" className="bg-pure-white text-emerald-green hover:bg-fog-gray">
              View Top Irish Sportsbooks
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
