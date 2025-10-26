import { Card } from "@/components/ui/card"

const useCases = [
  {
    emoji: "🎪",
    title: "Preparing for an exhibition",
    description:
      "I'm a construction marketing manager planning our booth for Bauma. I need to know what videos, hashtags, and personalities are trending right now so our content feels current and our stand draws attention.",
  },
  {
    emoji: "🚛",
    title: "Launching a new product",
    description:
      "We're introducing a new haulage service. I want to find the TikTok and LinkedIn voices that truckers already follow, so we can partner with them to get authentic reach instead of wasting ad spend.",
  },
  {
    emoji: "🏭",
    title: "Spotting industry trends",
    description:
      "As a manufacturing product manager, I need to see what tools and innovations people are talking about online. If I catch these trends early, I can validate our roadmap and pitch the right features.",
  },
  {
    emoji: "👩‍💼",
    title: "Recruiting talent",
    description:
      "Our logistics company struggles to attract younger drivers. I want to identify the influencers they already trust, so we can collaborate on content that makes us look like the employer of choice.",
  },
  {
    emoji: "🎤",
    title: "Organizing an event",
    description:
      "I'm running a wastewater management conference. Instead of the same old speakers, I want to invite the LinkedIn thought-leaders who actually get engagement from operators and engineers.",
  },
]

export function UseCases() {
  return (
    <section className="border-b border-border">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Who uses this?</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Real scenarios from marketers in boring industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, idx) => (
            <Card key={idx} className="p-6 bg-card border-border hover:border-primary transition-colors group">
              <div className="text-4xl mb-4">{useCase.emoji}</div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{useCase.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-pretty">"{useCase.description}"</p>
            </Card>
          ))}

          {/* CTA Card */}
          <Card className="p-6 bg-primary text-primary-foreground border-primary flex flex-col justify-center items-center text-center">
            <h3 className="text-2xl font-bold mb-3">Sound familiar?</h3>
            <p className="mb-6 leading-relaxed">Get instant access to influencers in your boring industry</p>
            <button className="px-6 py-3 bg-background text-foreground rounded-lg font-semibold hover:bg-secondary transition-colors">
              Start Exploring
            </button>
          </Card>
        </div>
      </div>
    </section>
  )
}
