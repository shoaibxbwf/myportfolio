function Pricing() {
    try {
        const plans = [
            {
                name: "Starter",
                price: "29",
                description: "Perfect for small teams and startups",
                features: [
                    "Up to 5 team members",
                    "Basic analytics",
                    "24/7 support",
                    "API access",
                    "1 GB storage"
                ]
            },
            {
                name: "Professional",
                price: "99",
                description: "Ideal for growing businesses",
                popular: true,
                features: [
                    "Up to 20 team members",
                    "Advanced analytics",
                    "Priority support",
                    "API access",
                    "10 GB storage",
                    "Custom integrations"
                ]
            },
            {
                name: "Enterprise",
                price: "299",
                description: "For large organizations",
                features: [
                    "Unlimited team members",
                    "Custom analytics",
                    "Dedicated support",
                    "API access",
                    "Unlimited storage",
                    "Custom integrations",
                    "SLA guarantee"
                ]
            }
        ];

        return (
            <section id="pricing" data-name="pricing" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 data-name="pricing-title" className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
                        <p data-name="pricing-subtitle" className="text-gray-600 max-w-2xl mx-auto">
                            Choose the perfect plan for your business needs. No hidden fees.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {plans.map((plan, index) => (
                            <div 
                                key={index}
                                data-name={`pricing-card-${index}`}
                                className={`pricing-card p-8 bg-white rounded-lg border ${plan.popular ? 'border-indigo-600' : 'border-gray-200'}`}
                            >
                                {plan.popular && (
                                    <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                        Most Popular
                                    </span>
                                )}
                                <h3 className="text-2xl font-bold mt-4">{plan.name}</h3>
                                <div className="mt-4">
                                    <span className="text-4xl font-bold">${plan.price}</span>
                                    <span className="text-gray-600">/month</span>
                                </div>
                                <p className="mt-2 text-gray-600">{plan.description}</p>
                                <ul className="mt-6 space-y-4">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center">
                                            <i className="fas fa-check text-indigo-600 mr-2"></i>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button 
                                    className={`w-full mt-8 px-4 py-2 rounded-lg ${
                                        plan.popular 
                                            ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                                            : 'border border-indigo-600 text-indigo-600 hover:bg-indigo-50'
                                    }`}
                                >
                                    Get Started
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Pricing component error:', error);
        reportError(error);
        return null;
    }
}
