function Achievements() {
    try {
        const achievements = [
            {
                title: "Full-Stack Web Development Bootcamp",
                organization: "Dr. Angela Yu",
                description: "Successfully completed 'The Complete Full-Stack Web Development Bootcamp,' an intensive program covering modern web technologies and best practices. Mastered HTML5, CSS3, JavaScript, React, Node.js, PostgreSQL, Web3, and DApps development. Completed 16+ real-world projects, ranging from responsive websites to full-stack applications with authentication and database integration. Implemented industry best practices in code organization, version control, and deployment strategies. Received recognition for exceptional project implementations and innovative problem-solving approaches.",
                skills: [
                    "#Frontend Development",
                    "#Backend Architecture",
                    "#Database Management",
                    "#API Integration",
                    "#Web3 Technologies"
                ],
                certificate: "assets/bootcamp.pdf"
            },
            {
                title: "Data Visualisation Certification",
                organization: "Tata Group - Forage",
                description: "Completed the prestigious 'Data Visualisation: Empowering Business with Effective Insights' job simulation program. Developed expertise in transforming complex data sets into clear, actionable visualizations. Mastered various visualization techniques and tools to present data effectively. Created comprehensive dashboards and reports that drive business decisions. Received positive feedback for clarity of presentation and analytical approach to problem-solving.",
                skills: [
                    "#Data Analysis",
                    "#Visual Communication",
                    "#Business Intelligence",
                    "#Dashboard Design",
                    "#Analytical Thinking"
                ],
                certificate: "assets/forage.pdf"
            },
            {
                title: "Creative Writing Excellence",
                organization: "Rhetoric Group - College Litfest",
                description: "Distinguished participant in the college litfest contest organized by the rhetoric group. Demonstrated exceptional storytelling abilities and creative writing skills. Crafted compelling narratives that engaged audiences and received positive recognition. Developed and presented original content under time constraints, showcasing adaptability and creativity. Enhanced communication skills through participation in various writing workshops and competitions.",
                skills: [
                    "#Creative Writing",
                    "#Storytelling",
                    "#Content Creation",
                    "#Public Speaking",
                    "#Time Management"
                ],
                certificate: "assets/litfest.pdf"
            }
        ];

        return (
            <section data-name="achievements" className="min-h-screen flex items-center justify-center px-4 py-16">
                <div className="container animate-fade-in">
                    <h2 className="section-title">Achievements</h2>
                    <div className="grid gap-8">
                        {achievements.map((achievement, index) => (
                            <div key={index} className="card p-6 rounded-lg scale-up">
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-[#ccd6f6] mb-2">
                                            {achievement.title}
                                        </h3>
                                        <p className="text-[#64ffda] mb-2">{achievement.organization}</p>
                                    </div>
                                    <a 
                                        href={achievement.certificate}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="button px-4 py-2 text-sm rounded mt-2 md:mt-0 flex items-center gap-2"
                                    >
                                        <i className="fas fa-certificate"></i>
                                        View Certificate
                                    </a>
                                </div>
                                <p className="text-[#8892b0] mb-4">{achievement.description}</p>
                                <div className="mt-4">
                                    <h4 className="text-[#ccd6f6] mb-2">Key Skills Acquired:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {achievement.skills.map((skill, i) => (
                                            <span 
                                                key={i}
                                                className="bg-[#112240] text-[#64ffda] px-3 py-1 rounded-full text-sm"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Achievements component error:', error);
        reportError(error);
        return null;
    }
}
