import React from 'react'

const topCourses = [
  { emoji: '🎬', title: 'Video Production Mastery', price: '$79.99', students: '12K', rating: '4.8' },
  { emoji: '🎵', title: 'Music Production Pro', price: '$89.99', students: '8K', rating: '4.9' },
  { emoji: '🎮', title: 'Game Development 101', price: '$99.99', students: '15K', rating: '4.7' },
  { emoji: '📸', title: 'Photography Basics', price: '$69.99', students: '20K', rating: '4.6' },
]

export default function TopCoursesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-4 animate-fade-in-up">
          Stay Ahead Top 10 Latest Courses
        </h2>
        <p className="text-center text-slate-600 mb-16 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Discover the hottest courses trending right now
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topCourses.map((course, idx) => (
            <div
              key={idx}
              className="group rounded-xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer border border-border hover:border-primary animate-scale-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="h-40 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-5xl group-hover:scale-125 transition-transform">
                {course.emoji}
              </div>
              <div className="p-4">
                <h3 className="font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{course.title}</h3>
                <div className="flex items-center justify-between mb-4 text-sm">
                  <span className="text-primary font-bold">{course.price}</span>
                  <span className="text-yellow-500">⭐ {course.rating}</span>
                </div>
                <p className="text-xs text-slate-500 mb-4">{course.students} students enrolled</p>
                <button className="w-full py-2 bg-gradient-primary text-white rounded-lg text-sm font-semibold hover:shadow-lg transition-all group-hover:-translate-y-1">
                  Enroll
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
