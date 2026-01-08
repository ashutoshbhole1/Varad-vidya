import React from 'react'
import { ShoppingCart } from 'lucide-react'

const courses = [
  {
    image: '📊',
    title: 'Skill Dvelopment ',
    category: 'Skills',
    price: '₹499/-'
  },
  {
    image: '💻',
    title: 'Public Speaking Fundamentals',
    category: 'Skills',
    price: '₹499/-'
  },
  {
    image: '🎨',
    title: 'Digital Marketing ',
    category: 'Marketing',
    price: '₹999/-'
  },
  {
    image: '🎨',
    title: 'Abacus Training ',
    category: 'Skills',
    price: '₹499/-'
  }
]

export default function CoursesShowcase() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50" id='courses'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in-up">
          Build Practical Skills for a Smarter Future
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
           Skill-focused programs designed to help learners grow with confidence and clarity
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="group rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer animate-scale-in border border-border hover:border-primary"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              {/* Image Section */}
              <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center relative overflow-hidden">
                <span className="text-6xl group-hover:scale-125 transition-transform duration-300">{course.image}</span>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">{course.category}</span>
                  <span className="text-sm font-bold text-secondary">{course.price}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{course.title}</h3>
                <h5>sdfa</h5>
                <button className="w-full py-2 px-4 bg-gradient-primary text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all group-hover:-translate-y-1">
                  <ShoppingCart size={18} />
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
