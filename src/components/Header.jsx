import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 animate-fade-in-down">
          <div className="w-12 h-10 rounded-lg bg-gradient-primary flex items-center justify-center  font-bold">
            <img src="../public/Varad Vidya Logo hero.jpeg" alt="" />
          </div>
          <span className="font-bold text-lg text-foreground ">VARAD VIDYA</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-foreground hover:text-primary transition-smooth">Home</a>
          <a href="#" className="text-foreground hover:text-primary transition-smooth">Courses</a>
          <a href="#" className="text-foreground hover:text-primary transition-smooth">About</a>
          <a href="#" className="text-foreground hover:text-primary transition-smooth">Contact</a>
        </div>

        {/* <div className="hidden md:flex items-center gap-4">
          <button className="px-6 py-2 rounded-lg border border-border hover:border-primary transition-smooth">
            Login
          </button>
          <button className="px-6 py-2 rounded-lg bg-gradient-primary text-white hover:shadow-lg transition-smooth">
            Sign Up
          </button>
        </div> */}

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-border p-4 animate-fade-in-down">
          <div className="flex flex-col gap-4">
            <a href="#" className="text-foreground hover:text-primary">Home</a>
            <a href="#" className="text-foreground hover:text-primary">Courses</a>
            <a href="#" className="text-foreground hover:text-primary">About</a>
            <a href="#" className="text-foreground hover:text-primary">Contact</a>
            {/* <button className="px-4 py-2 rounded-lg border border-border w-full">Login</button>
            <button className="px-4 py-2 rounded-lg bg-gradient-primary text-white w-full">Sign Up</button> */}
          </div>
        </div>
      )}
    </header>
  )
}
