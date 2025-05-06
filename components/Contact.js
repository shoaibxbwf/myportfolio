function Contact() {
    try {
        return (
            <section data-name="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
                <div className="max-w-4xl w-full animate-fade-in text-center">
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Let's build something great — together. Feel free to reach out for collaborations or just a friendly hello!
                    </p>
                    <div className="flex flex-col items-center mb-8">
                        <div className="text-center mb-8">
                            <p className="text-[#64ffda] text-2xl mb-4">
                                <i className="fas fa-envelope mr-2"></i>
                                amirshoaib112@gmail.com
                            </p>
                        </div>
                        <div className="flex justify-center gap-6">
                            <a href="https://github.com/shoaibxbwf" className="text-[#64ffda] hover:text-[#ccd6f6]">
                                <i className="fab fa-github text-4xl"></i>
                            </a>
                            <a href="https://www.facebook.com/amir.shoaib.984" className="text-[#64ffda] hover:text-[#ccd6f6]">
                                <i className="fab fa-facebook text-4xl"></i>
                            </a>
                            <a href="https://www.instagram.com/unknown.shoaibx/?__pwa=1" className="text-[#64ffda] hover:text-[#ccd6f6]">
                                <i className="fab fa-instagram text-4xl"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/md-amir-shoaib-46a5a6305" className="text-[#64ffda] hover:text-[#ccd6f6]">
                                <i className="fab fa-linkedin text-4xl"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Contact component error:', error);
        reportError(error);
        return null;
    }
}
