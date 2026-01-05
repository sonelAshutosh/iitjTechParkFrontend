'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import {
  FlaskConical,
  Rocket,
  Factory,
  Users,
  Lightbulb,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Building2,
  Award,
  Target,
  Sparkles,
} from 'lucide-react'

const ecosystemPillars = [
  {
    icon: FlaskConical,
    title: 'R&D Collaborations',
    description:
      'Foster cutting-edge research partnerships between industry and academia, driving innovation and technological advancement.',
    gradient: 'from-[#6610f2] to-[#469b7c]',
    features: [
      'Access to IIT Jodhpur faculty expertise',
      'Joint research programs',
      'IP development and commercialization',
      'Advanced lab facilities',
    ],
  },
  {
    icon: Rocket,
    title: 'Startups & Incubation',
    description:
      'Nurture early-stage startups with comprehensive support, from ideation to market launch and beyond.',
    gradient: 'from-[#903f54] to-[#B85200]',
    features: [
      'Seed funding opportunities',
      'Mentorship from industry experts',
      'Co-working and office spaces',
      'Networking with investors',
    ],
  },
  {
    icon: Factory,
    title: 'Industry Partners',
    description:
      'Connect leading corporations with innovation opportunities, research talent, and collaborative projects.',
    gradient: 'from-[#B85200] to-[#d66b1a]',
    features: [
      'Corporate R&D centers',
      'Technology transfer programs',
      'Talent recruitment pipeline',
      'Custom research projects',
    ],
  },
]

const successStories = [
  {
    category: 'Deep Tech Startup',
    title: 'AI-Powered Agriculture Solutions',
    description:
      'Developed precision farming technology helping farmers increase yields by 40% while reducing water consumption.',
    impact: '10,000+ Farmers',
    funding: '₹5 Cr Series A',
    image: 'placeholder',
  },
  {
    category: 'Research Collaboration',
    title: 'Next-Gen Solar Technology',
    description:
      'Joint research with leading energy company resulted in 25% more efficient solar panels for desert conditions.',
    impact: '30% Cost Reduction',
    funding: '₹15 Cr Investment',
    image: 'placeholder',
  },
  {
    category: 'Industry Partnership',
    title: 'Smart Manufacturing Platform',
    description:
      'Collaborative project with automotive giant to develop IoT-based predictive maintenance solutions.',
    impact: '40% Downtime Reduction',
    funding: '₹20 Cr Contract',
    image: 'placeholder',
  },
]

const benefits = [
  {
    icon: Lightbulb,
    title: 'Innovation Hub',
    description: 'Access to cutting-edge research and emerging technologies',
  },
  {
    icon: Users,
    title: 'Expert Network',
    description: 'Connect with faculty, researchers, and industry leaders',
  },
  {
    icon: TrendingUp,
    title: 'Growth Support',
    description: 'Comprehensive support from concept to commercialization',
  },
  {
    icon: Award,
    title: 'Credibility',
    description: 'Association with IIT Jodhpur brand and excellence',
  },
]

export default function EcosystemPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream via-cream-dark to-sandstone-light dark:from-umber dark:via-umber-light dark:to-umber">
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
          className="absolute inset-0 opacity-[0.2] z-1"
          style={{
            backgroundImage: `linear-gradient(rgba(201, 162, 39, 0.4) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(201, 162, 39, 0.4) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />

        <div className="relative z-10 px-4 sm:px-6 lg:px-0 lg:max-w-6xl lg:mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              Innovation Ecosystem
            </Badge>
            <h1 className="heading-display mb-6 text-white">
              One Campus,{' '}
              <span className="text-gradient">Infinite Possibilities</span>
            </h1>
            <p className="body-large text-white/90 mb-8 text-justify">
              A thriving innovation ecosystem designed to support every stage of
              your journey—from ideation to commercialization. Whether you're a
              researcher, startup founder, or industry partner, find your place
              in our collaborative community.
            </p>
          </div>
        </div>
      </section>

      {/* Ecosystem Pillars */}
      <section className="section-padding bg-background">
        <div className="px-4 sm:px-6 lg:px-0 lg:max-w-6xl lg:mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <Target className="w-4 h-4 mr-2" />
              Our Pillars
            </Badge>
            <h2 className="heading-2 mb-4">
              Three <span className="text-gradient">Core Pillars</span>
            </h2>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              Our ecosystem is built on three fundamental pillars, each designed
              to foster innovation and create value.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {ecosystemPillars.map((pillar, index) => (
              <Card
                key={pillar.title}
                className="group hover:elevation-2 transition-all"
              >
                <CardContent className="p-6">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <pillar.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="heading-3 mb-3">{pillar.title}</h3>
                  <p className="text-foreground/80 leading-relaxed mb-5 text-justify">
                    {pillar.description}
                  </p>
                  <ul className="space-y-2">
                    {pillar.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-foreground/70"
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section-padding bg-secondary">
        <div className="px-4 sm:px-6 lg:px-0 lg:max-w-6xl lg:mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <Award className="w-4 h-4 mr-2" />
              Success Stories
            </Badge>
            <h2 className="heading-2 mb-4">
              Making <span className="text-gradient">Real Impact</span>
            </h2>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              See how our ecosystem partners are creating breakthrough
              innovations and driving change.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card
                key={story.title}
                className="overflow-hidden group hover:elevation-2 transition-all"
              >
                {/* Image Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Building2 className="w-16 h-16 text-primary/30" />
                  </div>
                  <Badge className="absolute top-4 left-4 bg-card/90 backdrop-blur-sm">
                    {story.category}
                  </Badge>
                </div>

                <CardContent className="p-6">
                  <h3 className="heading-4 mb-3">{story.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed mb-4 text-justify">
                    {story.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <p className="text-xs text-muted-foreground">Impact</p>
                      <p className="text-sm font-semibold text-primary">
                        {story.impact}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">Funding</p>
                      <p className="text-sm font-semibold text-primary">
                        {story.funding}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Our Ecosystem */}
      <section className="section-padding bg-background">
        <div className="px-4 sm:px-6 lg:px-0 lg:max-w-6xl lg:mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <Users className="w-4 h-4 mr-2" />
              Why Join Us
            </Badge>
            <h2 className="heading-2 mb-4">
              Benefits of <span className="text-gradient">Partnership</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit) => (
              <Card
                key={benefit.title}
                className="text-center hover:border-primary/50 transition-all hover:elevation-1"
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <benefit.icon className="w-7 h-7" />
                  </div>
                  <h3 className="heading-4 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Card */}
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="p-8 md:p-12 text-center">
              <h3 className="heading-2 mb-4">
                Ready to{' '}
                <span className="text-gradient">Join Our Ecosystem?</span>
              </h3>
              <p className="body-large text-foreground/70 mb-8 max-w-2xl mx-auto">
                Connect with us to explore partnership opportunities, incubation
                programs, or research collaborations.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="rounded-full">
                  <Link href="/opportunities">
                    Explore Opportunities
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full"
                >
                  <Link href="/contact">Schedule a Meeting</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
