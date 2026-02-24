import { Check, Star } from "lucide-react";

const plans = [
    {
        name: "Starter",
        price: "29.99",
        description: "Perfect for individuals and small teams",
        features: [
            "Up to 5 team members",
            "10GB storage",
            "Basic analytics",
            "Email support",
            "API access",
            "Mobile app",
        ],
        mostPopular: false,
    },
    {
        name: "Professional",
        price: "79.99",
        description: "Best for growing businesses",
        features: [
            "Up to 25 team members",
            "100GB storage",
            "Advanced analytics",
            "Priority support",
            "API access",
            "Mobile app",
            "Custom integrations",
            "Advanced security",
        ],
        mostPopular: true,
    },
    {
        name: "Enterprise",
        price: "199.99",
        description: "For large organizations",
        features: [
            "Unlimited team members",
            "Unlimited storage",
            "Enterprise analytics",
            "24/7 phone support",
            "API access",
            "Mobile app",
            "Custom integrations",
            "Advanced security",
            "Dedicated account manager",
            "Custom SLA",
        ],
        mostPopular: false,
    },
];

export default function Pricing(){
    return (
        <section id="pricing" className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative bg-[#1e1e1e]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                    <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                        <span className="bg-gradient-to-r from-[#e5e5e5] via-[#d4d4d4] to-[#a3a3a3] bg-clip-text text-transparent">Simple, Transparent</span>
                        <br />
                        <span className="bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 bg-clip-text text-transparent">Pricing Plans</span>
                    </h2>
                    <p className="text-[#a3a3a3] text-base text-xl sm:text-lg max-w-2xl mx-auto">
                        Choose the perfect plan for your needs. All plans include a 14-day free trial.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-6">
                    {plans.map((plan, key) => (
                        <div 
                            key={key} 
                            className={`relative bg-[#171717] backdrop-blur-sm border rounded-xl sm:rounded-2xl p-6 sm:p-8 transition-all duration-300 overflow-visible group flex flex-col h-full ${
                                plan.mostPopular 
                                ? "border-orange-500 shadow-2xl shadow-orange-500/20 lg:scale-105" 
                                : "border-[#252525] hover:border-[#3a3a3a]"
                            }`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 pointer-events-none rounded-lg" />
                            
                            {plan.mostPopular && (
                                <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2 z-10">
                                    <div className="flex items-center space-x-1 px-3 sm:px-4 py-1 sm:py-1.5 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                                        <Star className="w-3 h-3 sm:w-3 sm:h-3 fill-white"/>
                                        <span>Most Popular</span>
                                    </div>
                                </div>
                            )}

                            <div className="text-center mb-6 sm:mb-8">
                                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-[#e5e5e5]">{plan.name}</h3>
                                <p className="text-[#a3a3a3] text-xs sm:text-sm mb-3 sm:mb-4">{plan.description}</p>
                                <div className="flex items-baseline justify-center">
                                    <span className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
                                        {plan.price}
                                    </span>
                                    <span className="text-[#a3a3a3] ml-1 sm:ml-2 text-sm sm:text-base">
                                        /month
                                    </span>
                                </div>
                            </div>

                            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-row">
                                {plan.features.map((feature, featureKey) => (
                                    <li 
                                        key={featureKey} 
                                        className="flex items-start gap-x-2 sm:gap-x-3"
                                    >
                                        <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-orange-500/20 flex items-center justify-center mt-0.5">
                                            <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-orange-400" />
                                        </div>
                                        <span className="text-[#a3a3a3] text-sm sm:text-base">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`w-full py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold transition-all duration-300 mt-auto hover:scale-102 cursor-pointer text-sm sm:text-base ${
                                plan.mostPopular
                                    ? "bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300"
                                    : "bg-[#2a2a2a] border border-[#252525] hover:bg-[#3a3a3a] text-[#e5e5e5]"
                                }`}
                            >
                                Get Started
                            </button>
                        </div>
                    ))}
                </div>
                
                <div className="mt-8 sm:mt-12 text-center">
                    <p className="text-[#a3a3a3] text-base text-xl">
                        Need a custom plan? <a href="#" className="text-orange-400 hover:text-orange-300">Contact our sales team</a>
                    </p>
                </div>
            </div>
        </section>
    )
}