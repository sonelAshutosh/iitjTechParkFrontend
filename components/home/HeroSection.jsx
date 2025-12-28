'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Play, Sparkles, ChevronDown } from 'lucide-react'
import { animate } from 'animejs'

export default function HeroSection() {
  useEffect(() => {
    animate('.hero-badge', {
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 600,
      ease: 'outQuad',
    })
    animate('.hero-title', {
      opacity: [0, 1],
      translateY: [30, 0],
      duration: 800,
      delay: 200,
      ease: 'outExpo',
    })
    animate('.hero-subtitle', {
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 600,
      delay: 400,
      ease: 'outQuad',
    })
    animate('.hero-cta', {
      opacity: [0, 1],
      scale: [0.95, 1],
      duration: 500,
      delay: 600,
      ease: 'outBack',
    })
  }, [])

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream via-cream-dark to-sandstone-light dark:from-umber dark:via-umber-light dark:to-umber">
      {/* Background Image Layer */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 dark:opacity-40"
          style={{
            backgroundImage: `url('/images/hero-section.png')`,
          }}
        />
        {/* Darker overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-umber/70 via-umber/50 to-umber/70 dark:from-black/60 dark:via-black/40 dark:to-black/60" />
      </div>

      {/* Background Pattern - On top of image */}
      <div
        className="absolute inset-0 opacity-[0.2] z-[1]"
        style={{
          backgroundImage: `linear-gradient(rgba(201, 162, 39, 0.4) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(201, 162, 39, 0.4) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-gold/20 dark:bg-gold/10 rounded-full blur-[100px] animate-float" />
      <div
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-maroon/15 dark:bg-maroon/8 rounded-full blur-[120px] animate-float"
        style={{ animationDelay: '1s' }}
      />

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-0 lg:max-w-6xl lg:mx-auto w-full py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="hero-badge mb-6 inline-block">
            <Badge className="px-4 py-2 text-sm bg-primary/10 text-primary border-primary/20 hover:bg-primary/15">
              <Sparkles className="w-4 h-4 mr-2" />
              Rajasthan's Premier Innovation Hub
            </Badge>
          </div>

          {/* Title */}
          <h1 className="hero-title heading-display mb-6">
            Where <span className="text-gradient-gold">Innovation</span> Meets{' '}
            <span className="text-gradient">Excellence</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle body-large text-foreground/75 pb-2 mb-10 max-w-3xl mx-auto">
            IIT Jodhpur Technology Park - A world-class ecosystem fostering
            cutting-edge research, deep-tech startups, and transformative
            industry-academia collaborations in the heart of Rajasthan.
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full elevation-2"
            >
              <Link href="/opportunities">
                Explore Opportunities
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 px-8 rounded-full"
            >
              <Link href="/about">
                <Play className="mr-2 w-4 h-4" />
                Watch Video Tour
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
          <ChevronDown className="w-5 h-5 text-primary" />
        </div>
      </div>
    </section>
  )
}
