import React from 'react'

const Pricing = () => {
    const plans = [
    {
      name: "Starter",
      features: [
        "Business Assessment",
        "Strategic Roadmap",
        "2 Consulting Sessions",
        "Email Support",
        "Process Documentation",
        "30-Day Action Plan",
      ],
      price: "$2,500",
      period: "/project",
    },
    {
      name: "Professional",
      features: [
        "Everything in Starter",
        "6 Consulting Sessions",
        "Market Analysis Report",
        "Implementation Support",
        "Priority Phone Support",
        "Quarterly Review",
      ],
      price: "$8,500",
      period: "/quarter",
      highlight: true,
    },
    {
      name: "Enterprise",
      features: [
        "Everything in Professional",
        "Unlimited Consulting",
        "Dedicated Account Manager",
        "Custom Solutions",
        "On-site Workshops",
        "24/7 Support",
      ],
      price: "Custom",
      period: "",
    },
  ];
 return (
    <section
      id="pricing"
      className="py-20 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48 bg-white mt-16"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-gray-800 mb-4 uppercase tracking-wide">
          Flexible Pricing Plans
        </h1>
        <p className='font-body text-center text-gray-600 max-w-2xl mx-auto mb-12 text-lg font-light'>
          Choose the plan that best fits your business needs and budget
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {plans.map((plan, index) => {
            return (
              <div
                key={index}
                className={`bg-white p-8 sm:p-10 rounded-2xl shadow-lg border-2 ${
                  plan.highlight ? 'border-amber-400 scale-105 shadow-2xl' : 'border-gray-100'
                } hover:border-amber-400 hover:shadow-2xl transition duration-300 flex flex-col items-center relative transform hover:-translate-y-2`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-6 py-1.5 rounded-full text-sm font-accent font-bold uppercase tracking-wider shadow-lg">
                    Most Popular
                  </div>
                )}
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-800 mb-4 mt-2 uppercase tracking-wide">
                  {plan.name}
                </h2>
                <ul className="font-body text-gray-600 text-sm sm:text-base space-y-3 sm:space-y-4 mb-6 font-light">
                  {plan.features.map((feature, idx) => {
                    return <li key={idx} className="flex items-center gap-2"><span className="text-green-500 text-lg">✔</span> {feature}</li>;
                  })}
                </ul>
                <div className="mt-auto text-center">
                  <p className="font-accent text-4xl sm:text-5xl font-bold text-amber-500 mt-4">
                    {plan.price}<span className="font-body text-lg text-gray-600 font-normal">{plan.period}</span>
                  </p>
                  <button className="font-accent mt-6 px-8 sm:px-10 py-3 rounded-lg font-bold bg-amber-400 text-gray-800 shadow-lg hover:bg-amber-300 transition duration-300 transform hover:scale-105 uppercase tracking-wider">
                    Get Started
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;