import React from 'react'

const Footer = () => {
  return (
    <footer id="contact" className="bg-white border-t-2 border-gray-200 mt-16">
      <h1 className="font-heading text-3xl sm:text-4xl font-bold mb-6 pt-12 text-center text-amber-500 uppercase tracking-wide">
        Let's Transform Your Business Together!
      </h1>

      <div className='max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8'>
        {/* Contact Us */}
        <div>
          <h2 className="font-heading text-xl font-bold mb-4 uppercase tracking-wide text-gray-800">Contact Us</h2>
          <p className="font-body text-gray-600 text-sm mb-2 font-light hover:text-amber-500 transition duration-300">Email: info@insightconsult.com</p>
          <p className="font-body text-gray-600 text-sm mb-2 font-light hover:text-amber-500 transition duration-300">Phone: (123) 456-7890</p>
          <p className="font-body text-gray-600 text-sm mb-2 font-light hover:text-amber-500 transition duration-300">Address: 123 Main St, City, State</p>
          <p className="font-body text-gray-600 text-sm font-light hover:text-amber-500 transition duration-300`  ">Hours: Mon-Fri 9AM-5PM</p>
        </div>

        {/* Location */}
        <div>
          <h2 className="font-heading text-xl font-bold mb-4 uppercase tracking-wide text-gray-800">Location</h2>
          <div className="w-full h-48 overflow-hidden">
            <p className="font-body text-gray-600 text-sm mb-1 font-light p-4 hover:text-amber-500 transition duration-300">123 Main St, City, State. Our modern office space is designed to facilitate collaboration and innovation. Visit us to discuss how we can transform your business.
            </p>
 
          </div>
        </div>
        {/* Follow Us */}
        <div>
          <h2 className="font-heading text-xl font-bold mb-4 uppercase tracking-wide text-gray-800">Follow Us</h2>
          <p className="font-body text-gray-600 text-sm mb-2 font-light hover:text-amber-500 transition duration-300">Facebook: facebook.com/insightconsult</p>
          <p className="font-body text-gray-600 text-sm mb-2 font-light hover:text-amber-500 transition duration-300">Twitter: @insightconsult</p>
          <p className="font-body text-gray-600 text-sm mb-2 font-light hover:text-amber-500 transition duration-300">Instagram: @insightconsult</p>
          <p className="font-body text-gray-600 text-sm mb-2 font-light hover:text-amber-500 transition duration-300">LinkedIn: linkedin.com/company/insightconsult</p>
          <p className="font-body text-gray-600 text-sm font-light hover:text-amber-500 transition duration-300">YouTube: youtube.com/insightconsult</p>
        </div>
      </div>

      <div className="text-center py-4 bg-gray-50 mt-8 border-t border-gray-200">
        <p className="font-body text-gray-600 text-sm font-light hover:text-amber-500 transition duration-300">© 2025 InsightConsult. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer