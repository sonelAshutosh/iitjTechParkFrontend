'use client'

import Link from 'next/link'
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Youtube,
  Instagram,
  ArrowUpRight,
  ChevronUp,
  Heart,
} from 'lucide-react'
import { useEffect, useRef } from 'react'
import { animate, stagger } from 'animejs'

const footerLinks = {
  explore: [
    { title: 'About Us', href: '/about' },
    { title: 'Our Vision', href: '/about/vision' },
    { title: 'Leadership', href: '/about/leadership' },
    { title: 'Infrastructure', href: '/about/infrastructure' },
  ],
  ecosystem: [
    { title: 'R&D Collaborations', href: '/ecosystem/research' },
    { title: 'Startups & Incubation', href: '/ecosystem/startups' },
    { title: 'Industry Partners', href: '/ecosystem/partners' },
    { title: 'Success Stories', href: '/ecosystem/success-stories' },
  ],
  opportunities: [
    { title: 'For Startups', href: '/opportunities/startups' },
    { title: 'For Corporates', href: '/opportunities/corporates' },
    { title: 'Careers', href: '/opportunities/careers' },
    { title: 'Apply Now', href: '/apply' },
  ],
  resources: [
    { title: 'News & Updates', href: '/news' },
    { title: 'Events', href: '/events' },
    { title: 'Media Gallery', href: '/gallery' },
    { title: 'FAQs', href: '/faqs' },
  ],
}

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
]

export default function Footer() {
  const footerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate('.footer-col', {
              opacity: [0, 1],
              translateY: [20, 0],
              delay: stagger(60),
              duration: 400,
              ease: 'outQuad',
            })
            observer.disconnect()
          }
        })
      },
      { threshold: 0.1 }
    )
    if (footerRef.current) observer.observe(footerRef.current)
    return () => observer.disconnect()
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer ref={footerRef} className="relative bg-secondary">
      {/* Top Divider */}
      <div className="h-px bg-border" />

      {/* Main Content - Consistent padding with Navbar */}
      <div className="px-4 sm:px-6 lg:px-0 lg:max-w-6xl lg:mx-auto">
        {/* Inner content with consistent spacing */}
        <div className="py-12 md:py-16">
          {/* Glass Card */}
          <div className="rounded-2xl bg-card/80 backdrop-blur-xl border border-border p-6 md:p-8 lg:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-6">
              {/* Brand Column */}
              <div className="lg:col-span-2 footer-col opacity-0">
                {/* Logo */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center elevation-1">
                    <span className="text-lg font-bold text-umber">TP</span>
                  </div>
                  <div>
                    <p className="text-base font-semibold text-foreground">
                      IIT Jodhpur
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Technology Park
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-foreground/80 leading-relaxed mb-6 max-w-xs">
                  Where ancient wisdom meets future technology. Premier
                  innovation hub in the heart of Rajasthan.
                </p>

                {/* Contact Info - Cards with consistent padding */}
                <div className="space-y-2">
                  <a
                    href="mailto:techpark@iitj.ac.in"
                    className="flex items-center gap-3 p-3 rounded-xl bg-secondary hover:bg-muted transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Email</p>
                      <p className="text-sm font-medium text-foreground">
                        techpark@iitj.ac.in
                      </p>
                    </div>
                  </a>

                  <a
                    href="tel:+912912801234"
                    className="flex items-center gap-3 p-3 rounded-xl bg-secondary hover:bg-muted transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Phone</p>
                      <p className="text-sm font-medium text-foreground">
                        +91 291 280 1234
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-secondary">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-0.5">
                        Address
                      </p>
                      <address className="not-italic text-sm text-foreground leading-relaxed">
                        IIT Jodhpur, NH 65
                        <br />
                        Karwad, Jodhpur 342030
                      </address>
                    </div>
                  </div>
                </div>
              </div>

              {/* Link Columns - Consistent spacing */}
              {[
                { title: 'Explore', links: footerLinks.explore },
                { title: 'Ecosystem', links: footerLinks.ecosystem },
                { title: 'Opportunities', links: footerLinks.opportunities },
                { title: 'Resources', links: footerLinks.resources },
              ].map((section) => (
                <div key={section.title} className="footer-col opacity-0">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-primary mb-4">
                    {section.title}
                  </h4>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link.title}>
                        <Link
                          href={link.href}
                          className="text-sm text-foreground/75 hover:text-foreground transition-colors inline-flex items-center gap-1 group py-0.5"
                        >
                          <span className="group-hover:underline underline-offset-2">
                            {link.title}
                          </span>
                          <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-60 transition-opacity" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Bar - Consistent padding */}
          <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4 px-2">
            {/* Social Links */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-secondary text-foreground/60 hover:text-foreground hover:bg-muted transition-all duration-200"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center">
              <p className="text-sm text-foreground/70">
                © {new Date().getFullYear()} IIT Jodhpur Technology Park
              </p>
              <p className="text-xs text-muted-foreground mt-0.5 flex items-center justify-center gap-1">
                Made with{' '}
                <Heart className="w-3 h-3 text-primary fill-current" /> in
                Rajasthan
              </p>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-foreground/70 hover:text-foreground hover:bg-muted transition-all duration-200 text-sm font-medium group"
            >
              Back to Top
              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <ChevronUp className="w-3.5 h-3.5" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
