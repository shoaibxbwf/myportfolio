function CTA() {
    try {
        return (
            <section data-name="cta" className="py-20 bg-indigo-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 data-name="cta-title" className="text-3xl font-bold text-white mb-4">
                        Ready to Transform Your Business?
                    </h2>
                    <p data-name="cta-subtitle" className="text-indigo-100 mb-8 max-w-2xl mx-auto">
                        Join thousands of satisfied customers who have already taken their business to the next level with CloudFlow.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button data-name="cta-primary" className="px-8 py-3 bg-white text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors">
                            Start Free Trial
                        </button>
                        <button data-name="cta-secondary" className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-indigo-700 transition-colors">
                            Schedule Demo
                        </button>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('CTA component error:', error);
        reportError(error);
        return null;
    }
}
