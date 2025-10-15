import React from 'react'



const Banner = () => {
  return (
    <>
    <section id="home" style={{ backgroundImage: "url('/banner.jpg')" }} className='banner relative overflow-hidden h-screen bg-cover bg-center flex flex-col justify-center items-center text-white px-6 sm:px-12 md:px-24 lg:px-48 gap-6'>
        <div className='absolute inset-0 bg-black/50 pointer-events-none'></div>
        <div className='relative z-10 text-center space-y-6 mt-8'>
            <h1 className='font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-wide uppercase'>
                Transform Your Business with <br />Expert Consultancy
            </h1>
            <p className='font-body text-lg sm:text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto font-light tracking-wide'>
                Strategic insights and tailored solutions to drive growth, optimize operations, and achieve sustainable success.
            </p>
            <button className='font-accent btn-primary px-10 py-4 rounded-xl font-bold bg-amber-400 hover:bg-amber-300 transition text-base sm:text-lg text-gray-800 shadow-xl hover:shadow-2xl transform hover:scale-105 uppercase tracking-wider'>
                Schedule a Consultation
            </button>
        </div>
    </section>
    </>
  )
}

export default Banner