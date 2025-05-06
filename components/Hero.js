function Hero() {
    try {
        return (
            <section data-name="hero" className="pt-24 pb-16 hero-gradient">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 data-name="hero-title" className="text-4xl md:text-6xl font-bold mb-6">
                            Transform Your Business with
                            <span className="gradient-text"> CloudFlow</span>
                        </h1>
                        <p data-name="hero-subtitle" className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            Streamline your workflow, boost productivity, and scale your operations with our innovative SaaS solution.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <button data-name="hero-cta-primary" className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                                Start Free Trial
                            </button>
                            <button data-name="hero-cta-secondary" className="px-8 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors">
                                Watch Demo
                            </button>
                        </div>
                        <div data-name="hero-stats" className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
                            <div className="p-6 bg-white rounded-lg shadow-sm">
                                <div className="text-3xl font-bold gradient-text">99.9%</div>
                                <div className="text-gray-600">Uptime</div>
                            </div>
                            <div className="p-6 bg-white rounded-lg shadow-sm">
                                <div className="text-3xl font-bold gradient-text">10k+</div>
                                <div className="text-gray-600">Users</div>
                            </div>
                            <div className="p-6 bg-white rounded-lg shadow-sm">
                                <div className="text-3xl font-bold gradient-text">24/7</div>
                                <div className="text-gray-600">Support</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Hero component error:', error);
        reportError(error);
        return null;
    }
}
