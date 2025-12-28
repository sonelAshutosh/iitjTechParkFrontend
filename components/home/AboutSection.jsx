'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Target, ArrowRight, Building2 } from 'lucide-react'

export default function AboutSection() {
  return (
    <section className="section-padding bg-background">
      <div className="px-4 sm:px-6 lg:px-0 lg:max-w-6xl lg:mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div>
            <Badge variant="outline" className="mb-4">
              <Target className="w-4 h-4 mr-2" />
              About Us
            </Badge>
            <h2 className="heading-2 mb-6">
              Building India's{' '}
              <span className="text-gradient">Innovation Future</span>
            </h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                IIT Jodhpur Technology Park stands as Rajasthan's premier
                innovation ecosystem, bringing together brilliant minds,
                cutting-edge research, and transformative technologies.
              </p>
              <p>
                Spread across 852 acres of the IIT Jodhpur campus, we provide
                world-class infrastructure, strategic mentorship, and
                unparalleled access to IIT Jodhpur's intellectual
                capital—empowering startups, researchers, and industry leaders
                to solve real-world challenges.
              </p>
              <p>
                From deep-tech startups to established corporations, we foster
                an environment where innovation thrives, collaborations
                flourish, and groundbreaking ideas transform into impactful
                solutions for India and the world.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild className="rounded-full">
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full">
                <Link href="/virtual-tour">Take a Virtual Tour</Link>
              </Button>
            </div>
          </div>

          {/* Right - Image/Visual */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden elevation-2">
              {/* Placeholder - Replace with actual image */}
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                <div className="text-center p-8">
                  <Building2 className="w-16 h-16 mx-auto mb-4 text-primary/40" />
                  <p className="text-sm">Campus Image Placeholder</p>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/20 rounded-full blur-[60px]" />
          </div>
        </div>
      </div>
    </section>
  )
}
