'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Building, ArrowRight } from 'lucide-react'

export default function CTASection() {
  // Partner logos
  const partners = [
    'Partner 1',
    'Partner 2',
    'Partner 3',
    'Partner 4',
    'Partner 5',
    'Partner 6',
    'Partner 7',
    'Partner 8',
  ]

  return (
    <section className="relative overflow-hidden">
      {/* Background Image Layer with CSS Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/hero-section-3.png')`,
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/10 rounded-full blur-[150px] z-1" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-maroon/10 rounded-full blur-[150px] z-1" />

      {/* CTA Content */}
      <div className="relative z-10 py-24">
        <div className="px-4 sm:px-6 lg:px-0 lg:max-w-4xl lg:mx-auto text-center">
          <Badge
            variant="outline"
            className="mb-6 border-gold/30 bg-gold/10 text-gold"
          >
            <Building className="w-4 h-4 mr-2" />
            World-Class Infrastructure
          </Badge>
          <h2 className="heading-2 text-white! mb-6">
            Workspace Solutions for Every Stage of Innovation
          </h2>
          <p className="body-large text-white/80! mb-10 max-w-2xl mx-auto">
            From co-working desks for early-stage startups to dedicated R&D labs
            for established enterprises—find the perfect space to bring your
            ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="h-12 px-8 bg-gold hover:bg-gold-dark text-umber font-semibold rounded-full elevation-2"
            >
              <Link href="/facilities">
                Explore Facilities
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 px-8 border-white/30 text-black dark:text-white hover:bg-white/10 hover:text-white dark:hover:bg-black/10 rounded-full"
            >
              <Link href="/contact">Schedule a Visit</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Partners Section - Marquee Style */}
      <div className="relative z-10 py-16">
        <div className="px-4 sm:px-6 lg:px-0 lg:max-w-6xl lg:mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm font-medium text-white/70 uppercase tracking-wider">
              Trusted by Leading Organizations
            </p>
          </div>

          {/* Marquee Container */}
          <div className="relative overflow-hidden">
            {/* Marquee Animation */}
            <div className="flex gap-8 animate-marquee">
              {/* First set of partners */}
              {partners.map((partner, index) => (
                <div
                  key={`first-${index}`}
                  className="shrink-0 w-48 h-28 flex items-center justify-center rounded-xl bg-card/90 backdrop-blur-sm border border-border hover:border-primary/40 hover:bg-card transition-all duration-300 hover:elevation-1 p-6"
                >
                  <span className="text-sm font-semibold text-foreground/80 whitespace-nowrap">
                    {partner}
                  </span>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {partners.map((partner, index) => (
                <div
                  key={`second-${index}`}
                  className="shrink-0 w-48 h-28 flex items-center justify-center rounded-xl bg-card/90 backdrop-blur-sm border border-border hover:border-primary/40 hover:bg-card transition-all duration-300 hover:elevation-1 p-6"
                >
                  <span className="text-sm font-semibold text-foreground/80 whitespace-nowrap">
                    {partner}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Animation Styles */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
