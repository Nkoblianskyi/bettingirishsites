"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X, Star, ExternalLink, Clock, Shield, Gift } from "lucide-react"

interface BonusModalProps {
  isOpen: boolean
  onClose: () => void
  bookmaker: {
    name: string
    bonus: string
    rating: number
    url: string
    features: string[]
  }
}

export function BonusModal({ isOpen, onClose, bookmaker }: BonusModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-stone-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <Card className="relative w-full max-w-md border-2 border-emerald-green/20 shadow-2xl bg-white">
        <CardHeader className="bg-gradient-to-r from-emerald-green to-emerald-green/90 text-pure-white relative">
          <button onClick={onClose} className="absolute top-4 right-4 text-pure-white/80 hover:text-pure-white">
            <X className="w-5 h-5" />
          </button>
          <CardTitle className="text-xl flex items-center">
            <Gift className="w-6 h-6 mr-2" />
            Exclusive Bonus Offer
          </CardTitle>
        </CardHeader>

        <CardContent className="p-6 space-y-6">
          {/* Bookmaker Info */}
          <div className="text-center space-y-3">
            <div className="w-24 h-20 mx-auto bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center">
              <img
                src={`/placeholder.svg?height=60&width=80&text=${bookmaker.name}`}
                alt={`${bookmaker.name} logo`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <h3 className="text-2xl font-bold text-stone-black">{bookmaker.name}</h3>

            {/* Rating */}
            <div className="flex items-center justify-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(bookmaker.rating) ? "text-gold-glow fill-current" : "text-gray-300"
                  }`}
                />
              ))}
              <span className="ml-2 text-sm text-stone-black/70">({bookmaker.rating})</span>
            </div>
          </div>

          {/* Bonus Highlight */}
          <div className="bg-gradient-to-r from-emerald-green/10 to-gaelic-orange/10 rounded-lg p-4 border border-emerald-green/20">
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-green mb-2">{bookmaker.bonus}</div>
              <Badge className="bg-gaelic-orange text-pure-white">Limited Time Offer</Badge>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-2">
            <h4 className="font-semibold text-stone-black flex items-center">
              <Shield className="w-4 h-4 mr-2 text-emerald-green" />
              Why Choose {bookmaker.name}?
            </h4>
            {bookmaker.features.map((feature, idx) => (
              <div key={idx} className="flex items-center text-sm text-stone-black/80">
                <div className="w-2 h-2 bg-emerald-green rounded-full mr-2"></div>
                {feature}
              </div>
            ))}
          </div>

          {/* Terms */}
          <div className="bg-fog-gray rounded-lg p-3">
            <div className="flex items-start text-xs text-stone-black/70">
              <Clock className="w-3 h-3 mr-1 mt-0.5 flex-shrink-0" />
              <span>
                Terms apply. New customers only. Min deposit €10. Free bet expires in 7 days. 18+ only. Please gamble
                responsibly.
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button
              className="w-full bg-emerald-green hover:bg-emerald-green/90 text-pure-white font-bold py-3"
              onClick={() => window.open(bookmaker.url, "_blank")}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Claim Bonus Now
            </Button>
            <Button
              variant="outline"
              className="w-full border-emerald-green text-emerald-green hover:bg-emerald-green/10"
              onClick={onClose}
            >
              Maybe Later
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
