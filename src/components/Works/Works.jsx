import React from 'react'

const Works = () => {
    const stats = [
        { label: 'Projects Completed', value: '350+' },
        { label: 'Happy Clients', value: '180+' },
        { label: 'Industry Awards', value: '25' },
        { label: 'Years of Experience', value: '15+' },
        { label: 'Expert Consultants', value: '40+' },
        { label: 'Countries Served', value: '12' }
    ]
  return (
   <section className='px-4 py-20 sm:px-8 md:px-16 lg:px-24 xl:px-48 bg-white mt-16'>
    <div className='max-w-7xl mx-auto text-center'>
        <h1 className='font-heading text-4xl sm:text-5xl font-bold mb-4 text-gray-800 uppercase tracking-wide'>
            Proven Track Record
        </h1>
        <p className='font-body text-center text-gray-600 max-w-2xl mx-auto mb-12 text-lg font-light'>
            Numbers that demonstrate our commitment to excellence and client success
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
            {
                stats.map((stat, index) => (
                    <div key={index} className='bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition transform hover:-translate-y-2 border border-gray-100'>
                        <h2 className='font-heading text-5xl sm:text-6xl font-bold text-amber-500 mb-3'>{stat.value}</h2>
                        <p className='font-body text-lg text-gray-700 font-medium uppercase tracking-wide'>{stat.label}</p>
                    </div>
                ))
            }
        </div>

    </div>
   </section>
  )
}

export default Works