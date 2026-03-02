'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'About' },
    { href: '/experience', label: 'Experience' },
    { href: '/education', label: 'Education' },
    { href: '/projects', label: 'Projects' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      {/* Desktop & Mobile Pill Container */}
      <div className={`glass-nav rounded-full px-4 md:px-8 py-3 flex gap-8 items-center text-sm font-medium transition-all duration-300 ${isOpen ? 'rounded-2xl' : ''}`}>
        
        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={`hover:text-[var(--accent)] transition-colors ${pathname === link.href ? 'text-[var(--accent)]' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile View: Logo/Title + Hamburger */}
        <div className="flex md:hidden items-center justify-between w-full min-w-[200px]">
          <span className="font-bold text-[var(--accent)]">CW</span>
          <button 
            onClick={toggleMenu}
            className="p-2 -mr-2 text-[var(--foreground)] focus:outline-none"
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between overflow-hidden">
              <span className={`hamburger-line w-full ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`hamburger-line w-full ${isOpen ? 'opacity-0 translate-x-4' : ''}`}></span>
              <span className={`hamburger-line w-full ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`absolute top-full left-4 right-4 mt-2 md:hidden glass-nav rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-64 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'}`}>
        <div className="flex flex-col items-center gap-4">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className={`text-lg hover:text-[var(--accent)] transition-colors ${pathname === link.href ? 'text-[var(--accent)]' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
