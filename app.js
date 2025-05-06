function App() {
    try {
        const [currentSection, setCurrentSection] = React.useState('home');

        const renderSection = () => {
            switch(currentSection) {
                case 'home':
                    return <Home />;
                case 'about':
                    return <About />;
                case 'skills':
                    return <Skills />;
                case 'projects':
                    return <Projects />;
                case 'achievements':
                    return <Achievements />;
                case 'contact':
                    return <Contact />;
                default:
                    return <Home />;
            }
        };

        return (
            <div data-name="app">
                <Navbar currentSection={currentSection} setCurrentSection={setCurrentSection} />
                {renderSection()}
                <Footer />
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
        return null;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
