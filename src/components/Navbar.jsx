import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function Navbar(){
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
    const [userMenuIsOpen, setUserMenuIsOpen] = useState(false);
    const { user, isAuthenticated, logout } = useAuth();

    return (
        <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-[#2a2a2a] backdrop-blur-sm border-b border-[#282828]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center h-14 sm:h-16 md:h-20">
                    <div className="flex-1 flex items-center">
                        <div className="flex items-center space-x-1 group cursor-pointer">
                            <div>
                                <img 
                                    src="/cook.png" 
                                    alt="CodeFLow" 
                                    className="w-6 h-6 sm:w-8 sm:h-8"
                                />
                            </div>
                            <span className="text-lg sm:text-xl md:text-2xl font-medium">
                            <span className="text-[#e5e5e5]">Cooking</span>
                                <span className="bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 bg-clip-text text-transparent">AI</span>
                            </span>
                        </div>
                    </div>

                    {/* Center CTA / Username */}
                    <div className="hidden md:flex flex-none justify-center relative">
                        {isAuthenticated && user ? (
                            <>
                                <button
                                    className="text-sm sm:text-base text-[#a3a3a3] hover:text-[#e5e5e5] text-sm lg:text-base transition-colors"
                                    onClick={() => setUserMenuIsOpen((prev) => !prev)}
                                >
                                    {user.username}
                                </button>
                                {userMenuIsOpen && (
                                    <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-[#1f1f1f] border border-[#3f3f3f] rounded-lg shadow-lg shadow-black/40 py-1 min-w-[140px] text-sm z-50">
                                        <button
                                            className="text-center w-full px-3 py-1.5 text-[#e5e5e5] hover:bg-[#2c2c2c] transition-colors"
                                            onClick={() => {
                                                setUserMenuIsOpen(false);
                                                logout();
                                            }}
                                        >
                                            Log out
                                        </button>
                                    </div>
                                )}
                            </>
                        ) : (
                            <Link
                                to="/signup"
                                className="group w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-102 flex items-center justify-center space-x-2 hover:cursor-pointer"
                            >
                                Sign up
                            </Link>
                        )}
                    </div>

                    {/* Nav Links */}
                    <div className="flex-1 flex justify-end items-center">
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
            </div>
            {mobileMenuIsOpen && (
                <div className="md:hidden bg-[#2f2f2f] backdrop-blur-lg border-t border-[#282828] animate-in slide-in-from-top duration-300">
                    <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
                        {isAuthenticated && user ? (
                            <button
                                className="w-full px-4 py-2 rounded-lg font-semibold text-sm bg-[#1f1f1f] border border-[#3f3f3f] text-[#e5e5e5] flex items-center justify-between"
                                onClick={() => {
                                    setMobileMenuIsOpen(false);
                                    logout();
                                }}
                            >
                                <span>{user.username}</span>
                                <span className="text-xs text-[#a3a3a3] hover:text-[#e5e5e5] hover:cursor-pointer">Log out</span>
                            </button>
                        ) : (
                            <Link
                                to="/signup"
                                className="w-full px-4 py-2 rounded-lg font-semibold text-sm bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-102 flex items-center justify-center space-x-2 hover:cursor-pointer"
                                onClick={() => setMobileMenuIsOpen(false)}
                            >
                                Sign up
                            </Link>
                        )}
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