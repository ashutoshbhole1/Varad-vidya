import React from 'react'

const stats = [
  { label: '50K+', description: 'Active Students', icon: '👥' },
  { label: '500+', description: 'Courses Available', icon: '📚' },
  { label: '4.9★', description: 'Avg Rating', icon: '⭐' },
  { label: '98%', description: 'Success Rate', icon: '✅' },
]

export default function Statistics() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="text-center p-8 rounded-xl group hover:bg-primary/5 hover:shadow-lg transition-all duration-300 animate-fade-in-up cursor-pointer"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="text-5xl mb-3 group-hover:scale-125 transition-transform">{stat.icon}</div>
              <h3 className="text-4xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">{stat.label}</h3>
              <p className="text-slate-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
