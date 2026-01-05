'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import {
  Target,
  Eye,
  Award,
  Users,
  Building2,
  Rocket,
  FlaskConical,
  TrendingUp,
  MapPin,
  ArrowRight,
  Lightbulb,
  CheckCircle2,
} from 'lucide-react'

const visionMission = [
  {
    icon: Eye,
    title: 'Our Vision',
    description:
      'To establish IIT Jodhpur Technology Park as a globally recognized innovation ecosystem that bridges the gap between academia and industry, driving technological advancement and economic growth in Rajasthan and beyond.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Target,
    title: 'Our Mission',
    description:
      'To foster cutting-edge research, nurture deep-tech startups, and facilitate meaningful industry-academia collaborations that address real-world challenges and create sustainable impact.',
    gradient: 'from-purple-500 to-pink-500',
  },
]

const coreValues = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Encouraging creative thinking and breakthrough solutions',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Maintaining highest standards in all our endeavors',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Building strong partnerships across borders',
  },
  {
    icon: TrendingUp,
    title: 'Impact',
    description: 'Creating measurable value for society',
  },
]

const keyFeatures = [
  {
    icon: Building2,
    title: 'World-Class Infrastructure',
    points: [
      '852 acres of integrated campus',
      'State-of-the-art laboratories and research facilities',
      'Co-working spaces and incubation centers',
      'Advanced prototyping and testing equipment',
    ],
  },
  {
    icon: FlaskConical,
    title: 'Research Excellence',
    points: [
      'Access to IIT Jodhpur faculty expertise',
      'Collaborative research opportunities',
      'Cutting-edge technology domains',
      'IP support and commercialization',
    ],
  },
  {
    icon: Rocket,
    title: 'Startup Ecosystem',
    points: [
      'Comprehensive incubation support',
      'Mentorship from industry leaders',
      'Funding and investor connections',
      'Go-to-market assistance',
    ],
  },
]

const stats = [
  { value: '2023', label: 'Established', icon: Award },
  { value: '50+', label: 'Industry Partners', icon: Users },
  { value: '100+', label: 'Startups Supported', icon: Rocket },
  { value: '₹200Cr+', label: 'Investment Facilitated', icon: TrendingUp },
]

