'use client'

import { Badge } from '@/components/ui/badge'
import { Building2, Users, Lightbulb, TrendingUp } from 'lucide-react'

const stats = [
  { value: '852', label: 'Acres Campus', icon: Building2, suffix: '' },
  { value: '50', label: 'Industry Partners', icon: Users, suffix: '+' },
  { value: '100', label: 'Startups Incubated', icon: Lightbulb, suffix: '+' },
  { value: '₹200', label: 'Cr Investments', icon: TrendingUp, suffix: '+' },
]

export default function StatsSection() {
  return (
    <section className="relative -mt-16 z-20 px-4 sm:px-6 lg:px-0 lg:max-w-6xl lg:mx-auto">
      {/* Glass Card */}
      <div className="rounded-2xl bg-card/90 backdrop-blur-xl border border-border elevation-3 p-6 md:p-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center group">
              {/* Icon */}
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <stat.icon className="w-5 h-5" />
              </div>
              {/* Value */}
              <div className="flex items-baseline justify-center gap-1 mb-1">
                <span className="text-3xl md:text-4xl font-bold text-gradient-gold">
                  {stat.value}
                </span>
                {stat.suffix && (
                  <span className="text-xl font-semibold text-primary">
                    {stat.suffix}
                  </span>
                )}
              </div>
              {/* Label */}
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
