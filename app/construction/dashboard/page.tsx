"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

const constructionData = {
  // Hero Snapshot Data
  monthlySnapshot: {
    topHashtags: [
      { tag: "#SafetyFirst", growth: "+45%", mentions: "2.3K" },
      { tag: "#ConcretePouring", growth: "+22%", mentions: "1.8K" },
      { tag: "#ExcavatorTips", growth: "+18%", mentions: "1.2K" },
    ],
    topCreator: {
      name: "Sarah Safety",
      handle: "@safetyfirst_build",
      engagement: "9.2%",
      followers: "620K",
    },
    topPost: {
      title: "Heavy machinery operator tips",
      creator: "@constructionpro",
      reach: "2.3M",
      engagement: "8.2%",
    },
  },
  
  // Trending Topics
  trendingTopics: [
    { hashtag: "#SafetyFirst", growth: "+45%", posts: "2.3K", trend: "up" },
    { hashtag: "#ConcretePouring", growth: "+22%", posts: "1.8K", trend: "up" },
    { hashtag: "#ExcavatorTips", growth: "+18%", posts: "1.2K", trend: "up" },
    { hashtag: "#WeldingTips", growth: "+15%", posts: "980", trend: "up" },
    { hashtag: "#BlueprintReading", growth: "+12%", posts: "750", trend: "up" },
    { hashtag: "#CraneSafety", growth: "-8%", posts: "420", trend: "down" },
  ],
  
  // Creator Match Data
  creatorMatch: {
    awareness: [
      { name: "Mike Construction", handle: "@constructionpro", followers: "850K", engagement: "6.2%", reach: "2.3M", cost: "$$$" },
      { name: "Lisa Crane", handle: "@crane_master", followers: "340K", engagement: "7.5%", reach: "890K", cost: "$$" },
    ],
    trust: [
      { name: "Sarah Safety", handle: "@safetyfirst_build", followers: "620K", engagement: "9.2%", reach: "1.8M", cost: "$$$" },
      { name: "Tony Tools", handle: "@tooltime_tony", followers: "480K", engagement: "9.1%", reach: "1.2M", cost: "$$" },
    ],
    costEffective: [
      { name: "David Foundation", handle: "@foundation_pro", followers: "290K", engagement: "8.3%", reach: "780K", cost: "$" },
      { name: "Carlos Concrete", handle: "@concrete_king", followers: "390K", engagement: "6.9%", reach: "950K", cost: "$$" },
    ],
  },
  
  // Benchmarks
  benchmarks: {
    tiktok: {
      avgLikes: "85K",
      avgViews: "1.2M",
      topQuartile: { likes: "150K", views: "2.1M" },
      bottomQuartile: { likes: "25K", views: "400K" },
    },
    linkedin: {
      avgLikes: "45",
      avgViews: "2.1K",
      topQuartile: { likes: "120", views: "5.8K" },
      bottomQuartile: { likes: "12", views: "800" },
    },
  },
  
  // Employer Brand Watch
  employerBrand: [
    { company: "Caterpillar", engagement: "15.2K", trend: "+23%", topContent: "Apprenticeship program highlights" },
    { company: "John Deere", engagement: "12.8K", trend: "+18%", topContent: "Innovation in construction tech" },
    { company: "Volvo CE", engagement: "9.4K", trend: "+12%", topContent: "Safety culture showcase" },
  ],
  
  // Product Mentions
  productMentions: [
    { product: "Skid Steer Attachments", mentions: "120", growth: "+30%", sentiment: "positive" },
    { product: "Concrete Mixers", mentions: "95", growth: "+25%", sentiment: "positive" },
    { product: "Safety Harnesses", mentions: "78", growth: "+18%", sentiment: "positive" },
    { product: "Crane Systems", mentions: "65", growth: "-5%", sentiment: "neutral" },
  ],
  
  // Thought Leaders
  thoughtLeaders: {
    established: [
      { name: "David Johnson", title: "Construction Industry Analyst", followers: "45K", engagement: "+12%", company: "BuildTech Solutions" },
      { name: "Lisa Chen", title: "Heavy Equipment Specialist", followers: "38K", engagement: "+8%", company: "MegaConstruct Corp" },
    ],
    rising: [
      { name: "Amanda Foster", title: "Construction Technology Consultant", followers: "22K", engagement: "+35%", company: "TechBuild Consulting" },
      { name: "Robert Kim", title: "Structural Engineer", followers: "25K", engagement: "+28%", company: "SteelFrame Engineering" },
    ],
  },
}

