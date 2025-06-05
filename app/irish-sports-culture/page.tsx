import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function IrishSportsCulturePage() {
  return (
    <div className="min-h-screen bg-pure-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Irish Flag Background */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-r from-emerald-500/20 via-white/50 to-orange-500/20"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-stone-black mb-6">Irish Sports Culture</h1>
            <p className="text-xl text-stone-black/70 mb-8">
              Discover the rich heritage and unique traditions that make Irish sports culture so special
            </p>
          </div>
        </div>
      </section>

      {/* GAA Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Irish Flag Background */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-r from-emerald-500/20 via-white/50 to-orange-500/20"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-black mb-8 text-center">
              Gaelic Athletic Association (GAA)
            </h2>

            <Card className="border-2 border-emerald-green/20 bg-white/90 backdrop-blur-sm mb-8">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <span className="text-3xl mr-3">🏐</span>
                  The Heart of Irish Sports
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-stone-black/80 leading-relaxed">
                  The Gaelic Athletic Association (GAA) is Ireland's largest sporting organization and a cornerstone of
                  Irish cultural identity. Founded in 1884 to promote indigenous Irish sports, the GAA today oversees
                  Gaelic football, hurling, camogie, and handball.
                </p>
                <p className="text-stone-black/80 leading-relaxed">
                  With over 2,600 clubs across all 32 counties of Ireland, the GAA is deeply embedded in local
                  communities. The All-Ireland Championships in football and hurling are the pinnacle of the GAA
                  calendar, drawing massive crowds to Croke Park in Dublin.
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-emerald-green/20 bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl">Gaelic Football</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-stone-black/80 leading-relaxed mb-4">
                    Gaelic football combines elements of soccer and rugby but with distinct Irish characteristics.
                    Players can carry the ball for up to four steps before bouncing or soloing it (dropping and kicking
                    it back to their hands).
                  </p>
                  <ul className="space-y-2 text-stone-black/70">
                    <li>• Played with 15 players per side</li>
                    <li>• Points scored by kicking over (1 point) or under (3 points) the crossbar</li>
                    <li>• County teams compete for the Sam Maguire Cup</li>
                    <li>• Dublin, Kerry, and Mayo among the strongest counties</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-emerald-green/20 bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl">Hurling</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-stone-black/80 leading-relaxed mb-4">
                    Often described as the fastest field sport in the world, hurling is a high-speed, high-skill game
                    played with wooden sticks (hurleys) and a small ball (sliotar). Dating back over 3,000 years, it's
                    considered one of the oldest field games in the world.
                  </p>
                  <ul className="space-y-2 text-stone-black/70">
                    <li>• Requires exceptional hand-eye coordination</li>
                    <li>• Players can strike the ball in the air or on the ground</li>
                    <li>• County teams compete for the Liam MacCarthy Cup</li>
                    <li>• Kilkenny, Tipperary, and Cork traditionally dominant</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Horse Racing Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Irish Flag Background */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-r from-emerald-500/20 via-white/50 to-orange-500/20"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-black mb-8 text-center">Horse Racing Heritage</h2>

            <Card className="border-2 border-emerald-green/20 bg-white/90 backdrop-blur-sm mb-8">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <span className="text-3xl mr-3">🏇</span>
                  The Sport of Kings in Ireland
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-stone-black/80 leading-relaxed">
                  Horse racing is deeply woven into the fabric of Irish culture and history. Ireland's reputation as a
                  global powerhouse in breeding, training, and racing thoroughbreds is unmatched for a country of its
                  size.
                </p>
                <p className="text-stone-black/80 leading-relaxed">
                  With 26 racecourses across the island - the highest number per capita in the world - racing is
                  accessible to all Irish communities. The Irish horse racing industry contributes over €1.8 billion
                  annually to the economy and supports approximately 29,000 jobs.
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-emerald-green/20 bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl">Famous Irish Racecourses</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-stone-black/70">
                    <li>
                      • <strong>The Curragh</strong> - Ireland's premier flat racing venue
                    </li>
                    <li>
                      • <strong>Leopardstown</strong> - Home to the Irish Champion Stakes
                    </li>
                    <li>
                      • <strong>Punchestown</strong> - Hosts the prestigious Punchestown Festival
                    </li>
                    <li>
                      • <strong>Galway</strong> - Famous for the summer Galway Races festival
                    </li>
                    <li>
                      • <strong>Fairyhouse</strong> - Home of the Irish Grand National
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-emerald-green/20 bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl">Irish Racing Legends</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-stone-black/70">
                    <li>
                      • <strong>Vincent O'Brien</strong> - Revolutionary trainer
                    </li>
                    <li>
                      • <strong>Aidan O'Brien</strong> - Multiple champion trainer worldwide
                    </li>
                    <li>
                      • <strong>Ruby Walsh</strong> - One of the greatest jump jockeys
                    </li>
                    <li>
                      • <strong>Pat Smullen</strong> - Nine-time Irish champion flat jockey
                    </li>
                    <li>
                      • <strong>Arkle</strong> - Legendary Irish steeplechaser
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Rugby & Football Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Irish Flag Background */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-r from-emerald-500/20 via-white/50 to-orange-500/20"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-black mb-8 text-center">Rugby & Football</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-emerald-green/20 bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <span className="text-3xl mr-3">🏉</span>
                    Irish Rugby
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-stone-black/80 leading-relaxed mb-4">
                    Rugby has a special place in Irish sporting culture, with the national team representing all 32
                    counties of Ireland. The Six Nations Championship and European Rugby Champions Cup draw massive
                    interest from Irish fans.
                  </p>
                  <ul className="space-y-2 text-stone-black/70">
                    <li>• Provincial teams: Leinster, Munster, Ulster, and Connacht</li>
                    <li>• Grand Slam victories in 2009, 2018, and 2023</li>
                    <li>• Legendary players like Brian O'Driscoll and Paul O'Connell</li>
                    <li>• Strong club scene with the United Rugby Championship</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-emerald-green/20 bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <span className="text-3xl mr-3">⚽</span>
                    Football in Ireland
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-stone-black/80 leading-relaxed mb-4">
                    While the English Premier League draws the most attention from Irish football fans, the domestic
                    League of Ireland has a dedicated following and rich history dating back to 1921.
                  </p>
                  <ul className="space-y-2 text-stone-black/70">
                    <li>• Shamrock Rovers - most successful domestic club</li>
                    <li>• Famous Irish internationals like Roy Keane and Robbie Keane</li>
                    <li>• Strong support for English clubs with Irish connections</li>
                    <li>• World Cup appearances in 1990, 1994, and 2002</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Betting Culture Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Irish Flag Background */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-r from-emerald-500/20 via-white/50 to-orange-500/20"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-black mb-8 text-center">Irish Betting Culture</h2>

            <Card className="border-2 border-emerald-green/20 bg-white/90 backdrop-blur-sm mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">A Nation of Punters</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-stone-black/80 leading-relaxed">
                  Betting has long been intertwined with Irish sporting culture, particularly around horse racing and
                  GAA events. The Irish approach to betting combines knowledge, passion, and a touch of superstition.
                </p>
                <p className="text-stone-black/80 leading-relaxed">
                  From the traditional bookmakers that began as family businesses to the modern online betting
                  platforms, Ireland has embraced betting as part of the sporting experience rather than separate from
                  it.
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-emerald-green/20 bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl">Betting Traditions</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-stone-black/70">
                    <li>• The "Lucky 15" bet - popular at Irish racecourses</li>
                    <li>• County loyalty betting in GAA championships</li>
                    <li>• Festival betting at events like the Galway Races</li>
                    <li>• The rise of Irish-owned bookmakers like Paddy Power</li>
                    <li>• Pub betting discussions and tips sharing</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-emerald-green/20 bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl">Modern Irish Betting</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-stone-black/70">
                    <li>• Mobile betting now dominates the market</li>
                    <li>• Special markets for Irish-specific events</li>
                    <li>• Emphasis on responsible gambling practices</li>
                    <li>• Integration of betting with social viewing experiences</li>
                    <li>• Irish punters known for their knowledge and research</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-green text-pure-white relative overflow-hidden">
        {/* Irish Flag Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="flex h-full">
            <div className="w-1/3 bg-emerald-500"></div>
            <div className="w-1/3 bg-white"></div>
            <div className="w-1/3 bg-orange-500"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6">Experience Irish Sports Betting</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ready to be part of Ireland's rich sporting tradition? Explore our top-rated Irish sportsbooks with special
            markets for GAA, horse racing, and more.
          </p>
          <Link
            href="/"
            className="inline-block bg-pure-white text-emerald-green hover:bg-fog-gray px-8 py-3 rounded-lg font-bold text-lg"
          >
            View Top Irish Sportsbooks
          </Link>
        </div>
      </section>
    </div>
  )
}
