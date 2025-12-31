'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import {
  Newspaper,
  Calendar,
  ArrowRight,
  Award,
  Rocket,
  Users,
  TrendingUp,
  Sparkles,
  Bell,
  Filter,
} from 'lucide-react'

const categories = [
  { name: 'All', value: 'all', count: 24 },
  { name: 'Announcements', value: 'announcements', count: 8 },
  { name: 'Events', value: 'events', count: 6 },
  { name: 'Startups', value: 'startups', count: 5 },
  { name: 'Research', value: 'research', count: 5 },
]

const featuredNews = {
  category: 'Major Announcement',
  title: 'IIT Jodhpur Tech Park Secures ₹100 Crore Investment for Expansion',
  excerpt:
    'The Technology Park announces major expansion plans with significant funding from government and private investors to triple its capacity and support 200+ startups by 2026.',
  date: 'December 28, 2024',
  readTime: '5 min read',
  image: 'placeholder',
}

const newsArticles = [
  {
    category: 'Startup Success',
    title: 'AgriTech Startup Raises ₹15 Crore Series A Funding',
    excerpt:
      'Tech Park incubated startup secures major funding round to expand AI-powered precision farming solutions across India.',
    date: 'December 25, 2024',
    readTime: '3 min read',
    image: 'placeholder',
    icon: Rocket,
  },
  {
    category: 'Research',
    title: 'Breakthrough in Solar Energy Technology',
    excerpt:
      'Collaborative research project develops 30% more efficient solar panels designed for desert conditions.',
    date: 'December 22, 2024',
    readTime: '4 min read',
    image: 'placeholder',
    icon: Award,
  },
  {
    category: 'Event',
    title: 'Annual Innovation Summit 2025 Announced',
    excerpt:
      'Two-day summit bringing together 500+ entrepreneurs, investors, and innovators to showcase cutting-edge technologies.',
    date: 'December 20, 2024',
    readTime: '2 min read',
    image: 'placeholder',
    icon: Users,
  },
  {
    category: 'Partnership',
    title: 'Strategic Partnership with Leading Automotive Giant',
    excerpt:
      'New collaboration aims to develop smart manufacturing and IoT solutions for the automotive industry.',
    date: 'December 18, 2024',
    readTime: '3 min read',
    image: 'placeholder',
    icon: TrendingUp,
  },
  {
    category: 'Announcement',
    title: 'New Co-Working Spaces Now Open',
    excerpt:
      'State-of-the-art co-working facility with 100+ workstations inaugurated to support growing startup community.',
    date: 'December 15, 2024',
    readTime: '2 min read',
    image: 'placeholder',
    icon: Rocket,
  },
  {
    category: 'Achievement',
    title: 'Tech Park Startups Win National Innovation Awards',
    excerpt:
      'Three incubated startups receive prestigious recognition for their innovative solutions in healthcare and education.',
    date: 'December 12, 2024',
    readTime: '4 min read',
    image: 'placeholder',
    icon: Award,
  },
]

export default function NewsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-cream via-cream-dark to-sandstone-light dark:from-umber dark:via-umber-light dark:to-umber">
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `linear-gradient(rgba(201, 162, 39, 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(201, 162, 39, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />

        <div className="relative px-4 sm:px-6 lg:px-0 lg:max-w-6xl lg:mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 px-4 py-2">
              <Newspaper className="w-4 h-4 mr-2" />
              Latest Updates
            </Badge>
            <h1 className="heading-display mb-6">
              News & <span className="text-gradient">Announcements</span>
            </h1>
            <p className="body-large text-foreground/75 mb-8 text-justify">
              Stay updated with the latest happenings, achievements, and
              announcements from IIT Jodhpur Technology Park. Discover success
              stories, upcoming events, and breakthrough innovations.
            </p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="relative -mt-16 z-20 px-4 sm:px-6 lg:px-0 lg:max-w-6xl lg:mx-auto mb-12">
        <Card className="overflow-hidden hover:elevation-3 transition-all group">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image Side */}
            <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <Sparkles className="w-24 h-24 text-primary/30" />
              </div>
              <Badge className="absolute top-6 left-6 bg-primary text-primary-foreground">
                Featured
              </Badge>
            </div>

            {/* Content Side */}
            <CardContent className="p-8 lg:p-10 flex flex-col justify-center">
              <Badge variant="outline" className="mb-4 w-fit">
                {featuredNews.category}
              </Badge>
              <h2 className="heading-2 mb-4 group-hover:text-primary transition-colors">
                {featuredNews.title}
              </h2>
              <p className="text-foreground/70 leading-relaxed mb-6 text-justify">
                {featuredNews.excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  <span>{featuredNews.date}</span>
                </div>
                <span>•</span>
                <span>{featuredNews.readTime}</span>
              </div>
              <Button asChild className="w-fit rounded-full">
                <Link href="/news/featured">
                  Read Full Story
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </CardContent>
          </div>
        </Card>
      </section>

      {/* Categories Filter */}
      <section className="section-padding bg-background pt-8">
        <div className="px-4 sm:px-6 lg:px-0 lg:max-w-6xl lg:mx-auto">
          <div className="flex flex-wrap items-center gap-3 mb-12">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Filter className="w-4 h-4" />
              <span className="text-sm font-medium">Filter by:</span>
            </div>
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={category.value === 'all' ? 'default' : 'outline'}
                size="sm"
                className="rounded-full"
              >
                {category.name}
                <Badge
                  variant="secondary"
                  className="ml-2 rounded-full px-2 py-0 text-xs"
                >
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>

          {/* News Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article, index) => (
              <Card
                key={index}
                className="overflow-hidden group hover:elevation-2 transition-all"
              >
                {/* Article Image */}
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <article.icon className="w-16 h-16 text-primary/30" />
                  </div>
                  <Badge className="absolute top-4 left-4 bg-card/90 backdrop-blur-sm text-xs">
                    {article.category}
                  </Badge>
                </div>

                <CardContent className="p-6">
                  <h3 className="heading-4 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-foreground/70 leading-relaxed mb-4 line-clamp-3 text-justify">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{article.date}</span>
                    </div>
                    <Link
                      href={`/news/${index + 1}`}
                      className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1"
                    >
                      Read
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="rounded-full">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-secondary">
        <div className="px-4 sm:px-6 lg:px-0 lg:max-w-4xl lg:mx-auto">
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-gold flex items-center justify-center">
                <Bell className="w-8 h-8 text-umber" />
              </div>
              <h2 className="heading-2 mb-4">
                Never Miss an <span className="text-gradient">Update</span>
              </h2>
              <p className="body-large text-foreground/70 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter to receive the latest news,
                announcements, and upcoming events directly in your inbox.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-5 h-12 rounded-full border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button size="lg" className="rounded-full shrink-0">
                  Subscribe
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
