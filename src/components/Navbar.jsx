import { useEffect } from 'react';

export const Navbar = ({ menuOpen, setMenuOpen }) => {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
    }, [menuOpen]);
    return (
        <nav className="absolute top-0 w-full z-10">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-24">
                    <a
                        href="#about"
                        className="font-extrabold text-[24px] text-[#F43F5E] font-inter"
                    >
                        Sebastien Bonnafous
                    </a>
                    <div
                        className="w-7 h-5 relative cursor-pointer z-10 md:hidden"
                        onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        &#9776;
                    </div>

                    <div className="hidden md:flex items-center space-x-16 ">
                        <a
                            href="#about"
                            className="text-[#F43F5E] hover:text-white transition-colors"
                        >
                            About
                        </a>

                        <a
                            href="#skills"
                            className="text-[#F43F5E] hover:text-white transition-colors"
                        >
                            Skills
                        </a>

                        <a
                            href="#projects"
                            className="text-[#F43F5E] hover:text-white transition-colors"
                        >
                            Projects
                        </a>

                        <a
                            href="#contact"
                            className="text-[#F43F5E] hover:text-white transition-colors"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};
