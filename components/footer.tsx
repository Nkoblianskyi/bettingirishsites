import Link from "next/link"
import Image from "next/image"

const organizations = [
  {
    name: "GambleAware",
    url: "https://www.begambleaware.org",
    logo: "/gamble.webp",
  },
  {
    name: "GamCare",
    url: "https://www.gamcare.org.uk",
    logo: "/gamecare.svg",
  },
  {
    name: "GamblingTherapy",
    url: "https://www.gamblingtherapy.org",
    logo: "/gordonmoody.png",
  },
  {
    name: "Gamblers Anonymous IE",
    url: "https://www.gamblersanonymous.ie",
    logo: "/anonymos.avif",
  },
  {
    name: "EGBA",
    url: "https://www.egba.eu",
    logo: "/egba.svg",
  },
]

export function Footer() {
  return (
    <footer className="bg-stone-black text-pure-white py-16">
      <div className="container mx-auto px-4">
        {/* Основні колонки навігації */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <Image src='/logo.png' alt="BettingIrishSites Logo" width={32} height={32} />
              <span className="font-bold text-xl text-gold-glow">BettingIrishSites</span>
            </Link>
            <p className="text-pure-white/70 text-sm leading-relaxed">
              Your trusted guide to responsible sports betting in Ireland. Expert reviews, honest comparisons.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-6 text-pure-white">Navigation</h3>
            <div className="space-y-3 text-sm">
              <Link href="/" className="text-pure-white hover:text-gold-glow transition-colors">
                Home
              </Link>
              <Link href="/irish-sports-culture" className="text-pure-white hover:text-gold-glow transition-colors">
                Irish Sports Culture
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-6 text-pure-white">Legal</h3>
            <div className="space-y-3 text-sm">
              <Link href="/cookies" className="block text-pure-white/70 hover:text-pure-white transition-colors">
                Cookies
              </Link>
              <Link href="/privacy" className="block text-pure-white/70 hover:text-pure-white transition-colors">
                Privacy
              </Link>
            </div>
          </div>
        </div>

        {/* Організації підтримки в окремому рядку */}
        <div className="border-t border-pure-white/10 pt-8 mb-8">
          <h3 className="font-bold mb-6 text-pure-white text-center">Support Organizations</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {organizations.map((org, index) => (
              <a
                key={index}
                href={org.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-3 border bg-white  border-pure-white/10 rounded hover:bg-pure-white/5 transition-colors w-24 h-16"
              >
                <img
                  src={org.logo || "/placeholder.svg"}
                  alt={`${org.name} logo`}
                  className="max-w-full max-h-full object-contain filter transition-opacity"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-pure-white/10 pt-8 text-center">
          <p className="text-sm text-pure-white/70 leading-relaxed max-w-4xl mx-auto">
            bettingirishsites.com is an independent sports betting comparison platform. We focus exclusively on sports
            betting platforms. Licensed only. Irish only. Gambling can be addictive. Please play responsibly. Must be
            18+ to participate.
          </p>
          <div className="mt-4 text-xs text-pure-white/50">© 2025 BettingIrishSites.com. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
