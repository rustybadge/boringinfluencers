import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function EmailCapture() {
  return (
    <section className="border-b border-border">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <Card className="max-w-4xl mx-auto p-8 md:p-12 bg-card border-border text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Get the weekly Industry Radar</h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty">
            Stay updated with the latest trends and influencers in boring industries
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
            />
            <Button type="submit" size="lg" className="sm:w-auto">
              Subscribe
            </Button>
          </form>
          <p className="text-sm text-muted-foreground mt-4">Join 2,000+ marketers getting weekly insights</p>
        </Card>
      </div>
    </section>
  )
}
