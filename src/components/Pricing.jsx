import React from 'react';
import { Check } from 'lucide-react';

const plans = [
    {
        name: 'Starter',
        price: '0',
        description: 'Perfect for trying out EssayFlow',
        features: [
            '5 AI Essay Outlines per month',
            'Basic Grammar Check',
            '1,000 Word Generation Limit',
            'Standard Support'
        ],
        cta: 'Start for Free',
        popular: false
    },
    {
        name: 'Pro',
        price: '19',
        description: 'For serious students who want top grades',
        features: [
            'Unlimited Essay Outlines',
            'Advanced Style & Tone Editor',
            'Unlimited Word Generation',
            'Plagiarism Checker (50/mo)',
            'Priority Support',
            'Citation Generator'
        ],
        cta: 'Get Pro',
        popular: true
    },
    {
        name: 'Team',
        price: '49',
        description: 'Great for study groups and classes',
        features: [
            'Everything in Pro',
            '5 User Seats',
            'Collaborative Editing',
            'Team Folders',
            'Admin Dashboard',
            'API Access'
        ],
        cta: 'Contact Sales',
        popular: false
    }
];

const Pricing = () => {
    return (
        <section id="pricing" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase mb-2">Pricing</h2>
                    <p className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                        Simple, transparent pricing
                    </p>
                    <p className="text-lg text-gray-600">
                        Choose the plan that fits your needs. No hidden fees.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div key={index} className={`relative p-8 bg-white rounded-2xl border ${plan.popular ? 'border-indigo-600 shadow-xl scale-105 z-10' : 'border-gray-200 hover:border-indigo-200 hover:shadow-lg'} transition-all duration-300 flex flex-col`}>
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                                    Most Popular
                                </div>
                            )}
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                                <p className="text-gray-500 text-sm mb-6">{plan.description}</p>
                                <div className="flex items-baseline">
                                    <span className="text-4xl font-extrabold text-gray-900">${plan.price}</span>
                                    <span className="text-gray-500 ml-2">/month</span>
                                </div>
                            </div>

                            <ul className="space-y-4 mb-8 flex-1">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <Check className="h-5 w-5 text-green-500 flex-shrink-0 mr-3" />
                                        <span className="text-gray-600 text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-3 px-6 rounded-xl font-bold transition-colors ${plan.popular ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100'}`}>
                                {plan.cta}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
