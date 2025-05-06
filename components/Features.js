function Features() {
    try {
        const features = [
            {
                icon: "fa-chart-line",
                title: "Advanced Analytics",
                description: "Get deep insights into your business performance with our powerful analytics tools."
            },
            {
                icon: "fa-bolt",
                title: "Lightning Fast",
                description: "Experience blazing fast performance with our optimized infrastructure."
            },
            {
                icon: "fa-shield-alt",
                title: "Enterprise Security",
                description: "Keep your data safe with our enterprise-grade security measures."
            },
            {
                icon: "fa-code",
                title: "API Integration",
                description: "Seamlessly integrate with your existing tools and workflows."
            },
            {
                icon: "fa-users",
                title: "Team Collaboration",
                description: "Work together efficiently with built-in collaboration features."
            },
            {
                icon: "fa-clock",
                title: "Real-time Updates",
                description: "Stay up-to-date with real-time notifications and updates."
            }
        ];

        return (
            <section id="features" data-name="features" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 data-name="features-title" className="text-3xl font-bold mb-4">Powerful Features</h2>
                        <p data-name="features-subtitle" className="text-gray-600 max-w-2xl mx-auto">
                            Everything you need to manage and grow your business in one powerful platform.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div 
                                key={index}
                                data-name={`feature-card-${index}`}
                                className="feature-card p-6 bg-white rounded-lg border border-gray-100 hover:border-indigo-200"
                            >
                                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                                    <i className={`fas ${feature.icon} text-indigo-600 text-xl`}></i>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Features component error:', error);
        reportError(error);
        return null;
    }
}
