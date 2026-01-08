import React from 'react'

const workshops = [
  { emoji: '🎓', title: 'Skill Development', description: 'Learn design principles and tools', link: 'https://wa.me/917507611753?text=I%20want%20more%20info%20regarding%20Skill%20Development' },
  { emoji: '📢', title: 'Digital Marketing', description: 'Learn design principles and tools', link: 'https://wa.me/917507611753?text=I%20want%20more%20info%20regarding%20Digital%20Marketing' },
  { emoji: '💻', title: 'E-Commerce', description: 'Build real-world web applications', link: 'https://wa.me/917507611753?text=I%20want%20more%20info%20regarding%20E-COMMERCE' },
  { emoji: '📱', title: 'Website Development', description: 'Create apps for iOS and Android', link: 'https://wa.me/917507611753?text=I%20want%20more%20info%20regarding%20Website%20Development' },
]

export default function Services() {
  return (
    <section className="py-20 bg-white" id='services'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-16 animate-fade-in-up">
          Our Service's
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

              <a
                href={workshop.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-block text-center px-4 py-2 bg-green-400 text-white rounded-lg font-semibold hover:shadow-lg transition-all group-hover:-translate-y-1"
              >
                Enquire Now
              </a>


              {/* <button
                onClick={() => window.open(workshop.link, "_blank")}
                rel="noopener noreferrer" className="w-full px-4 py-2 bg-green-400  text-white rounded-lg font-semibold hover:shadow-lg transition-all group-hover:-translate-y-1">
                  Enquire Now
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
