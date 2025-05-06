function About() {
    try {
        const [activeTab, setActiveTab] = React.useState('about');
        
        const education = [
            {
                degree: "Bachelor of Computer Applications (BCA)",
                school: "Asansol Engineering College",
                period: "2023 - Present",
                description: "Currently pursuing BCA with focus on computer science fundamentals and practical programming. Actively participating in technical workshops and coding competitions while maintaining excellent academic performance.",
                highlights: [
                    "Full Stack Web Development",
                    "Data Structures & Algorithms",
                    "Database Management",
                    "Software Engineering"
                ]
            },
            {
                degree: "10+2 Education – Science Stream",
                school: "Narayana School, Asansol",
                period: "2016 - 2023",
                description: "Completed secondary and senior secondary education with focus on PCM and Computer Science. Gained strong analytical and problem-solving skills, participated in science exhibitions, and developed keen interest in technology and innovation.",
                highlights: [
                    "Core PCM Concepts",
                    "Computer Science Basics",
                    "Technical Project Work",
                    "Leadership & Teamwork"
                ]
            }
        ];

        return (
            <section data-name="about" className="min-h-screen flex items-center justify-center px-4 py-16">
                <div className="container animate-fade-in">
                    <h2 className="section-title">About Me</h2>
                    
                    <div className="mb-8 flex gap-4">
                        <button 
                            className={`px-6 py-2 rounded-lg ${activeTab === 'about' ? 'bg-[#64ffda] text-[#0a192f]' : 'text-[#64ffda] border border-[#64ffda]'}`}
                            onClick={() => setActiveTab('about')}
                        >
                            About
                        </button>
                        <button 
                            className={`px-6 py-2 rounded-lg ${activeTab === 'education' ? 'bg-[#64ffda] text-[#0a192f]' : 'text-[#64ffda] border border-[#64ffda]'}`}
                            onClick={() => setActiveTab('education')}
                        >
                            Education
                        </button>
                    </div>

                    {activeTab === 'about' ? (
                        <div className="grid md:grid-cols-2 gap-8 slide-in">
                            <div>
                                <p className="text-lg mb-4">
                                    I'm a passionate BCA student with a focus on web development and programming. My journey in 
                                    technology has been driven by curiosity and a desire to create meaningful solutions.
                                </p>
                                <p className="text-lg mb-4">
                                    Through my coursework and personal projects, I've developed strong skills in Python programming,
                                    web development with HTML and CSS, and I'm constantly expanding my knowledge in these areas.
                                </p>
                                <p className="text-lg">
                                    I've successfully completed several projects, from weather applications to utility tools,
                                    demonstrating my ability to take ideas from concept to completion.
                                </p>
                            </div>
                            <div className="flex justify-center items-center">
                                <div className="floating">
                                    <i className="fas fa-laptop-code text-6xl text-[#64ffda]"></i>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="grid gap-8 scale-up">
                            {education.map((edu, index) => (
                                <div key={index} className="card p-6 rounded-lg">
                                    <h3 className="text-xl font-bold text-[#ccd6f6] mb-2">{edu.degree}</h3>
                                    <p className="text-[#64ffda] mb-2">{edu.school}</p>
                                    <p className="text-[#8892b0] mb-3">{edu.period}</p>
                                    <p className="text-[#8892b0] mb-4">{edu.description}</p>
                                    <div className="mt-4">
                                        <h4 className="text-[#ccd6f6] mb-2">Key Focus Areas:</h4>
                                        <ul className="grid grid-cols-2 gap-2">
                                            {edu.highlights.map((highlight, i) => (
                                                <li key={i} className="flex items-center text-[#8892b0]">
                                                    <i className="fas fa-check-circle text-[#64ffda] mr-2"></i>
                                                    {highlight}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        );
    } catch (error) {
        console.error('About component error:', error);
        reportError(error);
        return null;
    }
}
