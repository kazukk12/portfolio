
"use client";

const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full bg-black bg-opacity-60 text-white z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <div className="font-bold text-lg">
                    <span className="text-sm">WEB engineer</span>
                    <br />
                    <span className="text-xl">Kazuma</span>
                </div>
                <nav className="space-x-6">
                    <a>Home</a>
                    <a>About</a>
                    <a>Work</a>
                    <a>Blog</a>
                    <a>Contact</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;