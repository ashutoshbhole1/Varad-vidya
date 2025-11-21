import React from 'react'

const workshops = [
  { emoji: '🎨', title: 'UI/UX Design Workshop', description: 'Learn design principles and tools' },
  { emoji: '💻', title: 'Web Development Bootcamp', description: 'Build real-world web applications' },
  { emoji: '📱', title: 'Mobile App Development', description: 'Create apps for iOS and Android' },
]

export default function WorkshopsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-16 animate-fade-in-up">
          Upcoming Workshops
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {workshops.map((workshop, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-transparent hover:border-primary hover:shadow-xl transition-all duration-300 cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <div className="text-6xl mb-4 group-hover:rotate-12 transition-transform">{workshop.emoji}</div>
              <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{workshop.title}</h3>
              <p className="text-slate-600 mb-6">{workshop.description}</p>
              <button className="w-full px-4 py-2 bg-gradient-primary text-white rounded-lg font-semibold hover:shadow-lg transition-all group-hover:-translate-y-1">
                Register Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
