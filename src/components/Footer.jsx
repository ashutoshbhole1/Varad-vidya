import React from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-4"><img src="/Varad Vidya Logo hero.jpeg" className='w-15 rounded-xl' alt="" />VARAD VIDYA</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Transform your learning journey with our cutting-edge platform and expert instructors.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-4">Explore</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#courses" className="hover:text-white transition">Courses</a></li>
              <li><a href="#services" className="hover:text-white transition">Services</a></li>
              <li><a href="#blog" className="hover:text-white transition">Blog</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              {/* <li><a href="#" className="hover:text-white transition">Help Center</a></li> */}
              <li><a href="#faq" className="hover:text-white transition">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:info@varadvidya.com" className="hover:text-white transition">info@varadvidya.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+917507611753" className="hover:text-white transition">+91 75076 11753</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Jalgaon (452001), Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-slate-400 text-sm">© 2026 VARAD VIDYA. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-white transition">Facebook</a>
              <a href="#" className="text-slate-400 hover:text-white transition">Twitter</a>
              <a href="#" className="text-slate-400 hover:text-white transition">LinkedIn</a>
              <a href="#" className="text-slate-400 hover:text-white transition">Instagram</a>
            </div>
          </div>

        </div>

        <h5 className='text-slate-400 text-sm text-center mt-9'>Designed and developed by <a className='text-slate-300 ' href="https://kanhaashutech.com" target='_blank'>KANHA-ASHU TECH</a></h5>
      </div>
    </footer>
  )
}
