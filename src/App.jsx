import React from 'react'
import Header from './components/Header'
// import Hero from './components/Hero'
import Hero from './components/Hero'
import BenefitsSection from './components/BenefitsSection'
import CoursesShowcase from './components/CoursesShowcase'
import Statistics from './components/Statistics'
import InstructorsSection from './components/InstructorsSection'
import Services from './components/Services'
import TopCoursesSection from './components/TopCoursesSection'
import TestimonialsSection from './components/TestimonialsSection'
import FAQSection from './components/FAQSection'
import InstructorCTA from './components/InstructorCTA'
import BlogSection from './components/BlogSection'
import NewsletterSection from './components/NewsletterSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <BenefitsSection />
        <CoursesShowcase />
        <Statistics />
        {/* <InstructorsSection /> */}
        <Services /> 
        {/* <TopCoursesSection /> */}
        <TestimonialsSection />
        <FAQSection />
        {/* <InstructorCTA /> */}
        <BlogSection />
        <ContactSection/>
        {/* <NewsletterSection /> */}
      </main>
      <Footer />
    </div>
  )
}
