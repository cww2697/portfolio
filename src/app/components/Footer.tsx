import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto py-8">
      <div className="flex flex-col items-center gap-6">
        <div className="flex gap-6">
          <a
            href="https://github.com/cww2697"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--foreground)] opacity-60 hover:opacity-100 hover:text-[var(--accent)] transition-all duration-300 transform hover:scale-110"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://www.linkedin.com/in/cody-w-west/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--foreground)] opacity-60 hover:opacity-100 hover:text-[var(--accent)] transition-all duration-300 transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
        
        <div className="text-sm opacity-50 font-medium tracking-wide">
          © {currentYear} Cody West. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
