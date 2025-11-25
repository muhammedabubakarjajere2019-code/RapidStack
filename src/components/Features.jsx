import React from 'react';
import { Sparkles, Zap, Shield, BookOpen, Clock, ThumbsUp } from 'lucide-react';

const features = [
    {
        icon: <Sparkles className="h-6 w-6 text-indigo-600" />,
        title: 'AI-Powered Ideation',
        description: 'Stuck on a topic? Generate unique essay ideas and thesis statements instantly.'
    },
    {
        icon: <Zap className="h-6 w-6 text-indigo-600" />,
        title: 'Instant Outlining',
        description: 'Create comprehensive essay outlines with logical flow and structure in seconds.'
    },
    {
        icon: <BookOpen className="h-6 w-6 text-indigo-600" />,
        title: 'Smart Research',
        description: 'Find relevant academic sources and citations to support your arguments.'
    },
    {
        icon: <Shield className="h-6 w-6 text-indigo-600" />,
        title: 'Plagiarism Checker',
        description: 'Ensure your work is original with our built-in advanced plagiarism detection.'
    },
    {
        icon: <Clock className="h-6 w-6 text-indigo-600" />,
        title: 'Time Saver',
        description: 'Cut your writing time in half while maintaining high quality and academic standards.'
    },
    {
        icon: <ThumbsUp className="h-6 w-6 text-indigo-600" />,
        title: 'Grammar & Style',
        description: 'Get real-time suggestions for grammar, punctuation, and stylistic improvements.'
    }
];

const Features = () => {
    return (
        <section id="features" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase mb-2">Features</h2>
                    <p className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                        Everything you need to write A+ essays
                    </p>
                    <p className="text-lg text-gray-600">
                        Powerful tools designed to help you through every stage of the writing process, from brainstorming to final polish.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="p-8 bg-gray-50 rounded-2xl hover:bg-indigo-50 transition-colors duration-300 border border-gray-100 hover:border-indigo-100 group">
                            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