export default function AboutPage() {
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
              <MapPin className="w-4 h-4 mr-2" />
              Rajasthan's Premier Innovation Hub
            </Badge>
            <h1 className="heading-display mb-6 text-white">
              About <span className="text-gradient-gold">IIT Jodhpur</span>{' '}
              <span className="text-gradient">Technology Park</span>
            </h1>
            <p className="body-large text-white/90 mb-8 text-justify">
              Where ancient wisdom meets future technology. A world-class
              ecosystem fostering innovation, research, and entrepreneurship in
              the heart of the Thar Desert.
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

      {/* Vision & Mission */}
      <section className="section-padding bg-background">
        <div className="px-4 sm:px-6 lg:px-0 lg:max-w-6xl lg:mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {visionMission.map((item) => (
              <Card
                key={item.title}
                className="group hover:border-primary/50 transition-all duration-300 hover:elevation-2"
              >
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="heading-3 mb-4">{item.title}</h2>
                  <p className="text-foreground/80 leading-relaxed text-justify">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-secondary">
        <div className="px-4 sm:px-6 lg:px-0 lg:max-w-6xl lg:mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <Award className="w-4 h-4 mr-2" />
              Our Story
            </Badge>
            <h2 className="heading-2 mb-6">
              Building India's{' '}
              <span className="text-gradient">Innovation Future</span>
            </h2>
          </div>

          <div className="prose prose-lg max-w-4xl mx-auto">
            <div className="space-y-6 text-foreground/80 leading-relaxed text-justify">
              <p>
                Established in 2023, IIT Jodhpur Technology Park represents a
                bold vision to transform Rajasthan into a thriving hub of
                innovation and technology. Spread across 852 acres of the IIT
                Jodhpur campus, we are strategically positioned to leverage the
                institute's world-class research capabilities and academic
                excellence.
              </p>
              <p>
                Our journey began with a simple yet powerful idea: to create a
                platform where cutting-edge research meets real-world
                applications, where brilliant minds collaborate to solve India's
                most pressing challenges, and where startups can flourish with
                the support of world-class mentorship and infrastructure.
              </p>
              <p>
                Today, we stand as Rajasthan's premier technology park,
                fostering a vibrant ecosystem of researchers, entrepreneurs,
                industry leaders, and innovators. From deep-tech startups
                developing breakthrough solutions to established corporations
                seeking research partnerships, we provide the perfect
                environment for innovation to thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-background">
        <div className="px-4 sm:px-6 lg:px-0 lg:max-w-6xl lg:mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <CheckCircle2 className="w-4 h-4 mr-2" />
              Our Values
            </Badge>
            <h2 className="heading-2 mb-4">
              What <span className="text-gradient">Drives Us</span>
            </h2>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto ">
              Our core values guide everything we do, from supporting startups
              to facilitating research collaborations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value) => (
              <Card
                key={value.title}
                className="text-center hover:border-primary/50 transition-all duration-300 hover:elevation-1"
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <value.icon className="w-7 h-7" />
                  </div>
                  <h3 className="heading-4 mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section-padding bg-secondary">
        <div className="px-4 sm:px-6 lg:px-0 lg:max-w-6xl lg:mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <Building2 className="w-4 h-4 mr-2" />
              What We Offer
            </Badge>
            <h2 className="heading-2 mb-4">
              World-Class <span className="text-gradient">Facilities</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {keyFeatures.map((feature) => (
              <Card
                key={feature.title}
                className="hover:elevation-2 transition-all"
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 mb-5 rounded-xl bg-gradient-gold flex items-center justify-center">
                    <feature.icon className="w-7 h-7 text-umber" />
                  </div>
                  <h3 className="heading-4 mb-4">{feature.title}</h3>
                  <ul className="space-y-3">
                    {feature.points.map((point, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm text-foreground/80"
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-background">
        <div className="px-4 sm:px-6 lg:px-0 lg:max-w-6xl lg:mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <Users className="w-4 h-4 mr-2" />
              Our Team
            </Badge>
            <h2 className="heading-2 mb-4">
              Meet the <span className="text-gradient">Visionaries</span>
            </h2>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              Our leadership team brings together decades of experience in
              technology, research, and entrepreneurship.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {/* Team Member 1 */}
            <Card className="overflow-hidden hover:elevation-2 transition-all group">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                {/* Placeholder for team member photo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Users className="w-20 h-20 text-primary/30" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="heading-4 mb-1">Dr. Rajesh Kumar</h3>
                <p className="text-sm text-primary mb-3">Director, Tech Park</p>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Leading the vision for innovation and industry collaboration
                  with over 20 years of experience in technology development.
                </p>
              </CardContent>
            </Card>

            {/* Team Member 2 */}
            <Card className="overflow-hidden hover:elevation-2 transition-all group">
              <div className="aspect-square bg-gradient-to-br from-gold/20 to-maroon/20 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Users className="w-20 h-20 text-gold/40" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="heading-4 mb-1">Dr. Priya Sharma</h3>
                <p className="text-sm text-primary mb-3">
                  Head of Research Partnerships
                </p>
                <p className="text-sm text-foreground/70 leading-relaxed text-justify">
                  Fostering meaningful academia-industry collaborations and
                  driving cutting-edge research initiatives.
                </p>
              </CardContent>
            </Card>

            {/* Team Member 3 */}
            <Card className="overflow-hidden hover:elevation-2 transition-all group">
              <div className="aspect-square bg-gradient-to-br from-accent/20 to-primary/20 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Users className="w-20 h-20 text-accent/40" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="heading-4 mb-1">Mr. Anil Verma</h3>
                <p className="text-sm text-primary mb-3">
                  Head of Startup Incubation
                </p>
                <p className="text-sm text-foreground/70 leading-relaxed text-justify">
                  Supporting early-stage startups with mentorship, funding
                  access, and strategic growth guidance.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Meet the Team Button */}
          <div className="text-center">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full"
            >
              <Link href="/team">
                Meet the Full Team
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background">
        <div className="px-4 sm:px-6 lg:px-0 lg:max-w-4xl lg:mx-auto text-center">
          <h2 className="heading-2 mb-6">
            Ready to <span className="text-gradient">Join Us?</span>
          </h2>
          <p className="body-large text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're a startup, researcher, or industry partner, we have
            opportunities tailored for you.
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
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
