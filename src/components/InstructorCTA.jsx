import React from 'react'
import { ArrowRight } from 'lucide-react'

export default function InstructorCTA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-left">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Want To Become an <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Online Teacher?</span> Then Become An Instructor
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Share your expertise with thousands of students worldwide and earn passive income while making an impact.
            </p>
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary text-white rounded-lg font-semibold hover:shadow-xl transition-all hover:-translate-y-1">
              Apply as Instructor
              <ArrowRight size={20} />
            </button>
          </div>
          <div className="relative h-80 animate-fade-in-right">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center">
              <div className="text-8xl">👨‍🏫</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
