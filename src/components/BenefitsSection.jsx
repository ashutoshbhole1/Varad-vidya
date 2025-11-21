import React from 'react'
import { CheckCircle } from 'lucide-react'

const benefits = [
  {
    icon: '📚',
    title: 'Expert-Crafted Curriculum',
    description: 'Learn from industry experts with years of real-world experience'
  },
  {
    icon: '⏰',
    title: 'Learn at Your Pace',
    description: 'Access courses anytime, anywhere. No rigid schedules'
  },
  {
    icon: '🎓',
    title: 'Certification Program',
    description: 'Earn recognized certifications to boost your career'
  },
  {
    icon: '💼',
    title: 'Career Support',
    description: 'Get job placement assistance and career counseling'
  },
]

export default function BenefitsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Benefits of Online Tutoring Services at LmsZone
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Transform your learning journey with our comprehensive platform designed for success
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer animate-fade-in-up bg-white hover:bg-primary/5"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
              <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <CheckCircle size={18} className="text-primary" />
                <span className="text-sm text-primary font-medium">Available Now</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
