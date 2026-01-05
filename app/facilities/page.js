'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import {
  Building2,
  FlaskConical,
  Laptop,
  Wrench,
  Wifi,
  Coffee,
  Zap,
  Shield,
  Users,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Target,
  Award,
  Briefcase,
} from 'lucide-react'

const facilities = [
  {
    icon: FlaskConical,
    title: 'Research Laboratories',
    description:
      'State-of-the-art research labs equipped with cutting-edge instruments for advanced R&D across multiple domains.',
    image: 'placeholder',
    features: [
      'Advanced analytical instruments',
      'Clean room facilities',
      'Prototyping equipment',
      'Safety-certified labs',
    ],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Laptop,
    title: 'Co-Working Spaces',
    description:
      'Modern, flexible workspaces designed for collaboration, creativity, and productivity for startups and teams.',
    image: 'placeholder',
    features: [
      'Hot desks and dedicated desks',
      'Private cabins',
      'Meeting rooms',
      '24/7 access',
    ],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Building2,
    title: 'Incubation Centers',
    description:
      'Fully-equipped office spaces for early-stage startups with access to mentorship and resources.',
    image: 'placeholder',
    features: [
      'Private office suites',
      'Infrastructure support',
      'Networking opportunities',
      'Flexible lease terms',
    ],
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    icon: Wrench,
    title: 'Prototyping Workshop',
    description:
      'Comprehensive maker space with tools and equipment for product development and rapid prototyping.',
    image: 'placeholder',
    features: [
      '3D printers and CNC machines',
      'Electronics workshop',
      'Mechanical tools',
      'Testing equipment',
    ],
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Users,
    title: 'Conference Facilities',
    description:
      'Professional conference rooms and auditoriums for events, workshops, and presentations.',
    image: 'placeholder',
    features: [
      'Multiple conference rooms',
      'Audio-visual equipment',
      'Video conferencing',
      'Catering services',
    ],
    gradient: 'from-red-500 to-rose-500',
  },
  {
    icon: Briefcase,
    title: 'Corporate R&D Centers',
    description:
      'Dedicated spaces for companies to establish their research and development presence.',
    image: 'placeholder',
    features: [
      'Customizable layouts',
      'Secure infrastructure',
      'Dedicated utilities',
      'Scalable spaces',
    ],
    gradient: 'from-indigo-500 to-violet-500',
  },
]

const amenities = [
  {
    icon: Wifi,
    title: 'High-Speed Internet',
    description: '1 Gbps connectivity',
  },
  {
    icon: Zap,
    title: '24/7 Power Backup',
    description: 'Uninterrupted operations',
  },
  {
    icon: Shield,
    title: 'Security & Access',
    description: 'Round-the-clock security',
  },
  { icon: Coffee, title: 'Cafeteria', description: 'Food and beverages' },
]

const stats = [
  { value: '50,000+', label: 'Sq. Ft. Space', icon: Building2 },
  { value: '100+', label: 'Workstations', icon: Laptop },
  { value: '15+', label: 'Meeting Rooms', icon: Users },
  { value: '20+', label: 'Equipment', icon: Wrench },
]

export default function FacilitiesPage() {
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
              World-Class Infrastructure
            </Badge>
            <h1 className="heading-display mb-6 text-white">
              Facilities Built for{' '}
              <span className="text-gradient">Innovation</span>
            </h1>
            <p className="body-large text-white/90 mb-8 text-justify">
              From cutting-edge research labs to collaborative co-working
              spaces, our infrastructure is designed to support every stage of
              your innovation journey. Experience facilities that combine
              functionality with inspiration.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative -mt-16 z-20 px-4 sm:px-6 lg:px-0 lg:max-w-6xl lg:mx-auto">
        <div className="rounded-2xl bg-card/90 backdrop-blur-xl border border-border elevation-3 p-6 md:p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center group">
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <stat.icon className="w-5 h-5" />
                </div>
                <div className="text-3xl font-bold text-gradient-gold mb-1">
                  {stat.value}
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Facilities */}
      <section className="section-padding bg-background">
        <div className="px-4 sm:px-6 lg:px-0 lg:max-w-6xl lg:mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <Target className="w-4 h-4 mr-2" />
              Our Facilities
            </Badge>
            <h2 className="heading-2 mb-4">
              Everything You{' '}
              <span className="text-gradient">Need to Succeed</span>
            </h2>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              Comprehensive infrastructure designed to support research,
              development, and entrepreneurship.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <Card
                key={facility.title}
                className="overflow-hidden group hover:elevation-2 transition-all"
              >
                {/* Image Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <facility.icon className="w-20 h-20 text-primary/20" />
                  </div>
                  <div
                    className={`absolute top-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-br ${facility.gradient} flex items-center justify-center`}
                  >
                    <facility.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="heading-3 mb-3">{facility.title}</h3>
                  <p className="text-foreground/70 leading-relaxed mb-4 text-justify">
                    {facility.description}
                  </p>
                  <ul className="space-y-2">
                    {facility.features.map((feature, idx) => (
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

      {/* Amenities */}
      <section className="section-padding bg-secondary">
        <div className="px-4 sm:px-6 lg:px-0 lg:max-w-6xl lg:mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <Award className="w-4 h-4 mr-2" />
              Additional Amenities
            </Badge>
            <h2 className="heading-2 mb-4">
              Everything <span className="text-gradient">You Need</span>
            </h2>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              Beyond workspaces, we provide essential amenities for a
              comfortable and productive environment.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenities.map((amenity) => (
              <Card
                key={amenity.title}
                className="text-center hover:border-primary/50 transition-all hover:elevation-1"
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-gold flex items-center justify-center">
                    <amenity.icon className="w-7 h-7 text-umber" />
                  </div>
                  <h3 className="heading-4 mb-2">{amenity.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {amenity.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="section-padding bg-background">
        <div className="px-4 sm:px-6 lg:px-0 lg:max-w-6xl lg:mx-auto">
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="heading-2 mb-4">
                    Experience Our{' '}
                    <span className="text-gradient">Facilities</span>
                  </h2>
                  <p className="body-large text-foreground/70 mb-6 text-justify">
                    Schedule a visit to explore our state-of-the-art
                    infrastructure firsthand, or take a virtual tour from the
                    comfort of your home.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild size="lg" className="rounded-full">
                      <Link href="/contact">
                        Schedule a Visit
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="rounded-full"
                    >
                      <Link href="/virtual-tour">Virtual Tour</Link>
                    </Button>
                  </div>
                </div>
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                  <Building2 className="w-24 h-24 text-primary/30" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
