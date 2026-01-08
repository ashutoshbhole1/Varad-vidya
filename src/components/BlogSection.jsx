import React from 'react'

const blogs = [
  { title: 'Learning Strategies for Online Education', date: 'Mar 15, 2024', emoji: '📚' },
  { title: 'Top Tech Trends in 2024', date: 'Mar 10, 2024', emoji: '💻' },
  { title: 'How to Balance Work and Learning', date: 'Mar 5, 2024', emoji: '⚖️' },
]

export default function BlogSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-4 animate-fade-in-up">
          Our Blogs
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {blogs.map((blog, idx) => (
            <div
              key={idx}
              className="group rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer border border-border hover:border-primary animate-scale-in"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-6xl group-hover:scale-125 transition-transform">
                {blog.emoji}
              </div>
              <div className="p-6">
                <p className="text-sm text-slate-500 mb-2">{blog.date}</p>
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors leading-snug">{blog.title}</h3>
                <button className="text-primary font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read More
                  {/* <ArrowRight size={18} /> */}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
