"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const industries = [
  "Construction",
  "Haulage",
  "Logistics",
  "Manufacturing",
  "Cleaning",
  "Security",
  "Storage",
  "Raw Materials",
  "Utilities",
]

export function IndustrySelector() {
  const [selectedIndustry, setSelectedIndustry] = useState("Construction")

  return (
    <section className="border-b border-border">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">One platform. All industries.</h2>
          <p className="text-lg text-muted-foreground text-pretty">See who's making waves in your sector</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {industries.map((industry) => (
            <Button
              key={industry}
              variant={selectedIndustry === industry ? "default" : "outline"}
              onClick={() => setSelectedIndustry(industry)}
              className="text-base"
            >
              {industry}
            </Button>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm text-muted-foreground">👆 Select an industry to see live preview data</p>
        </div>
      </div>
    </section>
  )
}
