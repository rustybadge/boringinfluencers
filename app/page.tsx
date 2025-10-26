import { Hero } from "@/components/hero"
import { IndustrySelector } from "@/components/industry-selector"
import { PlatformPreviews } from "@/components/platform-previews"
import { UseCases } from "@/components/use-cases"
import { EmailCapture } from "@/components/email-capture"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <IndustrySelector />
      <PlatformPreviews />
      <UseCases />
      <EmailCapture />
      <Footer />
    </main>
  )
}
