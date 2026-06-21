import React, { useState, useEffect } from 'react';
import { Mail, Phone, Twitter, Facebook, Instagram, Linkedin, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import SoftivraLogo from './SoftivraLogo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <div className="w-full fixed top-0 left-0 right-0 z-50">
      {/* Main Navbar - Brutalist design */}
      <nav className="bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <Link to="/" className="flex-shrink-0 cursor-pointer">
              <SoftivraLogo className="h-8 lg:h-9" textColor="text-black" lightMode={false} />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`px-3 lg:px-4 py-2 text-xs font-black tracking-widest uppercase transition-all duration-150 border-2 ${
                      isActive
                        ? 'bg-Maincolor border-black shadow-[2px_2px_0px_0px_#000] text-black -translate-x-[1px] -translate-y-[1px]'
                        : 'text-black border-transparent hover:bg-Maincolor/30 hover:border-black hover:shadow-[2px_2px_0px_0px_#000] hover:-translate-x-[1px] hover:-translate-y-[1px]'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-black bg-Maincolor border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:bg-Secondcolor hover:text-white transition-all cursor-pointer z-50"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              <div className="relative w-5 h-5">
                <span
                  className={`absolute inset-0 transition-all duration-300 ${
                    isOpen ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'
                  }`}
                >
                  <Menu className="w-5 h-5 stroke-[3px]" />
                </span>
                <span
                  className={`absolute inset-0 transition-all duration-300 ${
                    isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'
                  }`}
                >
                  <X className="w-5 h-5 stroke-[3px]" />
                </span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-xs transition-all duration-300 md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Slide-in Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-xs bg-white border-l-4 border-black transition-all duration-300 ease-in-out md:hidden z-40 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-6 pb-8">
          <div className="space-y-3">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-4 py-3 text-sm font-black tracking-widest uppercase border-2 border-black transition-all shadow-[2px_2px_0px_0px_#000] ${
                    isActive
                      ? 'bg-Maincolor text-black'
                      : 'bg-white text-black hover:bg-Maincolor'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="mt-auto">
            <div className="border-t-2 border-black pt-6 space-y-4">
              <a
                href="tel:+917620663151"
                className="flex items-center gap-3 text-xs font-black uppercase text-black hover:text-Maincolor transition-colors group"
              >
                <span className="p-1.5 bg-white border-2 border-black rounded-none shadow-[2px_2px_0px_0px_#000]">
                  <Phone className="w-3.5 h-3.5 text-black" />
                </span>
                +91 76206 xxx
              </a>
              <a
                href="mailto:contact@softivra.com"
                className="flex items-center gap-3 text-xs font-black uppercase text-black hover:text-Maincolor transition-colors group"
              >
                <span className="p-1.5 bg-white border-2 border-black rounded-none shadow-[2px_2px_0px_0px_#000]">
                  <Mail className="w-3.5 h-3.5 text-black" />
                </span>
                contact@softivra.com
              </a>
              <div className="flex items-center gap-3 pt-2">
                <span className="text-[9px] font-black uppercase tracking-widest text-black">Follow:</span>
                <div className="flex gap-2">
                  {socialIcons.map(({ Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className="p-1.5 bg-white text-black border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:bg-Maincolor transition-all"
                    >
                      <Icon className="w-3.5 h-3.5" />
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
