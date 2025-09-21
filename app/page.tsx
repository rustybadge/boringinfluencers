"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"

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

const mockData = {
  Construction: {
    tiktokVideos: [
      { title: "Heavy machinery operator tips", creator: "@constructionpro", views: "2.3M", likes: "180K" },
      { title: "Safety protocols on site", creator: "@safetyfirst_build", views: "1.8M", likes: "145K" },
      { title: "Concrete pouring techniques", creator: "@concrete_king", views: "1.2M", likes: "98K" },
      { title: "Blueprint reading made easy", creator: "@blueprint_boss", views: "950K", likes: "76K" },
    ],
    tiktokInfluencers: [
      { name: "Mike Construction", handle: "@constructionpro", followers: "850K", engagement: "8.2%" },
      { name: "Sarah Safety", handle: "@safetyfirst_build", followers: "620K", engagement: "7.8%" },
      { name: "Tony Tools", handle: "@tooltime_tony", followers: "480K", engagement: "9.1%" },
      { name: "Carlos Concrete", handle: "@concrete_king", followers: "390K", engagement: "6.9%" },
    ],
    linkedinPeople: [
      { name: "David Johnson", title: "Construction Industry Analyst", followers: "45K" },
      { name: "Lisa Chen", title: "Heavy Equipment Specialist", followers: "38K" },
      { name: "Mark Rodriguez", title: "Site Safety Director", followers: "32K" },
      { name: "Jennifer Walsh", title: "Project Management Expert", followers: "28K" },
    ],
  },
  Logistics: {
    tiktokVideos: [
      { title: "Warehouse efficiency hacks", creator: "@logistics_life", views: "3.1M", likes: "220K" },
      { title: "Supply chain explained", creator: "@chain_master", views: "2.7M", likes: "195K" },
      { title: "Forklift operator skills", creator: "@forklift_pro", views: "1.9M", likes: "156K" },
      { title: "Inventory management tips", creator: "@warehouse_wizard", views: "1.4M", likes: "112K" },
    ],
    tiktokInfluencers: [
      { name: "Alex Logistics", handle: "@logistics_life", followers: "920K", engagement: "7.5%" },
      { name: "Emma Supply", handle: "@chain_master", followers: "780K", engagement: "8.9%" },
      { name: "Jake Warehouse", handle: "@warehouse_wizard", followers: "650K", engagement: "6.8%" },
      { name: "Maria Transport", handle: "@transport_queen", followers: "540K", engagement: "7.2%" },
    ],
    linkedinPeople: [
      { name: "Jennifer Walsh", title: "Supply Chain Director", followers: "52K" },
      { name: "Robert Kim", title: "Logistics Operations Manager", followers: "41K" },
      { name: "Amanda Foster", title: "Warehouse Optimization Expert", followers: "36K" },
      { name: "Michael Torres", title: "Transportation Analyst", followers: "31K" },
    ],
  },
  Manufacturing: {
    tiktokVideos: [
      { title: "CNC machining precision", creator: "@cnc_master", views: "2.8M", likes: "210K" },
      { title: "Quality control processes", creator: "@quality_queen", views: "2.1M", likes: "165K" },
      { title: "Lean manufacturing tips", creator: "@lean_legend", views: "1.7M", likes: "134K" },
      { title: "Factory automation demo", creator: "@auto_factory", views: "1.3M", likes: "98K" },
    ],
    tiktokInfluencers: [
      { name: "Tom Manufacturing", handle: "@cnc_master", followers: "760K", engagement: "8.7%" },
      { name: "Rachel Quality", handle: "@quality_queen", followers: "680K", engagement: "7.9%" },
      { name: "Steve Lean", handle: "@lean_legend", followers: "590K", engagement: "8.1%" },
      { name: "Anna Automation", handle: "@auto_factory", followers: "450K", engagement: "7.4%" },
    ],
    linkedinPeople: [
      { name: "Patricia Williams", title: "Manufacturing Operations Director", followers: "48K" },
      { name: "James Anderson", title: "Quality Assurance Manager", followers: "42K" },
      { name: "Susan Miller", title: "Lean Manufacturing Consultant", followers: "39K" },
      { name: "Kevin Brown", title: "Production Planning Specialist", followers: "35K" },
    ],
  },
}

