function Skills() {
    try {
        const skills = [
            {
                category: "Core Programming",
                items: [
                    {
                        name: "Python",
                        description: "Proficient in Python programming with focus on automation, GUI development, and data manipulation. Experience in creating efficient algorithms and practical applications.",
                        icon: "fab fa-python"
                    },
                    {
                        name: "JavaScript",
                        description: "Strong understanding of modern JavaScript, DOM manipulation, and asynchronous programming. Experience with ES6+ features and browser APIs.",
                        icon: "fab fa-js"
                    },
                    {
                        name: "HTML",
                        description: "Expert in semantic HTML5 markup and web accessibility. Skilled in creating structured, SEO-friendly content.",
                        icon: "fab fa-html5"
                    },
                    {
                        name: "CSS",
                        description: "Advanced knowledge of CSS3, including flexbox, grid, and animations. Experience in responsive design and modern frameworks.",
                        icon: "fab fa-css3-alt"
                    }
                ]
            },
            {
                category: "Development Tools",
                items: [
                    {
                        name: "VS Code",
                        description: "Proficient with VS Code and its extensions ecosystem. Experienced in debugging and optimization.",
                        icon: "fas fa-code"
                    },
                    {
                        name: "Git & GitHub",
                        description: "Strong command over version control and collaborative development workflows.",
                        icon: "fab fa-github"
                    }
                ]
            }
        ];

        return (
            <section data-name="skills" className="min-h-screen flex items-center justify-center px-6 py-20">
                <div className="max-w-4xl w-full animate-fade-in">
                    <h2 className="section-title">Skills</h2>
                    {skills.map((skillCategory, index) => (
                        <div key={index} className="mb-12 slide-in">
                            <h3 className="text-2xl text-[#ccd6f6] mb-6">{skillCategory.category}</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                {skillCategory.items.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="card p-6 rounded-lg scale-up">
                                        <i className={`${skill.icon} text-4xl text-[#64ffda] mb-4`}></i>
                                        <h4 className="text-xl text-[#ccd6f6] mb-2">{skill.name}</h4>
                                        <p className="text-[#8892b0]">{skill.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    <div className="mt-12">
                        <h3 className="text-2xl text-[#ccd6f6] mb-6">Soft Skills</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="card p-6 rounded-lg scale-up">
                                <i className="fas fa-bolt text-4xl text-[#64ffda] mb-4"></i>
                                <h4 className="text-xl text-[#ccd6f6] mb-2">Fast Learner</h4>
                                <p className="text-[#8892b0]">Quick to adapt and master new technologies</p>
                            </div>
                            <div className="card p-6 rounded-lg scale-up">
                                <i className="fas fa-puzzle-piece text-4xl text-[#64ffda] mb-4"></i>
                                <h4 className="text-xl text-[#ccd6f6] mb-2">Problem Solving</h4>
                                <p className="text-[#8892b0]">Analytical approach to technical challenges</p>
                            </div>
                            <div className="card p-6 rounded-lg scale-up">
                                <i className="fas fa-users text-4xl text-[#64ffda] mb-4"></i>
                                <h4 className="text-xl text-[#ccd6f6] mb-2">Teamwork</h4>
                                <p className="text-[#8892b0]">Strong collaboration and communication</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Skills component error:', error);
        reportError(error);
        return null;
    }
}