export default function ConstructionDashboard() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterCategory, setFilterCategory] = useState("all")

  // Simple, achievable data structure
  const simpleData = {
    creators: [
      { name: "Mike Construction", handle: "@constructionpro", followers: "850K", engagement: "8.2%", category: "Equipment", platform: "TikTok" },
      { name: "Sarah Safety", handle: "@safetyfirst_build", followers: "620K", engagement: "7.8%", category: "Safety", platform: "TikTok" },
      { name: "Tony Tools", handle: "@tooltime_tony", followers: "480K", engagement: "9.1%", category: "Tools", platform: "TikTok" },
      { name: "Carlos Concrete", handle: "@concrete_king", followers: "390K", engagement: "6.9%", category: "Materials", platform: "TikTok" },
      { name: "David Johnson", title: "Construction Industry Analyst", followers: "45K", engagement: "12%", category: "Analysis", platform: "LinkedIn", company: "BuildTech Solutions" },
      { name: "Lisa Chen", title: "Heavy Equipment Specialist", followers: "38K", engagement: "8%", category: "Equipment", platform: "LinkedIn", company: "MegaConstruct Corp" },
    ],
    trendingHashtags: [
      { tag: "#SafetyFirst", posts: "2.3K", trend: "up" },
      { tag: "#ConcretePouring", posts: "1.8K", trend: "up" },
      { tag: "#ExcavatorTips", posts: "1.2K", trend: "up" },
      { tag: "#WeldingTips", posts: "980", trend: "up" },
    ],
    topContent: [
      { title: "Heavy machinery operator tips", creator: "@constructionpro", views: "2.3M", likes: "180K", platform: "TikTok" },
      { title: "Safety protocols on site", creator: "@safetyfirst_build", views: "1.8M", likes: "145K", platform: "TikTok" },
      { title: "Complete Guide to Construction Project Management", creator: "BuildMaster Academy", views: "1.2M", likes: "45K", platform: "YouTube" },
    ]
  }

  const filteredCreators = simpleData.creators.filter(creator => 
    (creator.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
     creator.handle?.toLowerCase().includes(searchTerm.toLowerCase()) ||
     creator.title?.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (filterCategory === "all" || creator.category.toLowerCase() === filterCategory.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="px-6 py-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              onClick={() => (window.location.href = "/")}
              className="text-gray-600 hover:text-black"
            >
              ← Back
            </Button>
            <div>
              <h1 className="text-2xl font-medium text-black">Construction Industry Directory</h1>
              <p className="text-gray-600">Key influencers and content creators in construction</p>
            </div>
          </div>
          <Button
            variant="outline"
            className="rounded-full border-black text-black hover:bg-black hover:text-white bg-transparent"
          >
            Export List →
          </Button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Simple Hero Section */}
        <Card className="mb-8 border-0 shadow-sm bg-gray-50">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-light text-black mb-2">Construction Influencers</h2>
              <p className="text-gray-600">Discover the voices shaping construction industry conversations</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-lg font-medium text-black mb-4">🔥 Trending Hashtags</h3>
                <div className="space-y-2">
                  {simpleData.trendingHashtags.map((hashtag, index) => (
                    <div key={index} className="flex justify-between items-center p-2 bg-white rounded-lg border">
                      <span className="font-medium">{hashtag.tag}</span>
                      <Badge variant="secondary">{hashtag.posts} posts</Badge>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-medium text-black mb-4">👑 Top Creator</h3>
                <div className="p-4 bg-white rounded-lg border">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full mx-auto mb-3 flex items-center justify-center text-white font-medium text-xl">
                    MC
                  </div>
                  <h4 className="font-medium text-black">Mike Construction</h4>
                  <p className="text-sm text-gray-600">@constructionpro</p>
                  <Badge variant="secondary" className="mt-2">8.2% engagement</Badge>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-medium text-black mb-4">📈 Top Content</h3>
                <div className="p-4 bg-white rounded-lg border">
                  <h4 className="font-medium text-black text-sm mb-2">Heavy machinery operator tips</h4>
                  <p className="text-sm text-gray-600 mb-2">@constructionpro</p>
                  <div className="flex justify-between text-sm">
                    <span>2.3M views</span>
                    <span>180K likes</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Search and Filter */}
        <div className="mb-8 flex gap-4 items-center">
          <Input
            placeholder="Search creators, titles, or handles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-md border-gray-300"
          />
          <Select value={filterCategory} onValueChange={setFilterCategory}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="equipment">Equipment</SelectItem>
              <SelectItem value="safety">Safety</SelectItem>
              <SelectItem value="tools">Tools</SelectItem>
              <SelectItem value="materials">Materials</SelectItem>
              <SelectItem value="analysis">Analysis</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Creators Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCreators.map((creator, index) => (
            <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex gap-4 items-start mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex-shrink-0 flex items-center justify-center text-white font-medium">
                    {creator.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-black">{creator.name}</h3>
                    <p className="text-sm text-gray-600">{creator.handle || creator.title}</p>
                    {creator.company && <p className="text-xs text-gray-500">{creator.company}</p>}
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Followers:</span>
                    <span className="font-medium">{creator.followers}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Engagement:</span>
                    <span className="font-medium">{creator.engagement}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Platform:</span>
                    <Badge variant="outline" className="text-xs">{creator.platform}</Badge>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full text-sm">
                  View Profile →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCreators.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No creators found matching your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}
