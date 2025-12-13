import React from 'react'
import Header from './components/Header'
// import Hero from './components/Hero'
import Hero from './components/Hero'
import BenefitsSection from './components/BenefitsSection'
import CoursesShowcase from './components/CoursesShowcase'
import Statistics from './components/Statistics'
import InstructorsSection from './components/InstructorsSection'
import WorkshopsSection from './components/WorkshopsSection'
import TopCoursesSection from './components/TopCoursesSection'
import TestimonialsSection from './components/TestimonialsSection'
import FAQSection from './components/FAQSection'
import InstructorCTA from './components/InstructorCTA'
import BlogSection from './components/BlogSection'
import NewsletterSection from './components/NewsletterSection'
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
        <InstructorsSection />
        {/* <WorkshopsSection /> */}
        <TopCoursesSection />
        <TestimonialsSection />
        <FAQSection />
        <InstructorCTA />
        <BlogSection />
        {/* <NewsletterSection /> */}
      </main>
      <Footer />
    </div>
  )
}
