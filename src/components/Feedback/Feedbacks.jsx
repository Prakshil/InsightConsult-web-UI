import React from "react";

const Customer = () => {
  const feedbacks = [
    {
      text: "InsightConsult helped us restructure our operations and increase efficiency by 40%. Their strategic approach and hands-on support were instrumental in our transformation journey.",
      name: "Alex Robinson",
      role: "CEO, TechVentures Inc.",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      text: "Working with InsightConsult was a game-changer for our market expansion. Their deep industry insights and actionable recommendations exceeded our expectations.",
      name: "Samantha Smith",
      role: "VP Strategy, GlobalRetail Co.",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      text: "The team at InsightConsult brought clarity to our complex challenges. Their data-driven approach and collaborative style made the entire process seamless and impactful.",
      name: "Michael Chen",
      role: "Director of Operations, FinanceHub",
      img: "https://randomuser.me/api/portraits/men/45.jpg",
    },
  ];
  return (
    <section className="py-20 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48 bg-white text-center mt-16">
      <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-4 text-gray-800 uppercase tracking-wide">
        Client Testimonials
      </h1>
      <p className='font-body text-center text-gray-600 max-w-2xl mx-auto mb-12 text-lg font-light'>
        Hear from our clients about their experience working with InsightConsult
      </p>
      <div className="flex flex-col sm:flex-row gap-8 flex-wrap justify-center mb-8">
        {feedbacks.map((feedback, index) => {
          return (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg max-w-sm flex flex-col justify-between text-left hover:shadow-2xl transition transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="mb-4">
                <svg className="w-10 h-10 text-amber-400 mb-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <p className="font-body text-gray-700 text-base sm:text-lg mb-4 leading-relaxed font-light italic">
                  {feedback.text}
                </p>
              </div>

              <div className="flex justify-between items-center pt-4 border-t-2 border-amber-100">
                <div>
                  <h2 className="font-heading text-gray-800 font-bold text-base sm:text-lg uppercase tracking-wide">
                    {feedback.name}
                  </h2>
                  <p className="font-body text-gray-500 text-xs sm:text-sm font-light">
                    {feedback.role}
                  </p>
                </div>
                <img
                  src={feedback.img}
                  alt={feedback.name}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-4 border-amber-400 shadow-lg"
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-12">
        <button className="font-accent px-12 sm:px-16 py-4 rounded-xl font-bold bg-amber-400 text-gray-800 shadow-xl hover:bg-amber-300 transition duration-300 transform hover:scale-105 uppercase tracking-wider">
          Schedule Your Consultation
        </button>
      </div>
    </section>
  );
};

export default Customer;