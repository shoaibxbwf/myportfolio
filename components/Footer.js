function Footer() {
    try {
        return (
            <footer data-name="footer" className="py-6 text-center">
                <p className="text-sm text-[#8892b0]">
                    © 2025 All rights reserved.
                </p>
            </footer>
        );
    } catch (error) {
        console.error('Footer component error:', error);
        reportError(error);
        return null;
    }
}
