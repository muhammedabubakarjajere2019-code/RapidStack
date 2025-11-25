import React from 'react';
import { Play } from 'lucide-react';

const Demo = () => {
    return (
        <section id="demo" className="py-20 bg-gray-900 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
                            See how it works in action
                        </h2>
                        <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                            Watch how easy it is to generate an essay outline and draft content using our intuitive interface. Just enter your topic, choose your tone, and let AI do the heavy lifting.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0 font-bold">1</div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">Enter your topic</h4>
                                    <p className="text-gray-400">Simply type in your essay prompt or subject matter.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0 font-bold">2</div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">Customize settings</h4>
                                    <p className="text-gray-400">Select word count, academic level, and tone of voice.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0 font-bold">3</div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">Generate & Edit</h4>
                                    <p className="text-gray-400">Get a complete draft in seconds and refine it with our editor.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 w-full relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800 bg-gray-800 aspect-video group cursor-pointer">
                            {/* Placeholder for video/demo interface */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/50 to-gray-900/50"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <Play className="h-8 w-8 text-white fill-current" />
                                </div>
                            </div>

                            {/* Mock UI Elements */}
                            <div className="absolute top-4 left-4 right-4 h-8 bg-gray-700/50 rounded-lg flex items-center px-3 gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <div className="absolute top-16 left-4 right-4 bottom-4 bg-gray-700/30 rounded-lg p-6">
                                <div className="h-4 bg-gray-600/50 rounded w-3/4 mb-4"></div>
                                <div className="h-4 bg-gray-600/50 rounded w-full mb-2"></div>
                                <div className="h-4 bg-gray-600/50 rounded w-full mb-2"></div>
                                <div className="h-4 bg-gray-600/50 rounded w-5/6 mb-2"></div>
                                <div className="h-4 bg-gray-600/50 rounded w-full mb-2"></div>
                            </div>
                        </div>

                        {/* Decorative glow */}
                        <div className="absolute -inset-4 bg-indigo-600/20 blur-3xl -z-10 rounded-full"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Demo;
