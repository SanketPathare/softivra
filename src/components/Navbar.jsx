import React, { useState, useEffect } from 'react';
import { Mail, Twitter, Facebook, Instagram, Linkedin, Menu, X } from 'lucide-react';
import { Icon } from '@iconify-icon/react';
import { Link } from 'react-router-dom';

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
    { Icon: Twitter, href: 'https://twitter.com/Nextdigit_Sw', color: 'bg-Maincolor text-white p-3 rounded-full' },
    { Icon: Facebook, href: 'https://www.facebook.com/Nextdigit-Software/', color: 'bg-Maincolor text-white p-3 rounded-full' },
    { Icon: Instagram, href: 'https://www.instagram.com/nextdigit_sw/', color: 'bg-Maincolor text-white p-3 rounded-full' },
    { Icon: Linkedin, href: 'https://www.linkedin.com/company/nextdigit-software', color: 'bg-Maincolor text-white p-3 rounded-full' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50); // Show navbar at bottom after scrolling 50px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full shadow-lg">
      {/* Top Contact Bar */}
      <div className="bg-blue-100 px-4 py-5 hidden md:block">
        <div className="max-w-8xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3 text-gray-700">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <Link to="/">
              <img src='/logo.png' alt='logo' className='h-14 w-fit' />
              </Link>
            </div>
          </div>
          <div className="flex space-x-3">
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-Maincolor" />
              <Link target='_blank' to="mailto:contact@nextdigit.in">
              <span className="text-sm font-medium">contact@nextdigit.in</span>
              </Link>
            </div>
            <div className='flex items-center-safe'>
              <Icon icon="ci:line-l" width="24" height="24" className='text-Maincolor' />
            </div>
            <div className='flex gap-3'>
              {socialIcons.map(({ Icon, href, color }, index) => (
                <Link
                  key={index}
                  to={href}
                  target="_blank"
                  className={`bg-Maincolor transition-all duration-300 hover:scale-110 text-white p-3 rounded-full`}
                >
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`relative bg-blue-100 ${isScrolled ? ' bg-transparent md:fixed md:top-[0] md:left-0 md:right-0 md:z-50 ' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between lg:justify-center items-center lg:h-5 h-20">
            {/* Logo for Mobile */}
            <div className="flex items-center md:hidden">
              <img src="/logo.png" alt="logo" className="h-10 w-fit" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block mt-[15px] z-10">
              <div className="flex items-center justify-center bg-Maincolor rounded-md">
              {navItems.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <Link
                      to={item.path}
                      className="relative px-10 py-3 text-white font-medium text-md transition-all duration-300 group"
                    >
                      <span className="relative">{item.name}</span>
                    </Link>
                    {index < navItems.length - 1 && (
                      <span className="h-6 w-[2px] bg-gray-200 mx-2"></span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 rounded-lg cursor-pointer"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="px-4 py-4 space-y-2 bg-blue-50 border-t border-gray-200">
          {navItems.map((item, index) => (
              <div key={index}>
                <Link
                  to={item.path}
                  className="block px-4 py-3 text-gray-700 hover:text-white hover:bg-blue-600 transition-all duration-300 text-base font-medium rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
                {index < navItems.length - 1 && (
                  <hr className="my-2 border-gray-200" />
                )}
              </div>
            ))}
            {/* Mobile Social Icons */}
            <div className="flex justify-center space-x-4 pt-4 pb-2 border-t border-gray-200 mt-4">
              {socialIcons.map(({ Icon, href, color }, index) => (
                <a
                  key={index}
                  href={href}
                  className={`${color} p-3 transition-all duration-300 hover:scale-110`}
                  aria-label={`Visit our ${Icon.name} page`}
                >
                  <Icon className="w-6 h-6" />
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