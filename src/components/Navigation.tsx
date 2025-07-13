import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isEventsDropdownOpen, setIsEventsDropdownOpen] = useState(false);
  const [isInnoverseOpen, setIsInnoverseOpen] = useState(false);
  const { isDark } = useTheme();
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsEventsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsEventsDropdownOpen(false);
      setIsInnoverseOpen(false);
    }, 300);
  };

  const navItems = [
    { name: 'Home', href: '/' },
    {
      name: 'Events',
      href: '#events',
      hasDropdown: true,
      dropdownItems: [
        { name: 'PATN', href: '/patn' },
        {
          name: 'Innoverse',
          href: '#events',
          subItems: [
            { name: 'InnoThon', href: '/innothon' },
            { name: 'ProtoPlanet', href: '/protoplanet' },
            { name: 'StartupSphere', href: '/startupsphere' },
            { name: 'AppAstral', href: '/appastral' }
          ]
        },
        { name: 'TechTalk', href: '#techtalk' }
      ]
    },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Register', href: '#register' },
    { name: 'FAQ', href: '#faq' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black border-b border-white/20 backdrop-blur-md text-white shadow-[0_4px_20px_-2px_rgba(255,255,255,0.1)]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img
              src={isDark ? "/iet-logo-new.png" : "/iet-logo-for-light-theme.png"}
              alt="IET Logo"
              className="h-8 w-auto object-contain transition-opacity duration-300"
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button className="flex items-center gap-1 text-base font-medium hover:opacity-80 transition-opacity duration-200">
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transform transition-transform duration-300 ${
                          isEventsDropdownOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {/* Main Dropdown */}
                    <div
                      className={`absolute top-full left-0 mt-2 w-34 border border-white/20 rounded-lg shadow-[0_4px_20px_-2px_rgba(255,255,255,0.1)] py-2 bg-black backdrop-blur-md transform transition-all duration-300 ease-in-out ${
                        isEventsDropdownOpen
                          ? 'opacity-100 translate-y-1 visible'
                          : 'opacity-0 -translate-y-2 invisible pointer-events-none'
                      }`}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      {item.dropdownItems?.map((dropdownItem) => (
                        <div key={dropdownItem.name}>
                          {dropdownItem.subItems ? (
                            <div
                              className="group relative"
                              onMouseEnter={() => setIsInnoverseOpen(true)}
                              onMouseLeave={() => setIsInnoverseOpen(false)}
                            >
                              <a
                                href={dropdownItem.href}
                                className="flex items-center justify-between px-4 py-2 text-base hover:bg-white/10 hover:text-white transition-all duration-200"
                              >
                                <span>{dropdownItem.name}</span>
                                <ChevronDown
                                  className={`w-4 h-4 transform transition-transform duration-300 ${
                                    isInnoverseOpen ? 'rotate-90' : '-rotate-90'
                                  }`}
                                />
                              </a>

                              {/* Innoverse Submenu */}
                              <div
                                className={`absolute left-full top-0 w-40 border border-white/20 rounded-lg shadow-[0_4px_20px_-2px_rgba(255,255,255,0.1)] py-2 bg-black backdrop-blur-md transform transition-all duration-300 ease-in-out ${
                                  isInnoverseOpen
                                    ? 'opacity-100 translate-x-1 visible'
                                    : 'opacity-0 -translate-x-2 invisible pointer-events-none'
                                }`}
                              >
                                {dropdownItem.subItems.map((subItem) => (
                                  <a
                                    key={subItem.name}
                                    href={subItem.href}
                                    className="block px-4 py-2 text-sm hover:bg-white/10 hover:text-white transition-all duration-200"
                                  >
                                    {subItem.name}
                                  </a>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <a
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-base hover:bg-white/10 hover:text-white transition-all duration-200"
                            >
                              {dropdownItem.name}
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : item.name === 'Home' ? (
                  <Link
                    to={item.href}
                    className="font-medium hover:opacity-80 transition-opacity duration-200"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className="font-medium hover:opacity-80 transition-opacity duration-200"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover:bg-white/10 p-2 rounded-lg focus:outline-none transition-all duration-200"
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
        </div>

        {/* Mobile Menu (unchanged) */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/20 bg-black backdrop-blur-md text-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div className="space-y-1">
                      <div className="px-3 py-2 font-medium border-b border-white/10 hover:bg-white/10 transition-all duration-200">
                        {item.name}
                      </div>
                      {item.dropdownItems?.map((dropdownItem) => (
                        <div key={dropdownItem.name} className="ml-4">
                          {dropdownItem.subItems ? (
                            <div className="space-y-1">
                              <div className="px-3 py-2 text-sm font-medium hover:bg-white/10 transition-all duration-200">
                                {dropdownItem.name}
                              </div>
                              <div className="ml-4 space-y-1">
                                {dropdownItem.subItems.map((subItem) => (
                                  <a
                                    key={subItem.name}
                                    href={subItem.href}
                                    className="block px-3 py-2 text-sm hover:bg-white/10 hover:text-white transition-all duration-200"
                                    onClick={() => setIsMenuOpen(false)}
                                  >
                                    {subItem.name}
                                  </a>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <a
                              href={dropdownItem.href}
                              className="block px-3 py-2 text-sm hover:bg-white/10 hover:text-white transition-all duration-200"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {dropdownItem.name}
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : item.name === 'Home' ? (
                    <Link
                      to={item.href}
                      className="block px-3 py-2 font-medium hover:bg-white/10 hover:text-white transition-all duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className="block px-3 py-2 font-medium hover:bg-white/10 hover:text-white transition-all duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
