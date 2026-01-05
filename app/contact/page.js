'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Sparkles,
  Building2,
  MessageSquare,
} from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    details: 'techpark@iitj.ac.in',
    subtitle: 'We typically respond within 24 hours',
    href: 'mailto:techpark@iitj.ac.in',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: '+91 291 280 1234',
    subtitle: 'Mon-Fri, 9:00 AM - 6:00 PM',
    href: 'tel:+912912801234',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    details: 'IIT Jodhpur, NH 65, Karwad',
    subtitle: 'Jodhpur, Rajasthan 342030',
    href: 'https://maps.app.goo.gl/oG3Erm3TvQxEcxyeA',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    icon: Clock,
    title: 'Office Hours',
    details: 'Monday - Friday',
    subtitle: '9:00 AM - 6:00 PM IST',
    gradient: 'from-green-500 to-emerald-500',
  },
]

const departments = [
  {
    name: 'General Inquiries',
    email: 'info@iitj.ac.in',
  },
  {
    name: 'Startup Incubation',
    email: 'incubation@iitj.ac.in',
  },
  {
    name: 'Industry Partnerships',
    email: 'partnerships@iitj.ac.in',
  },
  {
    name: 'Research Collaborations',
    email: 'research@iitj.ac.in',
  },
]

export default function ContactPage() {
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

        <div className="relative px-4 sm:px-6 lg:px-0 lg:max-w-6xl lg:mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 px-4 py-2">
              <MessageSquare className="w-4 h-4 mr-2" />
              Get in Touch
            </Badge>
            <h1 className="heading-display mb-6">
              Let's Start a <span className="text-gradient">Conversation</span>
            </h1>
            <p className="body-large text-foreground/75 mb-8 text-justify">
              Have questions or ready to join our innovation ecosystem? Our team
              is here to help. Reach out to us and let's explore how we can
              support your journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="relative -mt-16 z-20 px-4 sm:px-6 lg:px-0 lg:max-w-6xl lg:mx-auto mb-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info) => (
            <Card
              key={info.title}
              className="group hover:elevation-2 transition-all"
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <info.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="heading-4 mb-2">{info.title}</h3>
                {info.href ? (
                  <a
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={
                      info.href.startsWith('http')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                    className="text-sm font-semibold text-primary hover:underline block mb-1"
                  >
                    {info.details}
                  </a>
                ) : (
                  <p className="text-sm font-semibold text-primary mb-1">
                    {info.details}
                  </p>
                )}
                <p className="text-xs text-muted-foreground">{info.subtitle}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section-padding bg-background">
        <div className="px-4 sm:px-6 lg:px-0 lg:max-w-6xl lg:mx-auto">
          <Card className="overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div>
                  <div className="mb-8">
                    <Badge variant="outline" className="mb-4">
                      <Send className="w-4 h-4 mr-2" />
                      Send us a Message
                    </Badge>
                    <h2 className="heading-2 mb-4">
                      Drop Us a <span className="text-gradient">Line</span>
                    </h2>
                    <p className="text-foreground/70 leading-relaxed">
                      Fill out the form below and our team will get back to you
                      within 24 hours.
                    </p>
                  </div>

                  <form className="space-y-6">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        placeholder="john@example.com"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      >
                        <option value="">Select a topic</option>
                        <option value="general">General Inquiry</option>
                        <option value="startup">Startup Incubation</option>
                        <option value="corporate">Corporate Partnership</option>
                        <option value="research">Research Collaboration</option>
                        <option value="visit">Schedule a Visit</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                        placeholder="Tell us about your inquiry..."
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      size="lg"
                      className="w-full rounded-full"
                      type="submit"
                    >
                      Send Message
                      <Send className="ml-2 w-4 h-4" />
                    </Button>
                  </form>
                </div>

                {/* Right Column - Info & Map */}
                <div className="space-y-8">
                  {/* Departments */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="heading-3 mb-4">Department Contacts</h3>
                      <div className="space-y-3">
                        {departments.map((dept) => (
                          <div
                            key={dept.name}
                            className="flex items-start justify-between p-3 rounded-lg hover:bg-secondary transition-colors"
                          >
                            <span className="text-sm font-medium text-foreground">
                              {dept.name}
                            </span>
                            <a
                              href={`mailto:${dept.email}`}
                              className="text-sm text-primary hover:underline"
                            >
                              {dept.email}
                            </a>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Map */}
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 relative">
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                          <Building2 className="w-16 h-16 text-primary/30 mb-4" />
                          <h4 className="heading-4 mb-2">Visit Our Office</h4>
                          <p className="text-sm text-muted-foreground mb-4">
                            IIT Jodhpur, NH 65, Karwad
                            <br />
                            Jodhpur, Rajasthan 342030
                          </p>
                          <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="rounded-full"
                          >
                            <a
                              href="https://maps.app.goo.gl/oG3Erm3TvQxEcxyeA"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <MapPin className="w-4 h-4 mr-2" />
                              Open in Maps
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Quick Info */}
                  <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
                    <CardContent className="p-6">
                      <h3 className="heading-4 mb-4">Need Immediate Help?</h3>
                      <p className="text-sm text-foreground/70 mb-4">
                        For urgent matters, feel free to call us directly during
                        office hours or send an email.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button
                          asChild
                          size="sm"
                          className="rounded-full flex-1"
                        >
                          <a href="tel:+912912801234">
                            <Phone className="w-4 h-4 mr-2" />
                            Call Now
                          </a>
                        </Button>
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="rounded-full flex-1"
                        >
                          <a href="mailto:techpark@iitj.ac.in">
                            <Mail className="w-4 h-4 mr-2" />
                            Email Us
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
