import Preloader from "../components/Preloader"

import Header from "../components/Header";
import Hero from "../components/Hero";
import BenefitsSection from "../components/BenefitsSection";
import CoursesShowcase from "../components/CoursesShowcase";
import Statistics from "../components/Statistics";
import Services from "../components/Services";
import TestimonialsSection from "../components/TestimonialsSection";
import FAQSection from "../components/FAQSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

import Cursor from "../components/Cursor";

import { useState } from "react";
 

const Home = () => {

  const [loading, setLoading] = useState(true)

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {!loading && (
        <div className="min-h-screen bg-white ">

          <Cursor />

          <Header />
          <main>
            <Hero />
            <BenefitsSection />
            <CoursesShowcase />
            <Statistics />
            <Services />
            <TestimonialsSection />
            <FAQSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      )
      }
    </>
  )
};

export default Home;
