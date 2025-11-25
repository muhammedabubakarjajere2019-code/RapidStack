import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();

    return (
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-indigo-50/50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 mb-6">
                            <span className="flex h-2 w-2 rounded-full bg-indigo-600 mr-2"></span>
                            Now with GPT-4 Support
                        </span>
                        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-8 leading-tight">
                            Write Better Essays, <br />
                            <span className="text-indigo-600">Faster with AI</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                            The ultimate AI-powered writing assistant for students. Generate ideas, outline structures, and refine your prose in seconds.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                            <button
                                onClick={() => navigate('/start-writing')}
                                className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-200 flex items-center justify-center gap-2"
                            >
                                Start Writing for Free
                                <ArrowRight className="h-5 w-5" />
                            </button>
                            <button className="w-full sm:w-auto px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                                Watch Demo
                            </button>
                        </div>
                        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 font-medium">
                            <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> No credit card required</span>
                            <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> 14-day free trial</span>
                            <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Cancel anytime</span>
                        </div>
                    </motion.div>
                </div>

                {/* Abstract Background Elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[1000px] h-[1000px] bg-indigo-100/30 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
            </div>
        </section>
    );
};

export default Hero;
