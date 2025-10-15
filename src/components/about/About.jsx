import React from 'react'

const About = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-20 mt-16">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Text column */}
        <div className="md:w-7/12 w-full">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-6 text-gray-800 uppercase tracking-wide">About InsightConsult</h2>
          <p className="font-body text-gray-700 leading-relaxed text-base sm:text-lg mb-6 font-light">
            With over 15 years of experience, InsightConsult is a leading consultancy 
            agency specializing in strategic business transformation, operational excellence, 
            and sustainable growth solutions. We partner with organizations across industries 
            to unlock their full potential and navigate complex business challenges.
          </p>
          <p className="font-body text-gray-700 leading-relaxed text-base sm:text-lg mb-6 font-light">
            Our team of seasoned consultants brings deep industry expertise, data-driven 
            methodologies, and innovative thinking to every engagement. From startups to 
            Fortune 500 companies, we deliver measurable results that drive long-term success 
            and competitive advantage in today's dynamic marketplace.
          </p>

          <div>
            <button className="font-accent bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-3 rounded-lg shadow-lg transition transform hover:scale-105 uppercase tracking-wider">
              Learn More About Us
            </button>
          </div>
        </div>

        <div className="md:w-1/2 w-full flex justify-center md:justify-end">
          <img
            src="/about.jpg"
            alt="About InsightConsult"
            className="w-full max-w-xl h-96 md:h-[420px] object-cover rounded-2xl shadow-2xl border border-transparent transform hover:scale-105 transition duration-300"
          />
        </div>
      </div>
    </section>
  )
}

export default About