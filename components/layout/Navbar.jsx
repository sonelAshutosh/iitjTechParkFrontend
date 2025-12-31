'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from '@/components/ui/sheet'
import {
  Menu,
  ChevronRight,
  ChevronDown,
  Rocket,
  Building2,
  Users,
  Lightbulb,
  FlaskConical,
  GraduationCap,
  Briefcase,
  Factory,
  Sun,
  Moon,
  ArrowRight,
} from 'lucide-react'
import { animate } from 'animejs'

// Navigation items
const navigationItems = [
  {
    title: 'About',
    href: '/about',
    dropdown: [
      {
        title: 'Our Vision',
        href: '/about/vision',
        description: 'Building the future of innovation',
        icon: Lightbulb,
      },
      {
        title: 'Leadership',
        href: '/about/leadership',
        description: 'Meet our leadership team',
        icon: Users,
      },
      {
        title: 'Infrastructure',
        href: '/about/infrastructure',
        description: 'World-class facilities',
        icon: Building2,
      },
    ],
  },
  {
    title: 'Ecosystem',
    href: '/ecosystem',
    dropdown: [
      {
        title: 'R&D Collaborations',
        href: '/ecosystem/research',
        description: 'Industry-academia partnerships',
        icon: FlaskConical,
      },
      {
        title: 'Startups & Incubation',
        href: '/ecosystem/startups',
        description: 'Nurturing innovation',
        icon: Rocket,
      },
      {
        title: 'Industry Partners',
        href: '/ecosystem/partners',
        description: 'Our collaborators',
        icon: Factory,
      },
    ],
  },
  { title: 'Facilities', href: '/facilities' },
  {
    title: 'Opportunities',
    href: '/opportunities',
    dropdown: [
      {
        title: 'For Startups',
        href: '/opportunities/startups',
        description: 'Launch your venture',
        icon: Rocket,
      },
      {
        title: 'For Corporates',
        href: '/opportunities/corporates',
        description: 'R&D presence',
        icon: Briefcase,
      },
      {
        title: 'Careers',
        href: '/opportunities/careers',
        description: 'Join our team',
        icon: GraduationCap,
      },
    ],
  },
  { title: 'News', href: '/news' },
  { title: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [closeTimeout, setCloseTimeout] = useState(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
    localStorage.setItem('theme', isDark ? 'light' : 'dark')
  }

  const handleMouseEnter = (itemTitle) => {
    if (closeTimeout) {
      clearTimeout(closeTimeout)
      setCloseTimeout(null)
    }
    setActiveDropdown(itemTitle)
  }

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null)
    }, 300) // 300ms delay before closing
    setCloseTimeout(timeout)
  }

  useEffect(() => {
    animate('.navbar-logo', {
      opacity: [0, 1],
      scale: [0.9, 1],
      duration: 600,
      ease: 'outExpo',
    })
    animate('.navbar-item', {
      opacity: [0, 1],
      translateY: [-8, 0],
      duration: 400,
      delay: (_, i) => 80 + i * 40,
      ease: 'outQuad',
    })
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3' : 'py-4'
      }`}
    >
      {/* Consistent horizontal padding: px-4 on mobile, px-6 on tablet, max-w-6xl centered on desktop */}
      <div className="px-4 sm:px-6 lg:px-0 lg:max-w-6xl lg:mx-auto">
        {/* Glassmorphic Container */}
        <div
          className={`rounded-2xl transition-all duration-300 ${
            isScrolled
              ? 'bg-card/90 backdrop-blur-2xl elevation-2 border border-border/50'
              : 'bg-card/70 backdrop-blur-xl border border-border/30'
          }`}
        >
          {/* Inner padding consistent: px-6 */}
          <nav className="px-6 py-3">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link
                href="/"
                className="navbar-logo flex items-center gap-3 group"
              >
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-gold flex items-center justify-center transition-transform duration-200 group-hover:scale-105 ${
                    isScrolled ? 'elevation-1' : ''
                  }`}
                >
                  <span className="text-base font-bold text-umber">TP</span>
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-semibold text-foreground leading-tight">
                    IIT Jodhpur
                  </p>
                  <p className="text-xs text-muted-foreground leading-tight">
                    Technology Park
                  </p>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-1">
                {navigationItems.map((item, index) => (
                  <div
                    key={item.title}
                    className="navbar-item relative"
                    onMouseEnter={() =>
                      item.dropdown && handleMouseEnter(item.title)
                    }
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href={item.href}
                      className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 inline-flex items-center gap-1 ${
                        pathname === item.href ||
                        pathname.startsWith(item.href + '/')
                          ? 'text-primary bg-primary/10'
                          : 'text-foreground/80 hover:text-foreground hover:bg-secondary'
                      }`}
                    >
                      {item.title}
                      {item.dropdown && (
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            activeDropdown === item.title ? 'rotate-180' : ''
                          }`}
                        />
                      )}
                    </Link>

                    {/* Dropdown Menu */}
                    {item.dropdown && activeDropdown === item.title && (
                      <div className="absolute top-full left-0 mt-2 w-72 animate-fade-in">
                        <div className="rounded-2xl bg-card/95 backdrop-blur-2xl elevation-3 border border-border overflow-hidden">
                          <div className="p-2">
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.title}
                                href={subItem.href}
                                className="flex items-start gap-3 p-3 rounded-xl hover:bg-secondary transition-colors group"
                              >
                                <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                  <subItem.icon className="w-4 h-4" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm font-medium text-foreground">
                                    {subItem.title}
                                  </p>
                                  <p className="text-xs text-muted-foreground mt-0.5">
                                    {subItem.description}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Right Section */}
              <div className="flex items-center gap-2">
                {/* Theme Toggle */}
                <button
                  onClick={toggleTheme}
                  className="navbar-item w-10 h-10 rounded-full flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-secondary transition-all duration-200"
                  aria-label="Toggle theme"
                >
                  {isDark ? (
                    <Sun className="w-5 h-5 text-gold" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </button>

                {/* CTA Button */}
                <Button
                  asChild
                  className="navbar-item hidden sm:inline-flex h-10 px-5 rounded-full bg-primary text-primary-foreground font-medium elevation-1 hover:elevation-2 transition-all duration-200"
                >
                  <Link href="/contact">
                    Get in Touch
                    <ArrowRight className="ml-1.5 w-4 h-4" />
                  </Link>
                </Button>

                {/* Mobile Menu */}
                <Sheet
                  open={isMobileMenuOpen}
                  onOpenChange={setIsMobileMenuOpen}
                >
                  <SheetTrigger asChild className="lg:hidden">
                    <button className="w-10 h-10 rounded-full flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-secondary transition-all duration-200">
                      <Menu className="w-5 h-5" />
                    </button>
                  </SheetTrigger>
                  <SheetContent
                    side="right"
                    className="w-full sm:w-[360px] p-0 bg-card/95 backdrop-blur-2xl border-l border-border"
                  >
                    <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                    <div className="flex flex-col h-full">
                      {/* Header - Consistent padding px-6 py-5 */}
                      <div className="px-6 py-5 border-b border-border">
                        <div className="flex items-center gap-3">
                          <div className="w-11 h-11 rounded-xl bg-gradient-gold flex items-center justify-center elevation-1">
                            <span className="text-base font-bold text-umber">
                              TP
                            </span>
                          </div>
                          <div>
                            <p className="font-semibold text-foreground">
                              IIT Jodhpur
                            </p>
                            <p className="text-sm text-muted-foreground">
                              Technology Park
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Nav Items - Consistent padding px-4 */}
                      <div className="flex-1 overflow-auto py-4 px-4">
                        <div className="space-y-1">
                          {navigationItems.map((item) => (
                            <div key={item.title}>
                              <Link
                                href={item.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`flex items-center justify-between py-3 px-4 rounded-xl text-base font-medium transition-all duration-200 ${
                                  pathname === item.href ||
                                  pathname.startsWith(item.href + '/')
                                    ? 'text-primary bg-primary/10'
                                    : 'text-foreground hover:bg-secondary'
                                }`}
                              >
                                {item.title}
                                {item.dropdown && (
                                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                                )}
                              </Link>
                              {item.dropdown && (
                                <div className="ml-4 mt-1 space-y-1 pl-4 border-l-2 border-border">
                                  {item.dropdown.map((subItem) => (
                                    <Link
                                      key={subItem.title}
                                      href={subItem.href}
                                      onClick={() => setIsMobileMenuOpen(false)}
                                      className="flex items-center gap-3 py-2.5 px-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-200"
                                    >
                                      <subItem.icon className="w-4 h-4 text-primary/60" />
                                      {subItem.title}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Footer - Consistent padding px-6 py-5 */}
                      <div className="px-6 py-5 border-t border-border">
                        <Button
                          asChild
                          className="w-full h-12 rounded-xl bg-primary text-primary-foreground font-semibold elevation-1"
                        >
                          <Link
                            href="/contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            Get in Touch
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
