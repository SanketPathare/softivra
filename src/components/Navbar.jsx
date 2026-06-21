import React, { useState, useEffect } from 'react';
import { Mail, Phone, Twitter, Facebook, Instagram, Linkedin, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import SoftivraLogo from './SoftivraLogo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Navigation items with routes
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Services', path: '/services' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const socialIcons = [
    { Icon: Twitter, href: 'https://twitter.com/softivra', label: 'Twitter' },
    { Icon: Facebook, href: 'https://www.facebook.com/softivra', label: 'Facebook' },
    { Icon: Instagram, href: 'https://www.instagram.com/softivra', label: 'Instagram' },
    { Icon: Linkedin, href: 'https://www.linkedin.com/company/softivra', label: 'LinkedIn' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full relative z-50">
      {/* Top Contact Bar (Desktop Only) - Thin, clean, no logo */}
      <div className="bg-slate-950/80 text-gray-400 px-4 py-2 hidden md:block border-b border-slate-900">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1.5">
              <Phone className="w-3.5 h-3.5 text-Maincolor" />
              <Link to="tel:+917620663151" className="hover:text-white transition-colors">
                +91 76206 63151
              </Link>
            </div>
            <div className="flex items-center space-x-1.5">
              <Mail className="w-3.5 h-3.5 text-Maincolor" />
              <Link to="mailto:contact@softivra.com" className="hover:text-white transition-colors">
                contact@softivra.com
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-[10px] uppercase font-bold tracking-wider text-gray-500 mr-1">Follow Us:</span>
            {socialIcons.map(({ Icon, href, label }) => (
              <Link
                key={label}
                to={href}
                target="_blank"
                aria-label={label}
                className="hover:text-white transition-colors text-gray-400"
              >
                <Icon className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`transition-all duration-300 w-full ${isScrolled ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-800 md:fixed md:top-0 md:left-0 md:right-0 shadow-md py-3' : 'bg-slate-900/90 backdrop-blur-md border-b border-slate-800 py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-12">
            {/* Brand Logo - Rendered once */}
            <div className="flex items-center">
              <Link to="/">
                <SoftivraLogo className="h-9" textColor="text-white" lightMode={true} />
              </Link>
            </div>

            {/* Desktop Navigation Links - Borderless and clean */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`relative px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-colors duration-200 rounded-md ${
                      isActive 
                        ? 'text-Maincolor' 
                        : 'text-gray-300 hover:text-white hover:bg-slate-800/40'
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-Maincolor rounded-full" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-1.5 text-gray-300 hover:text-white hover:bg-slate-800/60 rounded-lg cursor-pointer transition-colors"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-[350px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="px-4 py-3 space-y-1 bg-slate-950 border-t border-slate-900 shadow-inner">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-lg transition-colors ${
                    isActive
                      ? 'bg-Maincolor text-white'
                      : 'text-gray-300 hover:bg-slate-900 hover:text-white'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
            
            {/* Mobile Contact & Social Details */}
            <div className="pt-4 mt-2 border-t border-slate-900 space-y-2 text-center text-xs text-gray-400">
              <div className="flex justify-center space-x-4">
                {socialIcons.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 bg-slate-900 text-gray-400 hover:text-white rounded-full hover:scale-110 transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;