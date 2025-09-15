import React, { useState } from 'react';
import { Mail, Twitter, Facebook, Instagram, Linkedin, Menu, X } from 'lucide-react';
import { Icon } from '@iconify-icon/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    'Home', 'About Us', 'Services', 'Blogs', 'Careers', 'Contact Us'
  ];

  const socialIcons = [
    { Icon: Twitter, href: '#', color: 'text-blue-400 hover:text-blue-300' },
    { Icon: Facebook, href: '#', color: 'text-blue-600 hover:text-blue-500' },
    { Icon: Instagram, href: '#', color: 'text-pink-500 hover:text-pink-400' },
    { Icon: Linkedin, href: '#', color: 'text-blue-700 hover:text-blue-600' }
  ];

  return (
    <div className="w-full shadow-lg">
      {/* Top Contact Bar */}
      <div className="bg-blue-100 px-4 py-8 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3 text-gray-700">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img src='/logo.png' alt='logo' className='h-14 w-fit ' />
            </div>
          </div>
          <div className="flex space-x-3">
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-Maincolor" />
              <span className="text-sm font-medium">contact@nextdigit.in</span>
            </div>
            <div className='flex items-center-safe'>
              <Icon icon="ci:line-l" width="24" height="24" className='text-Maincolor' />
            </div>
            <div className='flex gap-3'>
              {socialIcons.map(({ Icon, href, color }, index) => (
                <a
                  key={index}
                  href={href}
                  className={`bg-Maincolor transition-all duration-300 hover:scale-110 text-white p-3 rounded-full`}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className=" relative bg-blue-100 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between lg:justify-center items-center lg:h-5 h-20 ">
            {/* Logo for Mobile */}
            <div className="flex items-center md:hidden">
              <img src="/logo.png" alt="logo" className="h-10 w-fit " />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block mt-[15px] absolute z-10">
              <div className="flex items-center justify-center bg-Maincolor rounded-md">
                {navItems.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <a
                      href="#"
                      className="relative px-10 py-3 text-white font-medium text-md transition-all duration-300 group"
                    >
                      <span className="relative">{item}</span>
                    </a>
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
                className="p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 f rounded-lg cursor-pointer"
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
                <a
                  href="#"
                  className="block px-4 py-3 text-gray-700 hover:text-white hover:bg-blue-600 transition-all duration-300 text-base font-medium rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
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