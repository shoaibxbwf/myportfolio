function Projects() {
    try {
        const projects = [
            {
                title: "Download Page",
                description: "A centralized hub showcasing all my developed apps and web tools, providing easy access to my portfolio",
                tech: ["#HTML", "#CSS", "#Python"],
                links: {
                    github: "https://github.com/shoaibxbwf/DownloadPage.git",
                    live: "https://shoaibxbwf.github.io/DownloadPage/"
                }
            },
            {
                title: "Weather App",
                description: "Real-time weather application with dynamic updates and responsive design",
                tech: ["#HTML", "#CSS", "#JavaScript"],
                links: {
                    github: "https://github.com/shoaibxbwf/WeatherApp.git",
                    live: "https://shoaibxbwf.github.io/WeatherApp/"
                }
            },
            {
                title: "Hash2Magnet",
                description: "Utility tool for converting torrent hashes to magnet links",
                tech: ["#Python", "#HTML", "#CSS"],
                links: {
                    github: "https://github.com/shoaibxbwf/Hash2Magnet.git",
                    live: "https://shoaibxbwf.github.io/Hash2Magnet/"
                }
            },
            {
                title: "Quiz App",
                description: "Interactive quiz game built with Python's Tkinter library",
                tech: ["#Python", "#Tkinter"],
                links: {
                    github: "https://github.com/shoaibxbwf/QuizApp.git"
                }
            },
            {
                title: "Random Password Generator",
                description: "A Python terminal application for generating secure random passwords",
                tech: ["#Python"],
                links: {
                    github: "https://github.com/shoaibxbwf/RPG.git"
                }
            }
        ];

        return (
            <section data-name="projects" className="min-h-screen flex items-center justify-center px-4 py-16">
                <div className="container animate-fade-in">
                    <h2 className="section-title">Featured Projects</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {projects.map((project, index) => (
                            <div 
                                key={index}
                                className="card p-6 rounded-lg scale-up"
                            >
                                <h3 className="text-xl font-bold text-[#ccd6f6] mb-2">
                                    {project.title}
                                </h3>
                                <p className="mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, techIndex) => (
                                        <span 
                                            key={techIndex}
                                            className="text-sm text-[#64ffda] bg-[#112240] px-2 py-1 rounded"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    <a href={project.links.github} 
                                       className="text-[#ccd6f6] hover:text-[#64ffda] flex items-center gap-2"
                                       target="_blank" 
                                       rel="noopener noreferrer">
                                        <i className="fab fa-github"></i>
                                        Source Code
                                    </a>
                                    {project.links.live && (
                                        <a href={project.links.live}
                                           className="text-[#ccd6f6] hover:text-[#64ffda] flex items-center gap-2"
                                           target="_blank"
                                           rel="noopener noreferrer">
                                            <i className="fas fa-external-link-alt"></i>
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Projects component error:', error);
        reportError(error);
        return null;
    }
}
