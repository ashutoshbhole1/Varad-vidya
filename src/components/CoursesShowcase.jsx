import React from 'react'
import { ShoppingCart } from 'lucide-react'

const courses = [
  {
    image: './Images/Skill devlopment.jpg',
    title: 'Skill Development ',
    category: 'Skills',
    desc: 'Build essential personal and professional skills to grow confidently in academics, career, and life.',
    // price: '₹499/-'
  },
  {
    image: './Images/public speaking.jpg',
    title: 'Public Speaking Fundamentals',
    category: 'Skills',
    desc: 'Learn how to speak with clarity, confidence, and impact in front of any audience.',
    // price: '₹499/-'
  },
  {
    image: './Images/Digital Marketing.webp',
    title: 'Digital Marketing ',
    category: 'Marketing',
    desc: 'Master modern marketing strategies including social media, branding, and online growth techniques.',
    // price: '₹999/-'
  },
  {
    image: './Images/abacus.webp',
    title: 'Abacus Training ',
    category: 'Skills',
    desc: 'Enhance mental math speed, focus, and brain power through structured abacus learning.',
    // price: '₹499/-'
  }
]

export default function CoursesShowcase() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50" id='courses'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in-up">
            Build <span className='text-primary'> Practical Skills </span>for a Smarter Future
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Skill-focused programs designed to help learners grow with confidence and clarity
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="group  flex flex-col  rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer animate-scale-in border border-border hover:border-primary"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              {/* Image Section */}
              <div className="h-58 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center relative overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-full w-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow">
                <a href="#contact">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">{course.category}</span>
                    {/* <span className="text-sm font-bold text-secondary">{course.price}</span> */}
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{course.title}</h3>
                  <h5 className='mb-3'>{course.desc}</h5>
                  <button className="w-full py-2 mt-auto px-4 cursor-pointer bg-primary text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all group-hover:-translate-y-0.5">
                    {/* <ShoppingCart size={18} /> */}
                    Enroll Now
                  </button>
                   </a>
              </div>
           
            </div>
          ))}
      </div>
    </div>
    </section >
  )
}
