'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import {
  Rocket,
  Briefcase,
  GraduationCap,
  Users,
  TrendingUp,
  Award,
  Target,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Lightbulb,
  Building2,
  FlaskConical,
  CircleDollarSign,
  HeartHandshake,
  Zap,
} from 'lucide-react'

const opportunities = [
  {
    icon: Rocket,
    title: 'For Startups',
    tagline: 'Launch and Scale Your Venture',
    description:
      'Comprehensive support for early-stage startups, from ideation to Series A and beyond.',
    gradient: 'from-purple-500 to-pink-500',
    features: [
      'Seed funding up to ₹50 lakhs',
      'Subsidized office space',
      'Access to IIT Jodhpur mentors',
      'Investor networking events',
      'Legal and accounting support',
      'Go-to-market assistance',
    ],
    eligibility: [
      'Early-stage startup (pre-revenue to Series A)',
      'Technology-driven business model',
      'Scalable solution addressing real problems',
      'Team with relevant expertise',
    ],
    cta: {
      text: 'Apply for Incubation',
      href: '/apply/startup',
    },
  },
  {
    icon: Briefcase,
    title: 'For Corporates',
    tagline: 'Establish Your Innovation Presence',
    description:
      "Set up dedicated R&D centers or innovation labs to leverage IIT Jodhpur's research capabilities.",
    gradient: 'from-blue-500 to-cyan-500',
    features: [
      'Customizable R&D center spaces',
      'Collaboration with faculty',
      'Access to student talent pool',
      'Joint IP development',
      'Technology transfer programs',
      'Dedicated project support',
    ],
    eligibility: [
      'Established companies seeking R&D presence',
      'Commitment to collaborative research',
      'Interest in long-term partnership',
      'Industry-specific innovation focus',
    ],
    cta: {
      text: 'Partner With Us',
      href: '/apply/corporate',
    },
  },
  {
    icon: FlaskConical,
    title: 'For Researchers',
    tagline: 'Commercialize Your Innovation',
    description:
      'Transform your research into market-ready products with comprehensive commercialization support.',
    gradient: 'from-amber-500 to-orange-500',
    features: [
      'Technology validation support',
      'IP protection assistance',
      'Prototype development resources',
      'Industry connection facilitation',
      'Proof-of-concept funding',
      'Market research support',
    ],
    eligibility: [
      'Faculty or research scholars',
      'Novel technology or innovation',
      'Clear commercialization potential',
      'Willingness to collaborate',
    ],
    cta: {
      text: 'Submit Your Innovation',
      href: '/apply/research',
    },
  },
  {
    icon: GraduationCap,
    title: 'Careers',
    tagline: 'Join Our Growing Team',
    description:
      'Be part of a dynamic team driving innovation and entrepreneurship in Rajasthan.',
    gradient: 'from-green-500 to-emerald-500',
    features: [
      'Competitive compensation',
      'Career growth opportunities',
      'Collaborative work environment',
      'Learning and development',
      'Work-life balance',
      'Impact-driven roles',
    ],
    eligibility: [
      'Passion for innovation ecosystem',
      'Relevant experience and skills',
      'Collaborative mindset',
      'Commitment to excellence',
    ],
    cta: {
      text: 'View Open Positions',
      href: '/careers',
    },
  },
]

const applicationProcess = [
  {
    step: '01',
    title: 'Submit Application',
    description:
      'Fill out the online application form with your details and proposal',
    icon: Target,
  },
  {
    step: '02',
    title: 'Initial Review',
    description:
      'Our team evaluates your application against eligibility criteria',
    icon: CheckCircle2,
  },
  {
    step: '03',
    title: 'Pitch/Interview',
    description:
      'Present your idea or discuss your proposal with our selection committee',
    icon: Users,
  },
  {
    step: '04',
    title: 'Onboarding',
    description: 'Join our ecosystem and get access to resources and support',
    icon: Zap,
  },
]

const benefits = [
  {
    icon: Building2,
    title: 'World-Class Infrastructure',
    description: 'Access to state-of-the-art facilities and equipment',
  },
  {
    icon: Users,
    title: 'Expert Mentorship',
    description: 'Guidance from IIT faculty and industry veterans',
  },
  {
    icon: CircleDollarSign,
    title: 'Funding Access',
    description: 'Connect with investors and funding opportunities',
  },
  {
    icon: HeartHandshake,
    title: 'Network',
    description: 'Join a vibrant community of innovators',
  },
]

