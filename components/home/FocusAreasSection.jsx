'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  Cpu,
  Leaf,
  Shield,
  HeartPulse,
  Factory,
  Wifi,
  Lightbulb,
  ArrowRight,
} from 'lucide-react'

const focusAreas = [
  {
    icon: Leaf,
    title: 'Clean Energy & Sustainability',
    description: 'Net-zero solutions',
  },
  {
    icon: Cpu,
    title: 'AI & Machine Learning',
    description: 'Intelligent systems',
  },
  {
    icon: Shield,
    title: 'Defence & Aerospace',
    description: 'Strategic technology',
  },
  {
    icon: HeartPulse,
    title: 'Healthcare Technology',
    description: 'Medical innovation',
  },
  { icon: Factory, title: 'Smart Manufacturing', description: 'Industry 4.0' },
  {
    icon: Wifi,
    title: 'Digital Infrastructure',
    description: 'Connected India',
  },
]

export default function FocusAreasSection() {
  return (
    <section className="section-padding bg-background">
      <div className="px-4 sm:px-6 lg:px-0 lg:max-w-6xl lg:mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div>
            <Badge variant="outline" className="mb-4">
              <Lightbulb className="w-4 h-4 mr-2" />
              Focus Areas
            </Badge>
            <h2 className="heading-2 mb-6">
              Driving Innovation in{' '}
              <span className="text-gradient">Strategic Sectors</span>
            </h2>
            <p className="body-large text-muted-foreground mb-8">
              From national security to sustainable energy, we're building
              solutions that address India's most pressing challenges and
              position the nation as a global technology leader.
            </p>
            <Button asChild className="rounded-full">
              <Link href="/focus-areas">
                Explore All Focus Areas
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Right - Grid */}
          <div className="grid grid-cols-2 gap-4">
            {focusAreas.map((area) => (
              <div
                key={area.title}
                className="p-5 rounded-xl bg-card border border-border hover:border-primary/50 hover:elevation-1 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <area.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors text-sm">
                  {area.title}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
