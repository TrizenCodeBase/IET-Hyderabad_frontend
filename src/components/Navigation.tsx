import React, { useState, useEffect } from 'react';
import DarkModeToggle from './DarkModeToggle';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isEventsDropdownOpen, setIsEventsDropdownOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
    }

    // Listen for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const isDarkMode = document.documentElement.classList.contains('dark');
          setIsDark(isDarkMode);
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { 
      name: 'Events', 
      href: '#events',
      hasDropdown: true,
      dropdownItems: [
        { name: 'PATN', href: '/patn' },
        { 
          name: 'InnoVerse', 
          href: '#events',
          subItems: [
            { name: 'InnoThon', href: '#events' },
            { name: 'ProtoPlanet', href: '#events' },
            { name: 'StartupSphere', href: '#events' },
            { name: 'AppAstral', href: '#events' }
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src={isDark ? "/iet-logo-new.png" : "/iet-logo-for-light-theme.png"}
              alt="IET Logo" 
              className="h-8 w-auto object-contain transition-opacity duration-300"
            />
            {/* <span className="font-bold text-xl gradient-text">InnoVerse</span> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => setIsEventsDropdownOpen(true)}
                    onMouseLeave={() => setIsEventsDropdownOpen(false)}
                  >
                    <button className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors duration-200 font-medium">
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    
                    {isEventsDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-background/95 backdrop-blur-md border border-border rounded-lg shadow-lg py-2">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <div key={dropdownItem.name}>
                            {dropdownItem.subItems ? (
                              <div className="group relative">
                                <a
                                  href={dropdownItem.href}
                                  className="flex items-center justify-between px-4 py-2 text-foreground hover:text-primary hover:bg-accent transition-colors duration-200"
                                >
                                  <span>{dropdownItem.name}</span>
                                  <ChevronDown className="w-3 h-3 rotate-[-90deg]" />
                                </a>
                                <div className="absolute left-full top-0 w-40 bg-background/95 backdrop-blur-md border border-border rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                  {dropdownItem.subItems.map((subItem) => (
                                    <a
                                      key={subItem.name}
                                      href={subItem.href}
                                      className="block px-4 py-2 text-foreground hover:text-primary hover:bg-accent transition-colors duration-200"
                                    >
                                      {subItem.name}
                                    </a>
                                  ))}
                                </div>
                              </div>
                            ) : (
                              <Link
                                to={dropdownItem.href}
                                className="block px-4 py-2 text-foreground hover:text-primary hover:bg-accent transition-colors duration-200"
                              >
                                {dropdownItem.name}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
            <DarkModeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <DarkModeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary focus:outline-none"
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div className="space-y-1">
                      <div className="px-3 py-2 text-foreground font-medium border-b border-border">
                        {item.name}
                      </div>
                      {item.dropdownItems?.map((dropdownItem) => (
                        <div key={dropdownItem.name} className="ml-4">
                          {dropdownItem.subItems ? (
                            <div className="space-y-1">
                              <div className="px-3 py-2 text-sm text-foreground font-medium">
                                {dropdownItem.name}
                              </div>
                              {dropdownItem.subItems.map((subItem) => (
                                <a
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="block ml-4 px-3 py-2 text-sm text-foreground hover:text-primary transition-colors duration-200"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  {subItem.name}
                                </a>
                              ))}
                            </div>
                          ) : (
                            <Link
                              to={dropdownItem.href}
                              className="block px-3 py-2 text-sm text-foreground hover:text-primary hover:bg-accent transition-colors duration-200"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {dropdownItem.name}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium"
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
