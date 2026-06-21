import React, { useState, useEffect } from 'react';
import { Mail, Phone, Twitter, Facebook, Instagram, Linkedin, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import SoftivraLogo from './SoftivraLogo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <div className="w-full fixed top-0 left-0 right-0 z-50">
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-950 border-b-2 border-slate-700'
            : 'bg-slate-950 border-b-2 border-slate-800'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 lg:h-16">
            <Link to="/" className="flex-shrink-0">
              <SoftivraLogo className="h-8 lg:h-9" textColor="text-white" lightMode={true} />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-0.5">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`relative px-3 lg:px-4 py-2 text-[11px] lg:text-xs font-semibold tracking-wider uppercase transition-all duration-200 ${
                      isActive
                        ? 'text-Maincolor bg-Maincolor/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <span className="absolute -bottom-px left-3 lg:left-4 right-3 lg:right-4 h-[2px] bg-Maincolor" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative p-2 text-gray-300 hover:text-white transition-colors cursor-pointer z-50"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              <div className="relative w-5 h-5">
                <span
                  className={`absolute inset-0 transition-all duration-300 ${
                    isOpen ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'
                  }`}
                >
                  <Menu className="w-5 h-5" />
                </span>
                <span
                  className={`absolute inset-0 transition-all duration-300 ${
                    isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'
                  }`}
                >
                  <X className="w-5 h-5" />
                </span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/80 transition-all duration-300 md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Slide-in Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-slate-900 border-l-2 border-slate-700 transition-all duration-300 ease-in-out md:hidden z-40 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-6">
          <div className="space-y-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-4 py-3 text-sm font-semibold tracking-wider uppercase transition-all duration-200 ${
                    isActive
                      ? 'bg-Maincolor/10 text-Maincolor border-l-2 border-Maincolor'
                      : 'text-gray-300 hover:text-white hover:bg-white/5 border-l-2 border-transparent'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="mt-auto pb-10">
            <div className="border-t border-slate-700 pt-6 space-y-4">
              <a
                href="tel:+917620663151"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group"
              >
                <span className="p-2 bg-Maincolor/10 group-hover:bg-Maincolor/20 transition-colors">
                  <Phone className="w-4 h-4 text-Maincolor" />
                </span>
                +91 76206 xxx
              </a>
              <a
                href="mailto:contact@softivra.com"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group"
              >
                <span className="p-2 bg-Maincolor/10 group-hover:bg-Maincolor/20 transition-colors">
                  <Mail className="w-4 h-4 text-Maincolor" />
                </span>
                contact@softivra.com
              </a>
              <div className="flex items-center gap-3 pt-2">
                <span className="text-[10px] uppercase tracking-widest text-gray-500">Follow:</span>
                <div className="flex gap-2">
                  {socialIcons.map(({ Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className="p-2 bg-slate-800 text-gray-400 hover:text-Maincolor hover:bg-Maincolor/10 transition-all duration-200"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
