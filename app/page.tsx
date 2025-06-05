import { HeroSection } from "@/components/hero-section"
import { IrishTopList } from "@/components/irish-top-list"
import { WhySportsbooks } from "@/components/why-sportsbooks"
import { IrishSportsScene } from "@/components/irish-sports-scene"
import { ResponsibleBetting } from "@/components/responsible-betting"
import { RatingMethodology } from "@/components/rating-methodology"
import { IrishBettorsSpeak } from "@/components/irish-bettors-speak"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-pure-white">
      <HeroSection />
      <div className="irish-flag-bg">
        <IrishTopList />
        <WhySportsbooks />
        <IrishSportsScene />
        <ResponsibleBetting />
        <RatingMethodology />
        <IrishBettorsSpeak />
      </div>
    </div>
  )
}
