import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar(){
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-[#2a2a2a] backdrop-blur-sm border-b border-[#282828]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
                    <div className="flex items-center space-x-1 group cursor-pointer">
                        <div>
                            <img 
                                src="/cook.png" 
                                alt="CodeFLow" 
                                className="w-6 h-6 sm:w-8 sm:h-8"
                            />
                        </div>
                        <span className="text-lg sm:text-xl md:text-2xl font-medium">
                        <span className="bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 bg-clip-text text-transparent">Cooking</span>
                            <span className="text-[#e5e5e5]">AI</span>
                        </span>
                    </div>
                    {/* Nav Links */}
                    <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                        <a 
                            href="#features" 
                            className="text-[#a3a3a3] hover:text-[#e5e5e5] text-sm lg:text-base transition-colors"
                        >
                            Features
                        </a>
                        <a 
                            href="#pricing" 
                            className="text-[#a3a3a3] hover:text-[#e5e5e5] text-sm lg:text-base transition-colors"
                        >
                            Pricing
                        </a>
                        <a 
                            href="#testimonials" 
                            className="text-[#a3a3a3] hover:text-[#e5e5e5] text-sm lg:text-base transition-colors"
                        >
                            Testimonials 
                        </a>
                    </div>
                    <button 
                        type="button"
                        className="md:hidden p-2 text-[#a3a3a3] hover:text-[#e5e5e5] transition-colors" 
                        onClick={() => setMobileMenuIsOpen((prev) => !prev)}
                    >
                        {mobileMenuIsOpen ? (
                            <X className="w-5 h-5 sm:w-6 sm:h-6" />
                        ) : (
                            <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                        )}
                    </button>
                </div>
            </div>
            {mobileMenuIsOpen && (
                <div className="md:hidden bg-[#2f2f2f] backdrop-blur-lg border-t border-[#282828] animate-in slide-in-from-top duration-300">
                    <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
                        <a 
                            href="#features" 
                            onClick={() => setMobileMenuIsOpen(false)}
                            className="block text-[#a3a3a3] hover:text-[#e5e5e5] text-sm lg:text-base transition-colors"
                        >
                            Features
                        </a>
                        <a 
                            href="#pricing" 
                            onClick={() => setMobileMenuIsOpen(false)}
                            className="block text-[#a3a3a3] hover:text-[#e5e5e5] text-sm lg:text-base transition-colors"
                        >
                            Pricing
                        </a>
                        <a 
                            href="#testimonials" 
                            onClick={() => setMobileMenuIsOpen(false)}
                            className="block text-[#a3a3a3] hover:text-[#e5e5e5] text-sm lg:text-base transition-colors"
                        >
                            Testimonials 
                        </a>
                    </div>
                </div>
            )}
        </nav>
    )
}