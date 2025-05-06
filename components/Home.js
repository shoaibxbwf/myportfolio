function Home() {
    try {
        return (
            <section data-name="home" className="min-h-screen flex items-center justify-center px-4 py-16">
                <div className="container animate-fade-in">
                    <div className="floating mb-6">
                        <i className="fas fa-code text-6xl text-[#64ffda]"></i>
                    </div>
                    <p className="text-[#64ffda] mb-3">Hi, my name is</p>
                    <h1 className="text-3xl md:text-5xl font-bold text-[#ccd6f6] mb-3 name-animation">
                        MD AMIR SHOAIB
                    </h1>
                    <h2 className="text-2xl md:text-4xl font-bold text-[#8892b0] mb-4">
                        WEB DEVELOPER
                    </h2>
                    <p className="text-lg text-[#8892b0] max-w-xl mb-6">
                        I'm a BCA student with a passion for web development and Python programming. 
                        I specialize in creating clean, efficient code and have successfully completed 
                        numerous projects using Python, HTML, and CSS. My journey in tech is driven by 
                        a constant desire to learn and create impactful solutions.
                    </p>
                    <div className="flex flex-wrap gap-4 mb-6">
                        <a href="/resume.pdf" className="button px-6 py-3 text-base rounded">
                            Download Resume
                        </a>
                        <a href="https://github.com/shoaibxbwf" target="_blank" rel="noopener noreferrer" 
                           className="button px-6 py-3 text-base rounded flex items-center gap-2">
                            <i className="fab fa-github"></i>
                            GitHub Profile
                        </a>
                    </div>
                    <div className="flex gap-6">
                        <a href="https://www.facebook.com/amir.shoaib.984" target="_blank" rel="noopener noreferrer" 
                           className="text-[#64ffda] hover:text-[#ccd6f6] text-2xl">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="https://www.instagram.com/unknown.shoaibx/?__pwa=1" target="_blank" rel="noopener noreferrer" 
                           className="text-[#64ffda] hover:text-[#ccd6f6] text-2xl">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://github.com/shoaibxbwf" target="_blank" rel="noopener noreferrer" 
                           className="text-[#64ffda] hover:text-[#ccd6f6] text-2xl">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/md-amir-shoaib-46a5a6305" target="_blank" rel="noopener noreferrer" 
                           className="text-[#64ffda] hover:text-[#ccd6f6] text-2xl">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Home component error:', error);
        reportError(error);
        return null;
    }
}
