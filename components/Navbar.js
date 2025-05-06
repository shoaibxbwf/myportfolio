function Navbar({ currentSection, setCurrentSection }) {
    try {
        const [isMenuOpen, setIsMenuOpen] = React.useState(false);

        const navItems = [
            { id: 'home', label: 'Home' },
            { id: 'about', label: 'About' },
            { id: 'skills', label: 'Skills' },
            { id: 'projects', label: 'Projects' },
            { id: 'achievements', label: 'Achievements' },
            { id: 'contact', label: 'Contact' }
        ];

        return (
            <nav data-name="navbar" className="fixed w-full bg-[#0a192f]/90 backdrop-blur-sm z-50 px-6 py-4">
                <div className="max-w-6xl mx-auto flex justify-between items-center">
                    <div data-name="logo" className="text-2xl font-bold text-[#64ffda]">
                        <i className="fas fa-code"></i>
                    </div>

                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                data-name={`nav-${item.id}`}
                                className={`nav-link ${currentSection === item.id ? 'text-[#64ffda]' : 'text-[#8892b0]'}`}
                                onClick={() => setCurrentSection(item.id)}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    <button 
                        data-name="mobile-menu"
                        className="md:hidden text-[#64ffda]"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden mt-4 space-y-4">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                className="block w-full text-left px-4 py-2 text-[#8892b0] hover:text-[#64ffda]"
                                onClick={() => {
                                    setCurrentSection(item.id);
                                    setIsMenuOpen(false);
                                }}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                )}
            </nav>
        );
    } catch (error) {
        console.error('Navbar component error:', error);
        reportError(error);
        return null;
    }
}
