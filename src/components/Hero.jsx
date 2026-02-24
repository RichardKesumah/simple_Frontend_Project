    import { ArrowRight, ChevronDown, Play } from "lucide-react";
import { useEffect, useState } from "react"
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { codeExamples, floatingCards } from "../data/CodeExamples";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Hero(){
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [activeTab, setActiveTab] = useState("App.jsx");

    useEffect(() => {
        function handleMouseMove(e) {
            setMousePosition({x: e.clientX, y: e.clientY});
        }

        window.addEventListener("mousemove", handleMouseMove);

        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const currentFloatingCard = floatingCards[activeTab];

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#1e1e1e]">
            <div 
                className="absolute inset-0 opacity-40" 
                style={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(251, 146, 60, 0.12), rgba(249, 115, 22, 0.06) 30%, transparent 50%)`
                }}
            />


            <div className="max-w-7xl mx-auto text-center relative w-full">
                <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 text center lg:text-left gap-6 sm:gap-8 lg:gap-12 items-stretch lg:items-center relative">
                    {/* */}
                    <div>
                    <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-[#2a2a2a] border border-[#282828] rounded-full mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700">
                        <span className="inline-flex items-center justify-center w-5 h-5 text-base drop-shadow-[0_0_8px_rgba(249,115,22,0.5)]" role="img" aria-label="Fire">🔥</span>
                        <span className="text-xs sm:text-sm text-[#a3a3a3]">
                            Introducing Cooking AI
                        </span>
                    </div>
                        <h1 className="text-5xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700 delay-100 leading-tight">
                            <span className="bg-gradient-to-r from-[#e5e5e5] via-[#d4d4d4] to-[#a3a3a3] bg-clip-text text-transparent block mb-1 sm:mb-2">
                                Code Faster
                            </span>
                            <span className="bg-gradient-to-b from-red-500 via-orange-400 to-yellow-300 bg-clip-text text-transparent block mb-1 sm:mb-2">
                                Cook Better
                            </span>
                            <span className="bg-gradient-to-r from-[#e5e5e5] via-[#d4d4d4] to-[#a3a3a3] bg-clip-text text-transparent block mb-1 sm:mb-2">
                                With Cooking AI
                            </span>
                        </h1>

                        <p className="text-md sm:text-base lg:text-lg text-[#a3a3a3] max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8 animate-in slide-in-from-bottom duration-700 delay-200 leading-relaxed">
                        Speed up your development process with AI-powered code completion, automated testing, and intelligent debugging, helping you deliver production-ready software up to five times faster.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-12 animate-in slide-in-from-bottom duration-700 delay-300">
                            <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-102 flex items-center justify-center space-x-2">
                                <span>Start Cooking</span>
                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />  
                            </button>

                            <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#2a2a2a] backdrop-blur-sm border border-[#282828] rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-[#3a3a3a] flex items-center justify-center space-x-2">
                                <div className="p-2 bg-[#3a3a3a] rounded-full group-hover:bg-[#404040] duration-300 transition-colors">
                                    <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-[#e5e5e5]"/>
                                </div>
                                <span className="text-[#e5e5e5]">Watch Demo</span>
                            </button>
                        </div>
                    </div>

                
                    <div className="relative order-2 w-full lg:justify-self-start">
                        <div className="relative bg-[#171717] backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-[#252525]">
                            <div className="bg-[#0d0d0d] rounded-lg overflow-hidden h-[280px] sm:h-[350px] lg:h-[450px]">
                                {/* IDE HEADER */}
                                <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-[#1a1a1a] border-b border-[#252525]">
                                    <div className="flex items-center space-x-2 sm:space-x-3">
                                        <div className="flex items-center space-x-1 sm:space-x-2">
                                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-orange-400" />
                                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-orange-400" />
                                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-orange-400" />
                                        </div>
                                        <span className="text-xs sm:text-sm text-gray-300">
                                            CodeFlow AI
                                        </span>
                                    </div>
                                    <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                                </div>
                                <div className="p-3 sm:p-4 relative h-full flex flex-col min-h-0">
                                    {/* file tabs */}
                                    <div className="flex space-x-1 sm:space-x-2 mb-3 sm:mb-4 overflow-x-auto flex-shrink-0">
                                        <button onClick={() => setActiveTab("App.jsx")} className={`px-3 py-2 backdrop-blur-sm tex-xs sm:text-sm rounded-t-lg border ${activeTab === "App.jsx" ? "bg-orange-500/30 text-white border-orange-400/20" : "bg-[#1a1a1a] text-gray-300 border-[#252525] hover:bg-[#252525]"} text-gray-300 transition-all duration-200 whitespace-nowrap`}>
                                            App.jsx
                                        </button>
                                        <button onClick={() => setActiveTab("Hero.jsx")} className={`px-3 py-2 backdrop-blur-sm tex-xs sm:text-sm rounded-t-lg border ${activeTab === "Hero.jsx" ? "bg-orange-500/30 text-white border-orange-400/20" : "bg-[#1a1a1a] text-gray-300 border-[#252525] hover:bg-[#252525]"} text-gray-300 transition-all duration-200 whitespace-nowrap`}>
                                            Hero.jsx
                                        </button>
                                        <button onClick={() => setActiveTab("Navbar.jsx")} className={`px-3 py-2 backdrop-blur-sm tex-xs sm:text-sm rounded-t-lg border ${activeTab === "Navbar.jsx" ? "bg-orange-500/30 text-white border-orange-400/20" : "bg-[#1a1a1a] text-gray-300 border-[#252525] hover:bg-[#252525]"} text-gray-300 transition-all duration-200 whitespace-nowrap`}>
                                            Navbar.jsx
                                        </button>
                                    </div>

                                    {/* Code Content */}
                                    <div className="relative overflow-y-auto flex-1 min-h-0 rounded-b-lg">
                                        <SyntaxHighlighter 
                                            language="javascript" 
                                            style={nightOwl} 
                                            customStyle={{ 
                                                margin: 0, 
                                                padding: "8px 12px",
                                                borderRadius: "8px", 
                                                fontSize: "11px", 
                                                lineHeight: "1.4",
                                                minHeight: "100%",
                                                width: "100%",
                                                textAlign: "left",
                                                background: "#0d0d0d",
                                                border: "none",
                                            }}
                                        >
                                            {codeExamples[activeTab]}
                                        </SyntaxHighlighter>
                                    </div>
                                </div>
                            </div> 

                            {/* Floating Cards */}  
                            <div 
                                className={`hidden lg:block absolute bottom-4 right-4 transform translate-x-8 translate-y-8 w-72 ${currentFloatingCard.bgColor} backdrop-blur-xl rounded-lg p-4 border border-[#282828] shadow-2xl`}
                            >
                                <div className="flex items-center space-x-2 mb-2">
                                    <div className={`w-6 h-6 ${currentFloatingCard.iconColor} flex items-center justify-center text-sm font-bold`}>
                                        {currentFloatingCard.icon}
                                    </div>
                                    <span className={`text-sm font-medium ${currentFloatingCard.textColor}`}>
                                        {currentFloatingCard.title}
                                    </span>
                                </div>

                                <div className={`text-sm text-left ${currentFloatingCard.contentColor}`}>
                                    {currentFloatingCard.content}
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}