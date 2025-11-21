import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  { q: 'How do I get started?', a: 'Simply sign up and choose your first course. You can start learning immediately!' },
  { q: 'Are certificates provided?', a: 'Yes, upon course completion, you receive a recognized certificate.' },
  { q: 'Can I access courses offline?', a: 'You can download course materials for offline access on selected courses.' },
  { q: 'What is your refund policy?', a: 'We offer a 30-day money-back guarantee on all courses.' },
]

export default function FAQSection() {
  const [open, setOpen] = useState(0)

  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-4 animate-fade-in-up">
          We're Here to Answer all Your Questions.
        </h2>

        <div className="space-y-4 mt-12">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="group rounded-lg border border-border overflow-hidden bg-white hover:shadow-lg transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <button
                onClick={() => setOpen(open === idx ? -1 : idx)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-primary/5 transition-colors"
              >
                <p className="text-lg font-semibold text-foreground text-left">{faq.q}</p>
                <ChevronDown
                  size={20}
                  className={`text-primary transition-transform duration-300 ${open === idx ? 'rotate-180' : ''}`}
                />
              </button>
              {open === idx && (
                <div className="px-6 py-4 bg-primary/5 border-t border-border animate-fade-in-down">
                  <p className="text-slate-700">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