export default function OpportunitiesPage() {
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
              <Sparkles className="w-4 h-4 mr-2" />
              Growth Opportunities
            </Badge>
            <h1 className="heading-display mb-6">
              Your <span className="text-gradient">Success Starts</span> Here
            </h1>
            <p className="body-large text-foreground/75 mb-8 text-justify">
              Whether you're launching a startup, establishing corporate R&D,
              commercializing research, or seeking a career in innovation—we
              have tailored opportunities designed to help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section className="section-padding bg-background">
        <div className="px-4 sm:px-6 lg:px-0 lg:max-w-6xl lg:mx-auto">
          <div className="space-y-12">
            {opportunities.map((opportunity, index) => (
              <Card
                key={opportunity.title}
                className={`overflow-hidden hover:elevation-2 transition-all ${
                  index % 2 === 0 ? '' : ''
                }`}
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Content Side */}
                  <div className="p-8 lg:p-10 order-2 lg:order-1">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${opportunity.gradient} flex items-center justify-center mb-5`}
                    >
                      <opportunity.icon className="w-7 h-7 text-white" />
                    </div>
                    <h2 className="heading-2 mb-2">{opportunity.title}</h2>
                    <p className="text-primary font-semibold mb-4">
                      {opportunity.tagline}
                    </p>
                    <p className="text-foreground/70 leading-relaxed mb-6 text-justify">
                      {opportunity.description}
                    </p>

                    <div className="space-y-6 mb-8">
                      <div>
                        <h3 className="heading-4 mb-3">What We Offer</h3>
                        <ul className="space-y-2">
                          {opportunity.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-sm text-foreground/70"
                            >
                              <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="heading-4 mb-3">Eligibility</h3>
                        <ul className="space-y-2">
                          {opportunity.eligibility.map((criteria, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-sm text-foreground/70"
                            >
                              <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                              <span>{criteria}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <Button asChild size="lg" className="rounded-full">
                      <Link href={opportunity.cta.href}>
                        {opportunity.cta.text}
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                    </Button>
                  </div>

                  {/* Image Side */}
                  <div
                    className={`bg-gradient-to-br ${opportunity.gradient} bg-opacity-10 p-8 lg:p-10 flex items-center justify-center order-1 lg:order-2`}
                  >
                    <div className="w-full aspect-square bg-card/30 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <opportunity.icon className="w-32 h-32 text-card/50" />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="section-padding bg-secondary">
        <div className="px-4 sm:px-6 lg:px-0 lg:max-w-6xl lg:mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <Target className="w-4 h-4 mr-2" />
              Application Process
            </Badge>
            <h2 className="heading-2 mb-4">
              Simple <span className="text-gradient">4-Step Process</span>
            </h2>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              From application to onboarding, we've streamlined the process to
              get you started quickly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applicationProcess.map((process, index) => (
              <Card
                key={process.title}
                className="relative text-center hover:elevation-1 transition-all"
              >
                <CardContent className="p-6">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center text-umber font-bold text-lg elevation-2">
                    {process.step}
                  </div>
                  <div className="w-14 h-14 mx-auto mt-6 mb-4 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <process.icon className="w-7 h-7" />
                  </div>
                  <h3 className="heading-4 mb-2">{process.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {process.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-background">
        <div className="px-4 sm:px-6 lg:px-0 lg:max-w-6xl lg:mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <Award className="w-4 h-4 mr-2" />
              Why Choose Us
            </Badge>
            <h2 className="heading-2 mb-4">
              Benefits of <span className="text-gradient">Joining Us</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit) => (
              <Card
                key={benefit.title}
                className="text-center hover:border-primary/50 transition-all hover:elevation-1"
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-gold flex items-center justify-center">
                    <benefit.icon className="w-7 h-7 text-umber" />
                  </div>
                  <h3 className="heading-4 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Final CTA */}
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="p-8 md:p-12 text-center">
              <h3 className="heading-2 mb-4">
                Ready to <span className="text-gradient">Get Started?</span>
              </h3>
              <p className="body-large text-foreground/70 mb-8 max-w-2xl mx-auto">
                Have questions or need more information? Our team is here to
                help you find the right opportunity.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="rounded-full">
                  <Link href="/contact">
                    Talk to Our Team
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full"
                >
                  <Link href="/faqs">View FAQs</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
