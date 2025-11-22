import React from 'react'
import { ArrowRight, Play } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative   bg-gradient-to-b from-blue-50 via-white to-white overflow-hidden pt-15 pb-32  ">
      {/* Background Elements */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none"> */}
        {/* Animated Gradient Orbs */}
        {/* <div className="absolute top-20 left-10 w-72 h-72 bg-primary opacity-10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary opacity-10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-accent opacity-5 rounded-full blur-3xl animate-rotate"></div> */}
      {/* </div> */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 animate-fade-in-up">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse-glow"></span>
              <span className="text-sm font-medium text-primary">🚀 Start Learning Today</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-foreground animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                Your Digital Portal to <span className="bg-gradient-to-r from-primary  to-secondary bg-clip-text text-transparent">Excellence</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed animate-fade-in-up max-w-lg" style={{ animationDelay: '0.2s' }}>
                Master in-demand skills with our expert-led courses. Learn at your own pace and transform your career with industry-standard education.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <button className="group px-8 py-4 bg-gradient-primary text-primary rounded-lg font-semibold flex items-center gap-2 hover:shadow-xl transition-smooth hover:-translate-y-1 border-2 border-primary/30">
                Get Started 
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              {/* <button className="px-8 py-4 border-2 border-primary/30 text-primary rounded-lg font-semibold flex items-center gap-2 hover:bg-primary/5 transition-smooth hover:border-primary/60">
                <Play size={20} fill="currentColor" />
                Watch Demo
              </button> */}
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold">50K</div>
                <div className="text-sm">
                  <p className="font-semibold text-foreground">Active Students</p>
                  <p className="text-slate-500">Worldwide</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary font-bold">★</div>
                <div className="text-sm">
                  <p className="font-semibold text-foreground">4.9 Rating</p>
                  <p className="text-slate-500">From 5000+ Reviews</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Visual */}
          <div className="relative h-full min-h-[500] flex items-center justify-center pointer-events-none select-none">
            {/* Main Circle Container
            <div className="relative w-80 h-80 animate-scale-in">
              Rotating Rings
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-rotate"></div>
              <div className="absolute inset-4 rounded-full border-2 border-secondary/20 animate-rotate" style={{ animationDirection: 'reverse', animationDuration: '15s' }}></div>
              <div className="absolute inset-8 rounded-full border-2 border-accent/20 animate-rotate" style={{ animationDuration: '25s' }}></div>

              Center Element with Glow
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-48 h-48">
                  Glow Background
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-20 animate-pulse-glow"></div>
                  
                  Avatar Grid
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-4 p-8">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg hover:scale-110 transition-transform cursor-pointer animate-fade-in-up"
                          style={{ animationDelay: `${0.1 * i}s` }}
                        >
                          {['👨', '👩', '🧑', '👨'][i - 1]}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              Floating Badge
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white rounded-lg shadow-lg p-4 border border-border animate-float" style={{ animationDelay: '1s' }}>
                <p className="text-center">
                  <span className="font-bold text-primary">Join 50K+</span>
                  <p className="text-xs text-slate-500">Students Learning</p>
                </p>
              </div>
            </div> */}

{/* hero girl image */}
            <img src="/hero girl.png" alt="hero image - varad vidya" />
          </div>
        </div>
      </div>
    </section>
  )
}


