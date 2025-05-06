function Testimonials() {
    try {
        const testimonials = [
            {
                quote: "CloudFlow has transformed how we manage our business. The productivity gains have been incredible.",
                author: "Sarah Johnson",
                role: "CEO, TechStart Inc.",
                avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            },
            {
                quote: "The analytics features alone have helped us increase our revenue by 40% in just three months.",
                author: "Michael Chen",
                role: "CTO, Growth Labs",
                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            },
            {
                quote: "The best customer support I've ever experienced. They're always there when you need them.",
                author: "Emily Rodriguez",
                role: "Product Manager, Innovate Co",
                avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            }
        ];

        return (
            <section id="testimonials" data-name="testimonials" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 data-name="testimonials-title" className="text-3xl font-bold mb-4">Trusted by Industry Leaders</h2>
                        <p data-name="testimonials-subtitle" className="text-gray-600 max-w-2xl mx-auto">
                            See what our customers have to say about their experience with CloudFlow.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div 
                                key={index}
                                data-name={`testimonial-card-${index}`}
                                className="p-6 bg-gray-50 rounded-lg"
                            >
                                <div className="flex items-center mb-4">
                                    <img 
                                        src={testimonial.avatar} 
                                        alt={testimonial.author}
                                        className="w-12 h-12 rounded-full mr-4"
                                    />
                                    <div>
                                        <h4 className="font-semibold">{testimonial.author}</h4>
                                        <p className="text-gray-600 text-sm">{testimonial.role}</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Testimonials component error:', error);
        reportError(error);
        return null;
    }
}
