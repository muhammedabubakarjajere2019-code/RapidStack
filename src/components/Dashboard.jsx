import React, { useState, useRef, useEffect } from 'react';
import { generateText } from '../services/gemini';
import { Send, User, Bot, Sparkles, Loader2, Zap, BookOpen, Lightbulb } from 'lucide-react';
import Navbar from './Navbar';
import { motion, AnimatePresence } from 'framer-motion';

function Dashboard() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, loading]);

    const handleGenerate = async (promptText) => {
        if (!promptText.trim() || loading) return;

        const userMessage = promptText.trim();
        setInput('');
        setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
        setLoading(true);

        try {
            const result = await generateText(userMessage);
            setMessages(prev => [...prev, { role: 'ai', content: result }]);
        } catch (err) {
            console.error(err);
            setMessages(prev => [...prev, { role: 'ai', content: "Sorry, I encountered an error. Please try again." }]);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleGenerate(input);
    };

    const suggestions = [
        { icon: <Zap size={20} />, text: "Write a creative story about time travel" },
        { icon: <BookOpen size={20} />, text: "Summarize the key concepts of Quantum Physics" },
        { icon: <Lightbulb size={20} />, text: "Give me 5 unique business ideas for 2025" },
        { icon: <Sparkles size={20} />, text: "Draft a professional email to a client" },
    ];

    return (
        <div className="min-h-screen bg-[#f9fafb] flex flex-col font-sans">
            <Navbar />

            {/* Main Chat Area */}
            <div className="flex-1 max-w-4xl w-full mx-auto pt-24 pb-32 px-4 sm:px-6 lg:px-8 flex flex-col">
                {messages.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex-1 flex flex-col items-center justify-center text-center space-y-8"
                    >
                        <div className="w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center mb-4">
                            <Sparkles className="w-10 h-10 text-indigo-600" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900">Good afternoon!</h2>
                        <p className="text-gray-500 text-lg max-w-md">
                            I'm GoEasyFlow, your AI creative partner. What shall we create today?
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl mt-8">
                            {suggestions.map((suggestion, index) => (
                                <motion.button
                                    key={index}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => handleGenerate(suggestion.text)}
                                    className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:border-indigo-200 transition-all text-left flex items-start gap-3 group"
                                >
                                    <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                        {suggestion.icon}
                                    </div>
                                    <span className="text-gray-700 font-medium text-sm mt-1">{suggestion.text}</span>
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                ) : (
                    <div className="flex-1 space-y-6">
                        <AnimatePresence>
                            {messages.map((msg, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className={`flex items-start gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                                >
                                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center shadow-sm ${msg.role === 'user'
                                            ? 'bg-indigo-600 text-white'
                                            : 'bg-white text-indigo-600 border border-indigo-100'
                                        }`}>
                                        {msg.role === 'user' ? <User size={20} /> : <Bot size={20} />}
                                    </div>

                                    <div className={`relative px-6 py-4 rounded-2xl shadow-sm max-w-[85%] ${msg.role === 'user'
                                            ? 'bg-indigo-600 text-white rounded-tr-sm'
                                            : 'bg-white text-gray-800 border border-gray-100 rounded-tl-sm'
                                        }`}>
                                        <div className={`prose ${msg.role === 'user' ? 'prose-invert' : 'prose-indigo'} max-w-none`}>
                                            <p className="whitespace-pre-wrap leading-relaxed text-[15px]">{msg.content}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>

                        {loading && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="flex items-start gap-4"
                            >
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white text-indigo-600 border border-indigo-100 flex items-center justify-center shadow-sm">
                                    <Bot size={20} />
                                </div>
                                <div className="bg-white px-6 py-4 rounded-2xl rounded-tl-sm shadow-sm border border-gray-100 flex items-center gap-3">
                                    <Loader2 className="w-5 h-5 animate-spin text-indigo-600" />
                                    <span className="text-gray-500 font-medium text-sm">Thinking...</span>
                                </div>
                            </motion.div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>
                )}
            </div>

            {/* Input Area */}
            <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-gray-200 p-6 z-10">
                <div className="max-w-4xl mx-auto">
                    <form onSubmit={handleSubmit} className="relative flex items-center gap-3">
                        <div className="relative flex-1 group">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Message GoEasyFlow..."
                                className="w-full pl-6 pr-14 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:outline-none focus:border-indigo-500 focus:bg-white shadow-sm text-gray-900 placeholder-gray-400 transition-all text-lg"
                                disabled={loading}
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={!input.trim() || loading}
                            className="p-4 bg-indigo-600 text-white rounded-2xl hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-indigo-200 active:scale-95"
                        >
                            <Send size={24} />
                        </button>
                    </form>
                    <p className="text-center text-xs text-gray-400 mt-4 font-medium">
                        Powered by Gemini 2.0 Flash • GoEasyFlow can make mistakes.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
