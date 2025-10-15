import React from 'react'
import { IoMegaphoneOutline } from "react-icons/io5";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaHandsHelping } from "react-icons/fa";

const Activities = () => {
  return (
    <section id="services" className='py-20 bg-white mt-16'>
        <h1 className='font-heading text-4xl sm:text-5xl font-bold mb-6 text-center text-gray-800 uppercase tracking-wide'>
            Our Core Services
        </h1>
        <p className='font-body text-center text-gray-600 max-w-2xl mx-auto mb-12 px-4 text-lg font-light'>
            Comprehensive consultancy solutions designed to address your unique business challenges
        </p>

        <div className='max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-8'>
            <div className='bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center w-full hover:shadow-2xl transition transform hover:-translate-y-2 border border-gray-100'>
                <div className='flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-white mb-4 shadow-lg'>
                    <IoMegaphoneOutline className='text-3xl' />
                </div>
                <h2 className='font-heading text-2xl font-bold mb-3 uppercase tracking-wide'>Strategic Planning</h2>
                <p className='font-body text-gray-600 font-light leading-relaxed'>Develop comprehensive strategies aligned with your vision to drive sustainable growth and market leadership.</p>
            </div>

            <div className='bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center w-full hover:shadow-2xl transition transform hover:-translate-y-2 border border-gray-100'>
                <div className='flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-white mb-4 shadow-lg'>
                    <FaEnvelopeOpenText className='text-3xl' />
                </div>
                <h2 className='font-heading text-2xl font-bold mb-3 uppercase tracking-wide'>Change Management</h2>
                <p className='font-body text-gray-600 font-light leading-relaxed'>Guide organizational transformation with proven methodologies to ensure smooth transitions and stakeholder buy-in.</p>
            </div>

            <div className='bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center w-full hover:shadow-2xl transition transform hover:-translate-y-2 border border-gray-100'>
                <div className='flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white mb-4 shadow-lg'>
                    <FaMagnifyingGlass className='text-3xl' />
                </div>
                <h2 className='font-heading text-2xl font-bold mb-3 uppercase tracking-wide'>Market Research</h2>
                <p className='font-body text-gray-600 font-light leading-relaxed'>Leverage data-driven insights and competitive intelligence to make informed decisions and identify opportunities.</p>
            </div>

            <div className='bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center w-full hover:shadow-2xl transition transform hover:-translate-y-2 border border-gray-100'>
                <div className='flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 text-white mb-4 shadow-lg'>
                    <FaHandsHelping className='text-3xl' />
                </div>
                <h2 className='font-heading text-2xl font-bold mb-3 uppercase tracking-wide'>Process Optimization</h2>
                <p className='font-body text-gray-600 font-light leading-relaxed'>Streamline operations, reduce costs, and enhance efficiency through best-in-class process improvement frameworks.</p>
            </div>
        </div>
    </section>
  )
}

export default Activities