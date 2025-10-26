import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative border-b border-border">
      <div className="container mx-auto px-4 py-24 md:py-32 lg:py-40">
        <div className="max-w-5xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-balance">
            Find the hidden influencers in <span className="text-primary">boring industries</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl text-pretty leading-relaxed">
            Discover TikTok creators, LinkedIn thought-leaders, and Reddit voices that your audience already follows.
            From construction to logistics—find the right influencers before your competitors do.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-lg px-8 py-6 group">
              See Top Influencers
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent">
              How It Works
            </Button>
          </div>
        </div>
      </div>

      {/* Trusted by badge */}
      <div className="container mx-auto px-4 pb-12">
        <p className="text-sm text-muted-foreground">
          Trusted by <span className="text-foreground font-semibold">500+</span> companies in boring industries
        </p>
      </div>
    </section>
  )
}