export default function HomePage() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("")
  const [email, setEmail] = useState("")

  const currentData = selectedIndustry ? mockData[selectedIndustry as keyof typeof mockData] : null

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="px-6 py-8 max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-medium text-black">Boring Influencers</div>
        <Button
          variant="outline"
          className="rounded-full border-black text-black hover:bg-black hover:text-white bg-transparent"
        >
          Are you boring? →
        </Button>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-20 max-w-7xl mx-auto text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-light leading-tight text-black mb-6">
            Find the hidden influencers in your industry.
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover TikTok creators, LinkedIn thought-leaders, and industry voices that your audience already follows. 
            From construction to logistics—find the right influencers before your competitors do.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-black text-white hover:bg-gray-800 rounded-full px-8 py-4 text-lg"
              onClick={() => document.getElementById("industry-selector")?.scrollIntoView({ behavior: "smooth" })}
            >
              Start for free
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-black text-black hover:bg-black hover:text-white bg-transparent px-8 py-4 text-lg"
            >
              Contact sales
            </Button>
          </div>
          <p className="text-sm text-gray-500">Trusted by 500+ companies in boring industries</p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-6 mb-20">
        <div className="max-w-7xl mx-auto">
          <img
            src="/industrial-welding-sparks-black-and-white-photogra.jpg"
            alt="Industrial work with sparks"
            className="w-full h-[600px] object-cover grayscale"
          />
        </div>
      </section>

      {/* Industry Selector */}
      <section id="industry-selector" className="px-6 py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-light mb-4 text-black">One platform. All industries.</h2>
          <p className="text-lg text-gray-600 mb-12">
            See who's making waves in your sector. Get instant access to trending content, top influencers, and industry thought leaders.
          </p>

          <div className="max-w-md mx-auto mb-16">
            <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
              <SelectTrigger className="w-full h-14 text-lg border-2 border-black rounded-full">
                <SelectValue placeholder="Select an industry to explore" />
              </SelectTrigger>
              <SelectContent>
                {industries.map((industry) => (
                  <SelectItem key={industry} value={industry} className="text-lg py-3">
                    {industry}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {currentData && (
            <div className="space-y-12">
              <div className="text-center">
                <h3 className="text-2xl font-light text-black mb-2">Here's what's happening in {selectedIndustry}</h3>
                <p className="text-gray-600">Live data from our industry radar</p>
              </div>

              <div className="max-w-4xl mx-auto space-y-12">
                {/* TikTok Videos */}
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-8">
                    <div className="flex justify-between items-center mb-8">
                      <h3 className="text-2xl font-medium text-black">🎬 Trending Videos</h3>
                      <Button
                        variant="outline"
                        className="border-black text-black hover:bg-black hover:text-white bg-transparent rounded-full"
                        onClick={() => (window.location.href = `/${selectedIndustry.toLowerCase()}/dashboard`)}
                      >
                        View All Videos →
                      </Button>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      {currentData.tiktokVideos.map((video, index) => (
                        <div key={index} className="border border-gray-100 rounded-lg p-4">
                          <div className="flex gap-4 mb-3">
                            <div className="w-20 h-20 bg-gray-200 rounded-lg flex-shrink-0 flex items-center justify-center">
                              <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                                <div className="w-0 h-0 border-l-[8px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
                              </div>
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium text-black mb-2 leading-snug">{video.title}</h4>
                              <p className="text-sm text-gray-600 mb-2">{video.creator}</p>
                              <div className="flex gap-4 text-xs text-gray-500">
                                <span>{video.views} views</span>
                                <span>{video.likes} likes</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* TikTok Influencers */}
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-8">
                    <div className="flex justify-between items-center mb-8">
                      <h3 className="text-2xl font-medium text-black">👑 Top Creators</h3>
                      <Button
                        variant="outline"
                        className="border-black text-black hover:bg-black hover:text-white bg-transparent rounded-full"
                        onClick={() => (window.location.href = `/${selectedIndustry.toLowerCase()}/dashboard`)}
                      >
                        View All Creators →
                      </Button>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      {currentData.tiktokInfluencers.map((influencer, index) => (
                        <div key={index} className="border border-gray-100 rounded-lg p-4">
                          <div className="flex gap-4 items-start">
                            <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex-shrink-0 flex items-center justify-center text-white font-medium text-lg">
                              {influencer.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium text-black mb-1">{influencer.name}</h4>
                              <p className="text-sm text-gray-600 mb-2">{influencer.handle}</p>
                              <div className="flex gap-4 text-xs text-gray-500">
                                <span>{influencer.followers} followers</span>
                                <span>{influencer.engagement} engagement</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* LinkedIn People */}
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-8">
                    <div className="flex justify-between items-center mb-8">
                      <h3 className="text-2xl font-medium text-black">💼 Industry Leaders</h3>
                      <Button
                        variant="outline"
                        className="border-black text-black hover:bg-black hover:text-white bg-transparent rounded-full"
                        onClick={() => (window.location.href = `/${selectedIndustry.toLowerCase()}/dashboard`)}
                      >
                        View All Leaders →
                      </Button>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      {currentData.linkedinPeople.map((person, index) => (
                        <div key={index} className="border border-gray-100 rounded-lg p-4">
                          <div className="flex gap-4 items-start">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex-shrink-0 flex items-center justify-center text-white font-medium text-lg">
                              {person.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium text-black mb-1">{person.name}</h4>
                              <p className="text-sm text-gray-600 mb-2 leading-snug">{person.title}</p>
                              <p className="text-xs text-gray-500">{person.followers} followers</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center pt-8">
                <p className="text-lg text-gray-600 mb-6">
                  This is just a preview. Get access to the full directory with detailed analytics, contact information,
                  and weekly updates.
                </p>
                <Button size="lg" className="bg-black text-white hover:bg-gray-800 rounded-full px-12 py-4 text-lg">
                  Unlock Full Access →
                </Button>
              </div>
            </div>
          )}

          {!selectedIndustry && (
            <div className="text-center py-16">
              <div className="text-6xl mb-6">🏭</div>
              <p className="text-xl text-gray-500">Select an industry above to see live data</p>
            </div>
          )}
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4 text-black">Get to know Boring Influencers.</h2>
            <p className="text-lg text-gray-600">AI-powered influencer discovery that delivers results.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-medium mb-3 text-black">Influencer Discovery</h3>
              <p className="text-gray-600">Find the right creators before your competitors do</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-medium mb-3 text-black">Trend Analysis</h3>
              <p className="text-gray-600">Track what's trending in your industry in real-time</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-medium mb-3 text-black">Campaign Planning</h3>
              <p className="text-gray-600">Match creators to your specific campaign goals</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-medium mb-3 text-black">Performance Benchmarks</h3>
              <p className="text-gray-600">See how your content stacks up against industry leaders</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="text-xl font-medium mb-3 text-black">Employer Branding</h3>
              <p className="text-gray-600">Find creators who can help with recruitment content</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛠</span>
              </div>
              <h3 className="text-xl font-medium mb-3 text-black">Product Intelligence</h3>
              <p className="text-gray-600">Track mentions of your tools and equipment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Uses This */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-light mb-12 text-black text-center">Who uses this?</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-black pl-6 py-4">
              <h3 className="text-xl font-medium mb-3 text-black">1. 🎪 Preparing for an exhibition</h3>
              <p className="text-gray-600 leading-relaxed italic">
                "I'm a construction marketing manager planning our booth for Bauma. I need to know what videos, hashtags, and personalities are trending right now so our content feels current and our stand draws attention."
              </p>
            </div>
            
            <div className="border-l-4 border-black pl-6 py-4">
              <h3 className="text-xl font-medium mb-3 text-black">2. 🚛 Launching a new product</h3>
              <p className="text-gray-600 leading-relaxed italic">
                "We're introducing a new haulage service. I want to find the TikTok and LinkedIn voices that truckers already follow, so we can partner with them to get authentic reach instead of wasting ad spend."
              </p>
            </div>
            
            <div className="border-l-4 border-black pl-6 py-4">
              <h3 className="text-xl font-medium mb-3 text-black">3. 🏭 Spotting industry trends</h3>
              <p className="text-gray-600 leading-relaxed italic">
                "As a manufacturing product manager, I need to see what tools and innovations people are talking about online. If I catch these trends early, I can validate our roadmap and pitch the right features."
              </p>
            </div>
            
            <div className="border-l-4 border-black pl-6 py-4">
              <h3 className="text-xl font-medium mb-3 text-black">4. 👩‍💼 Recruiting talent</h3>
              <p className="text-gray-600 leading-relaxed italic">
                "Our logistics company struggles to attract younger drivers. I want to identify the influencers they already trust, so we can collaborate on content that makes us look like the employer of choice."
              </p>
            </div>
            
            <div className="border-l-4 border-black pl-6 py-4">
              <h3 className="text-xl font-medium mb-3 text-black">5. 🎤 Organizing an event</h3>
              <p className="text-gray-600 leading-relaxed italic">
                "I'm running a wastewater management conference. Instead of the same old speakers, I want to invite the LinkedIn thought-leaders who actually get engagement from operators and engineers."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-light mb-4 text-black">One plan. No hassle.</h2>
          <p className="text-lg text-gray-600 mb-12">Enjoy unlimited access to all industries for one simple price.</p>

          <div className="bg-gray-50 rounded-2xl p-12 mb-12">
            <div className="text-6xl font-light text-black mb-4">$149</div>
            <div className="text-xl text-gray-600 mb-8">Per month</div>
            
            <div className="space-y-4 text-left max-w-md mx-auto mb-8">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-gray-700">Access to all industries</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-gray-700">Weekly radar updates</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-gray-700">Top 200 influencers per industry</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-gray-700">Advanced analytics</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-gray-700">Cancel anytime</span>
              </div>
            </div>

            <Button size="lg" className="bg-black text-white hover:bg-gray-800 rounded-full px-12 py-4 text-lg">
              Start for free
            </Button>
          </div>

          <p className="text-sm text-gray-500">*Subject to our terms of service</p>
        </div>
      </section>


      {/* Email Signup */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-6 text-black">Get the weekly Industry Radar</h2>
          <p className="text-lg text-gray-600 mb-8">
            Stay updated with the latest trends and influencers in boring industries
          </p>

          <div className="flex gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12 border-black"
            />
            <Button className="bg-black text-white hover:bg-gray-800 px-8">Subscribe</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-xl font-medium text-black mb-4">Boring Influencers</div>
          <p className="text-gray-600">Making boring industries less boring, one influencer at a time.</p>
        </div>
      </footer>
    </div>
  )
}
