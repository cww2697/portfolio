import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <div className="glass-nav rounded-full px-8 py-3 flex gap-8 items-center text-sm font-medium">
        <Link href="/" className="hover:text-[var(--accent)] transition-colors">About</Link>
        <Link href="/experience" className="hover:text-[var(--accent)] transition-colors">Experience</Link>
        <Link href="/education" className="hover:text-[var(--accent)] transition-colors">Education</Link>
        <Link href="/projects" className="hover:text-[var(--accent)] transition-colors">Projects</Link>
      </div>
    </nav>
  );
};

export default Navbar;
