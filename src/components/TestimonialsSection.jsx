import React from 'react'

const testimonials = [
  { name: 'Alex Chen', role: 'Student', quote: 'LMS transformed my career in just 3 months!', emoji: '👨‍💻' },
  { name: 'Maria Garcia', role: 'Professional', quote: 'Best platform for learning new skills. Highly recommended!', emoji: '👩‍💼' },
  { name: 'James Wilson', role: 'Developer', quote: 'The instructors are amazing and content is top-notch.', emoji: '👨‍🔧' },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-16 animate-fade-in-up">
          What Our Valued Students Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-border hover:border-primary hover:shadow-xl transition-all duration-300 cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  {testimonial.emoji}
                </div>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-slate-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>
              <p className="text-slate-700 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
