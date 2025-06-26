import React, { useState } from 'react';
import logo from '../img/logo.jpg'

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-gradient-to-r from-gray-400 to-black border-b border-gray-300 py-4 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-8 w-auto sm:h-10 md:h-12 lg:h-14 xl:h-16"
                    />
                </div>

                {/* Navigation Desktop */}
                <nav className="hidden md:block">
                    <ul className="flex gap-4 lg:gap-6 xl:gap-8">
                        <li>
                            <a href="/" className="text-white hover:text-blue-300 font-medium transition-colors text-sm lg:text-base">
                                Accueil
                            </a>
                        </li>
                        <li>
                            <a href="/actualites" className="text-white hover:text-blue-300 font-medium transition-colors text-sm lg:text-base">
                                Actualités
                            </a>
                        </li>
                        <li>
                            <a href="/contact" className="text-white hover:text-blue-300 font-medium transition-colors text-sm lg:text-base">
                                Contact
                            </a>
                        </li>
                        <li>
                            <a href="/Service" className="text-white hover:text-blue-300 font-medium transition-colors text-sm lg:text-base">
                                Service client
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Bouton Contact Desktop */}
                <div className="hidden md:block">
                    <a href="#contact" className="bg-white text-gray-800 px-3 py-2 lg:px-4 lg:py-2 rounded hover:bg-gray-100 transition text-sm lg:text-base font-medium">
                        Contact
                    </a>
                </div>

                {/* Menu Burger Mobile */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-white focus:outline-none focus:text-blue-300"
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Menu Mobile */}
            {isMenuOpen && (
                <div className="md:hidden mt-4 pb-4">
                    <nav className="flex flex-col space-y-3">
                        <a href="/" className="text-white hover:text-blue-300 font-medium transition-colors py-2 px-2 rounded hover:bg-gray-600">
                            Accueil
                        </a>
                        <a href="/actualites" className="text-white hover:text-blue-300 font-medium transition-colors py-2 px-2 rounded hover:bg-gray-600">
                            Actualités
                        </a>
                        <a href="/contact" className="text-white hover:text-blue-300 font-medium transition-colors py-2 px-2 rounded hover:bg-gray-600">
                            Contact
                        </a>
                        <a href="/Service" className="text-white hover:text-blue-300 font-medium transition-colors py-2 px-2 rounded hover:bg-gray-600">
                            Service client
                        </a>
                        <a href="#contact" className="bg-white text-gray-800 px-3 py-2 rounded hover:bg-gray-100 transition font-medium text-center mt-2">
                            Contact
                        </a>
                    </nav>
                </div>
            )}
        </header>
    )
}

export default Header;