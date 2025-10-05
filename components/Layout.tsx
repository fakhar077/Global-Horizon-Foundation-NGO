
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useLocalization } from '../context/LocalizationContext';
import { Button } from './UI';

const GlobeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0-3.182-5.511m3.182 5.511a11.953 11.953 0 0 1-3.182 5.511" />
    </svg>
);

const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
);

const CloseIcon = () => (
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
);


export const Header: React.FC = () => {
    const { t, language, toggleLanguage } = useLocalization();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navLinks = [
        { path: '/', label: t('home') },
        { path: '/about', label: t('about') },
        { path: '/programs', label: t('programs') },
        { path: '/impact', label: t('impact') },
        { path: '/events', label: t('events') },
        { path: '/news', label: t('news') },
        { path: '/contact', label: t('contact') },
    ];
    
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <NavLink to="/" className="text-2xl font-bold text-primary">Global Horizon</NavLink>
                    <nav className="hidden lg:flex items-center space-x-6">
                        {navLinks.map(link => (
                            <NavLink key={link.path} to={link.path} className={({ isActive }) => `text-neutral-dark hover:text-primary transition-colors ${isActive ? 'font-bold text-primary' : ''}`}>{link.label}</NavLink>
                        ))}
                    </nav>
                    <div className="hidden lg:flex items-center space-x-4">
                        <Button onClick={toggleLanguage} variant="ghost" className="flex items-center space-x-2">
                           <GlobeIcon />
                           <span>{language === 'en' ? 'اردو' : 'English'}</span>
                        </Button>
                        <NavLink to="/donate">
                           <Button>{t('donateNow')}</Button>
                        </NavLink>
                    </div>
                    <div className="lg:hidden flex items-center">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-neutral-dark">
                            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="lg:hidden bg-white shadow-lg absolute top-20 left-0 w-full">
                    <nav className="flex flex-col items-center p-4 space-y-4">
                       {navLinks.map(link => (
                            <NavLink key={link.path} to={link.path} onClick={closeMenu} className={({ isActive }) => `text-neutral-dark hover:text-primary transition-colors py-2 text-lg ${isActive ? 'font-bold text-primary' : ''}`}>{link.label}</NavLink>
                        ))}
                        <NavLink to="/donate" onClick={closeMenu}>
                           <Button>{t('donateNow')}</Button>
                        </NavLink>
                        <Button onClick={() => { toggleLanguage(); closeMenu(); }} variant="ghost" className="flex items-center space-x-2">
                           <GlobeIcon />
                           <span>{language === 'en' ? 'اردو' : 'English'}</span>
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    );
};

export const Footer: React.FC = () => {
    const { t } = useLocalization();
    return (
        <footer className="bg-neutral-dark text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold">Global Horizon</h3>
                        <p className="mt-2 text-neutral-300">{t('heroSubtitle')}</p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-lg">{t('contactUs')}</h4>
                        <ul className="mt-2 space-y-2 text-neutral-300">
                            <li>Email: info@globalhorizon.org</li>
                            <li>Phone: +92 123 4567890</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-lg">Quick Links</h4>
                        <ul className="mt-2 space-y-2">
                           <li><NavLink to="/about" className="text-neutral-300 hover:text-white">{t('about')}</NavLink></li>
                           <li><NavLink to="/programs" className="text-neutral-300 hover:text-white">{t('programs')}</NavLink></li>
                           <li><NavLink to="/contact" className="text-neutral-300 hover:text-white">{t('contact')}</NavLink></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-lg">{t('getInvolved')}</h4>
                        <div className="mt-4 flex space-x-4">
                           <NavLink to="/donate">
                               <Button variant="secondary">{t('donateNow')}</Button>
                           </NavLink>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-neutral-700 pt-6 text-center text-neutral-400">
                    <p>&copy; {new Date().getFullYear()} Global Horizon Foundation. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};
