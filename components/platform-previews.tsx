"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Lock, TrendingUp, Users } from "lucide-react"

const platforms = [
  { name: "TikTok", icon: "📱", color: "text-primary" },
  { name: "LinkedIn", icon: "💼", color: "text-primary" },
  { name: "Reddit", icon: "🗨️", color: "text-primary" },
]

const mockInfluencers = [
  { name: "Mike Construction", handle: "@mikebuildsstuff", followers: "245K", engagement: "8.2%", platform: "TikTok" },
  {
    name: "Sarah Logistics Pro",
    handle: "@sarahlogistics",
    followers: "89K",
    engagement: "12.4%",
    platform: "LinkedIn",
  },
  { name: "u/TruckingLife", handle: "u/TruckingLife", followers: "156K", engagement: "15.1%", platform: "Reddit" },
  { name: "Heavy Equipment Joe", handle: "@heavyequipjoe", followers: "312K", engagement: "9.8%", platform: "TikTok" },
  { name: "Manufacturing Maven", handle: "@manufmaven", followers: "67K", engagement: "11.2%", platform: "LinkedIn" },
  {
    name: "u/ConstructionPro",
    handle: "u/ConstructionPro",
    followers: "203K",
    engagement: "13.7%",
    platform: "Reddit",
  },
  { name: "Crane Operator Daily", handle: "@cranedaily", followers: "178K", engagement: "7.9%", platform: "TikTok" },
]

export function PlatformPreviews() {
  const [showEmailModal, setShowEmailModal] = useState(false)

  return (
    <section className="border-b border-border">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Top influencers by platform</h2>
          <p className="text-lg text-muted-foreground text-pretty">Preview the top 10 creators in Construction</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {platforms.map((platform) => {
            const platformInfluencers = mockInfluencers.filter((inf) => inf.platform === platform.name).slice(0, 3)

            return (
              <Card key={platform.name} className="p-6 bg-card border-border">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{platform.icon}</span>
                  <h3 className="text-2xl font-bold">{platform.name}</h3>
                </div>

                <div className="space-y-4">
                  {platformInfluencers.map((influencer, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-secondary rounded-lg border border-border hover:border-primary transition-colors"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="font-semibold text-foreground">{influencer.name}</p>
                          <p className="text-sm text-muted-foreground">{influencer.handle}</p>
                        </div>
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">#{idx + 1}</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <Users className="h-4 w-4" />
                          {influencer.followers}
                        </span>
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <TrendingUp className="h-4 w-4" />
                          {influencer.engagement}
                        </span>
                      </div>
                    </div>
                  ))}

                  {/* Locked content preview */}
                  <div className="relative">
                    <div className="blur-sm pointer-events-none">
                      <div className="p-4 bg-secondary rounded-lg border border-border">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <p className="font-semibold">████████████</p>
                            <p className="text-sm text-muted-foreground">@████████</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-background/95 backdrop-blur-sm border border-primary rounded-lg p-4 text-center">
                        <Lock className="h-6 w-6 text-primary mx-auto mb-2" />
                        <p className="text-sm font-semibold mb-1">+7 more influencers</p>
                        <Button size="sm" onClick={() => setShowEmailModal(true)} className="mt-2">
                          Unlock Full List
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-4">Want to see all 200+ influencers across all platforms?</p>
          <Button size="lg" onClick={() => setShowEmailModal(true)}>
            Get Full Access
          </Button>
        </div>
      </div>

      {/* Simple email modal overlay */}
      {showEmailModal && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowEmailModal(false)}
        >
          <Card className="max-w-md w-full p-8 bg-card border-border" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-2xl font-bold mb-4">Get Full Access</h3>
            <p className="text-muted-foreground mb-6">
              Enter your email to unlock all 200+ influencers in your industry
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button type="submit" className="w-full" size="lg">
                Unlock Full Database
              </Button>
            </form>
            <button
              onClick={() => setShowEmailModal(false)}
              className="mt-4 text-sm text-muted-foreground hover:text-foreground w-full"
            >
              Maybe later
            </button>
          </Card>
        </div>
      )}
    </section>
  )
}
