import React, { useState } from 'react'
import { Mail } from 'lucide-react'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thanks for subscribing!')
    setEmail('')
  }

  return (
    <section className="py-20 bg-gradient-to-r from-primary via-primary-light to-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">
          Subscribe Our Newsletter
        </h2>
        <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Get the latest updates, exclusive offers, and learning tips delivered straight to your inbox.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="flex-1 relative">
            <Mail className="absolute left-4 top-4 text-slate-400" size={20} />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-white text-foreground placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <button
            type="submit"
            className="px-8 py-3 bg-accent text-white rounded-lg font-semibold hover:shadow-xl transition-all hover:-translate-y-1 whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
