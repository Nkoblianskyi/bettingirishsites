"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X, Cookie } from "lucide-react"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookie-consent")
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setIsVisible(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <Card className="max-w-4xl mx-auto border-2 border-emerald-green/20 shadow-xl bg-white/95 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <Cookie className="w-8 h-8 text-gaelic-orange" />
            </div>
            <div className="flex-grow">
              <h3 className="text-lg font-bold text-stone-black mb-2">🍪 We Use Cookies</h3>
              <p className="text-stone-black/70 text-sm mb-4">
                We use cookies to enhance your browsing experience, provide personalized content, and analyze our
                traffic. By clicking "Accept All", you consent to our use of cookies. You can manage your preferences or
                learn more in our privacy policy.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button onClick={acceptCookies} className="bg-emerald-green hover:bg-emerald-green/90 text-pure-white">
                  Accept All Cookies
                </Button>
                <Button
                  onClick={declineCookies}
                  variant="outline"
                  className="border-emerald-green text-emerald-green hover:bg-emerald-green/10"
                >
                  Decline
                </Button>
                <Button variant="ghost" className="text-stone-black/70 hover:text-stone-black">
                  Cookie Settings
                </Button>
              </div>
            </div>
            <button onClick={declineCookies} className="flex-shrink-0 text-stone-black/50 hover:text-stone-black">
              <X className="w-5 h-5" />
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
