"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { AlertTriangle, CheckCircle } from "lucide-react"

const quizQuestions = [
  {
    id: "q1",
    question: "Do I bet out of boredom?",
    options: [
      { value: "never", label: "Never" },
      { value: "rarely", label: "Rarely" },
      { value: "sometimes", label: "Sometimes" },
      { value: "often", label: "Often" },
      { value: "always", label: "Always" },
    ],
  },
  {
    id: "q2",
    question: "Do I chase losses?",
    options: [
      { value: "never", label: "Never" },
      { value: "rarely", label: "Rarely" },
      { value: "sometimes", label: "Sometimes" },
      { value: "often", label: "Often" },
      { value: "always", label: "Always" },
    ],
  },
  {
    id: "q3",
    question: "Have I spent more than I planned?",
    options: [
      { value: "never", label: "Never" },
      { value: "rarely", label: "Rarely" },
      { value: "sometimes", label: "Sometimes" },
      { value: "often", label: "Often" },
      { value: "always", label: "Always" },
    ],
  },
]

const resultTypes = {
  healthy: {
    title: "Healthy Betting Habits",
    description:
      "You appear to have a healthy relationship with betting. Remember to keep it fun and continue setting limits.",
    icon: <CheckCircle className="w-12 h-12 text-emerald-green" />,
  },
  caution: {
    title: "Proceed with Caution",
    description:
      "Some of your betting habits could develop into problems. Consider setting stricter limits and taking breaks.",
    icon: <AlertTriangle className="w-12 h-12 text-gaelic-orange" />,
  },
  concern: {
    title: "Signs of Concern",
    description:
      "Your betting patterns show signs of potential problems. We recommend speaking with a gambling support specialist.",
    icon: <AlertTriangle className="w-12 h-12 text-red-500" />,
  },
}

export function GamblingQuiz() {
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [showResult, setShowResult] = useState(false)

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }))
  }

  const calculateResult = () => {
    const riskScore = Object.values(answers).reduce((score, answer) => {
      switch (answer) {
        case "never":
          return score + 0
        case "rarely":
          return score + 1
        case "sometimes":
          return score + 2
        case "often":
          return score + 3
        case "always":
          return score + 4
        default:
          return score
      }
    }, 0)

    const maxPossibleScore = quizQuestions.length * 4
    const percentage = (riskScore / maxPossibleScore) * 100

    if (percentage < 25) return "healthy"
    if (percentage < 60) return "caution"
    return "concern"
  }

  const handleSubmit = () => {
    setShowResult(true)
  }

  const resetQuiz = () => {
    setAnswers({})
    setShowResult(false)
  }

  const allQuestionsAnswered = quizQuestions.every((q) => answers[q.id])
  const resultType = calculateResult()

  return (
    <section className="py-20 bg-pure-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-stone-black mb-6">🧠 Gambling Quiz</h2>
          <p className="text-xl text-stone-black/70">"Am I Betting Too Much?"</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-2 border-emerald-green/20 shadow-lg">
            <CardHeader className="bg-emerald-green/10">
              <CardTitle className="text-2xl text-stone-black">Self-Assessment Quiz</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              {!showResult ? (
                <div className="space-y-8">
                  {quizQuestions.map((question) => (
                    <div key={question.id} className="space-y-4">
                      <h3 className="text-lg font-medium text-stone-black">❓ {question.question}</h3>
                      <RadioGroup
                        value={answers[question.id] || ""}
                        onValueChange={(value) => handleAnswerChange(question.id, value)}
                      >
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                          {question.options.map((option) => (
                            <div key={option.value} className="flex items-center space-x-2">
                              <RadioGroupItem
                                value={option.value}
                                id={`${question.id}-${option.value}`}
                                className="text-emerald-green"
                              />
                              <Label htmlFor={`${question.id}-${option.value}`} className="text-sm text-stone-black/70">
                                {option.label}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </RadioGroup>
                    </div>
                  ))}

                  <Button
                    onClick={handleSubmit}
                    disabled={!allQuestionsAnswered}
                    className="w-full bg-emerald-green hover:bg-emerald-green/90 text-pure-white font-bold py-4 text-lg"
                  >
                    See My Results
                  </Button>
                </div>
              ) : (
                <div className="space-y-6 text-center">
                  <div className="flex justify-center">{resultTypes[resultType].icon}</div>
                  <h3 className="text-2xl font-bold text-stone-black">{resultTypes[resultType].title}</h3>
                  <p className="text-stone-black/70">{resultTypes[resultType].description}</p>

                  <div className="pt-4 border-t border-emerald-green/20">
                    <p className="text-sm text-stone-black/70 mb-4">
                      If you're concerned about your gambling habits, please reach out for help:
                    </p>
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      <a
                        href="https://www.gamblersanonymous.ie"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-emerald-green hover:underline p-2 border border-emerald-green/20 rounded"
                      >
                        Gamblers Anonymous Ireland
                      </a>
                      <a
                        href="https://www.gamcare.org.uk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-emerald-green hover:underline p-2 border border-emerald-green/20 rounded"
                      >
                        GamCare
                      </a>
                    </div>
                  </div>

                  <Button onClick={resetQuiz} className="bg-gaelic-orange hover:bg-gaelic-orange/90 text-pure-white">
                    Retake Quiz
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
