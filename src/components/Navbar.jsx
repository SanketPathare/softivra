import React, { useState, useEffect } from 'react';
import { Mail, Twitter, Facebook, Instagram, Linkedin, Menu, X } from 'lucide-react';
import { Icon } from '@iconify-icon/react';
import { Link } from 'react-router-dom';
import SoftivraLogo from './SoftivraLogo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
    { Icon: Twitter, href: 'https://twitter.com/softivra', color: 'bg-Maincolor text-white p-3 rounded-full' },
    { Icon: Facebook, href: 'https://www.facebook.com/softivra', color: 'bg-Maincolor text-white p-3 rounded-full' },
    { Icon: Instagram, href: 'https://www.instagram.com/softivra', color: 'bg-Maincolor text-white p-3 rounded-full' },
    { Icon: Linkedin, href: 'https://www.linkedin.com/company/softivra', color: 'bg-Maincolor text-white p-3 rounded-full' }
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
    <div className="w-full shadow-lg">
      {/* Top Contact Bar */}
      <div className="bg-blue-100 px-4 py-3 hidden md:block border-b border-blue-200">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3 text-gray-700">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/">
                <SoftivraLogo className="h-10" textColor="text-slate-800" />
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-Maincolor" />
              <Link target='_blank' to="mailto:contact@softivra.com">
                <span className="text-xs font-semibold text-gray-700 hover:text-Maincolor transition-colors">contact@softivra.com</span>
              </Link>
            </div>
            <div className='flex items-center'>
              <Icon icon="ci:line-l" width="20" height="20" className='text-Maincolor' />
            </div>
            <div className='flex gap-2'>
              {socialIcons.map(({ Icon, href, color }, index) => (
                <Link
                  key={index}
                  to={href}
                  target="_blank"
                  className={`bg-Maincolor transition-all duration-300 hover:scale-110 text-white p-2 rounded-full`}
                >
                  <Icon className="w-3.5 h-3.5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`relative transition-all duration-300 w-full ${isScrolled ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-700 md:fixed md:top-0 md:left-0 md:right-0 md:z-50 shadow-md py-2' : 'bg-blue-100 py-3'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 md:h-16">
            {/* Logo for Mobile / Scrolled View */}
            <div className="flex items-center">
              <Link to="/">
                <SoftivraLogo className="h-9" textColor={isScrolled ? "text-white" : "text-slate-800"} lightMode={isScrolled} />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center z-10">
              <div className="flex items-center bg-Maincolor rounded-md px-2 py-1 shadow-md">
                {navItems.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <Link
                      to={item.path}
                      className="relative px-5 py-2 text-white font-semibold text-xs tracking-wide transition-all duration-300 hover:text-blue-200 group"
                    >
                      <span className="relative">{item.name}</span>
                    </Link>
                    {index < navItems.length - 1 && (
                      <span className="h-4 w-[1px] bg-white/30 mx-1"></span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 transition-colors duration-200 rounded-lg cursor-pointer ${isScrolled ? 'text-white hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'}`}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-[350px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="px-4 py-3 space-y-1 bg-slate-900 border-t border-slate-800 shadow-inner">
            {navItems.map((item, index) => (
              <div key={index}>
                <Link
                  to={item.path}
                  className="block px-4 py-2 text-white/90 hover:text-white hover:bg-slate-800 transition-all duration-300 text-sm font-semibold rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </div>
            ))}
            {/* Mobile Social Icons */}
            <div className="flex justify-center space-x-4 pt-3 border-t border-slate-800 mt-2">
              {socialIcons.map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="bg-slate-800 text-white/80 p-2 rounded-full transition-all duration-300 hover:scale-110 hover:text-white"
                  aria-label={`Visit social page`}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;