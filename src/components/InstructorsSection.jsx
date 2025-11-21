import React from 'react'

const instructors = [
  { name: 'John Smith', role: 'UI/UX Expert', icon: '👨‍🏫' },
  { name: 'Sarah Johnson', role: 'Development Lead', icon: '👩‍🏫' },
  { name: 'Mike Davis', role: 'Marketing Strategist', icon: '👨‍💼' },
]

export default function InstructorsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Expert Instructor-Providing Learning Courses
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {instructors.map((instructor, idx) => (
            <div
              key={idx}
              className="text-center group animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <div className="mb-6 relative inline-block">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {instructor.icon}
                </div>
                <div className="absolute bottom-0 right-0 w-8 h-8 bg-accent rounded-full border-4 border-white flex items-center justify-center text-sm">✓</div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{instructor.name}</h3>
              <p className="text-slate-600 mb-4">{instructor.role}</p>
              <button className="px-6 py-2 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors">
                View Profile
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
