"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
      <div className="bg-green-600 text-white p-4 shadow-lg">
        <Button className="w-full bg-white text-green-600 hover:bg-gray-100 font-bold">Claim Bonus Now 🍀</Button>
      </div>
    </div>
  )
}
