"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    quote: "BetVictor pays fast, I trust them.",
    author: "Michael, Dublin",
  },
  {
    quote: "I switched from UK site to local Boyle — big difference.",
    author: "Sean, Cork",
  },
  {
    quote: "Been using BetFred for years. Their odds on GAA are always competitive.",
    author: "Liam, Galway",
  },
  {
    quote: "Spreadex has the best in-play betting for rugby matches.",
    author: "Conor, Limerick",
  },
  {
    quote: "The mobile app from BoyleSports makes betting on the go so easy.",
    author: "Aoife, Belfast",
  },
]

export function IrishBettorsSpeak() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            <span className="text-emerald-green">Real Irish</span>{" "}
            <span className="text-gaelic-orange">Bettors Speak</span>
          </h2>
          <p className="text-lg text-stone-black/70">Honest feedback from punters across Ireland</p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-stone-black" />
          </button>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="w-full flex-shrink-0 border border-gray-200 bg-white/90 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex">
                      <Quote className="w-12 h-12 text-emerald-green/30 flex-shrink-0 mr-4" />
                      <div>
                        <p className="text-xl text-stone-black mb-6">"{testimonial.quote}"</p>
                        <p className="text-stone-black/70 font-medium">— {testimonial.author}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-stone-black" />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-emerald-green" : "bg-gray-300"}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
