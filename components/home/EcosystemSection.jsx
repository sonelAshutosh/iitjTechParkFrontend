'use client'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import {
  FlaskConical,
  Rocket,
  Building2,
  Users,
  Lightbulb,
  ChevronRight,
} from 'lucide-react'

const ecosystemItems = [
  {
    icon: FlaskConical,
    title: 'R&D Collaborations',
    description:
      'Driving industry-academia partnerships with IIT Jodhpur for groundbreaking research and innovations.',
    href: '/ecosystem/research',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Rocket,
    title: 'Startups & Incubation',
    description:
      'Nurturing deep-tech startups with mentorship, funding access, and world-class infrastructure.',
    href: '/ecosystem/startups',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Building2,
    title: 'Centers of Excellence',
    description:
      'Specialized research focused on emerging technologies and strategic sectors.',
    href: '/ecosystem/centers',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: Users,
    title: 'Industry Partners',
    description:
      "Connecting global enterprises with IIT Jodhpur's intellectual capital and expertise.",
    href: '/ecosystem/partners',
    color: 'from-green-500 to-emerald-500',
  },
]

export default function EcosystemSection() {
  return (
    <section className="relative section-padding bg-secondary overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 dark:opacity-25"
          style={{
            backgroundImage: `url('/images/hero-section-2.png')`,
          }}
        />
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-secondary/70 dark:bg-secondary/60" />
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-0 lg:max-w-6xl lg:mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="outline" className="mb-4">
            <Lightbulb className="w-4 h-4 mr-2" />
            Our Ecosystem
          </Badge>
          <h2 className="heading-2 mb-4">
            One Campus,{' '}
            <span className="text-gradient">Infinite Possibilities</span>
          </h2>
          <p className="body-large text-muted-foreground">
            A thriving innovation ecosystem designed to support every stage of
            your journey—from ideation to commercialization.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ecosystemItems.map((item) => (
            <Link key={item.title} href={item.href} className="block h-full">
              <Card className="h-full group hover:border-primary/50 transition-all duration-300 hover:elevation-2">
                <CardContent className="p-6">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="heading-4 mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="flex items-center gap-1 text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
