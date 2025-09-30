'use client';
import React, { useEffect, useMemo, useState } from 'react';
import { library, config } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Footer.module.css";
import '@fortawesome/fontawesome-svg-core/styles.css';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
library.add(faGithub, faLinkedin, faMoon, faSun);
config.autoAddCss = false;

type Theme = 'light' | 'dark';

const Footer = () => {
    const prefersDark = useMemo(() => {
        if (typeof window === 'undefined') return false;
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }, []);

    const [theme, setTheme] = useState<Theme | null>(null);
    const year = useMemo(() => new Date().getFullYear(), []);

    useEffect(() => {
        const stored = typeof window !== 'undefined' ? (localStorage.getItem('theme') as Theme | null) : null;
        if (stored === 'light' || stored === 'dark') {
            setTheme(stored);
            document.documentElement.setAttribute('data-theme', stored);
        } else {
            setTheme(prefersDark ? 'dark' : 'light');
            document.documentElement.removeAttribute('data-theme');
        }
    }, [prefersDark]);

    const toggleTheme = () => {
        const currentIsDark = theme === 'dark';
        const next: Theme = currentIsDark ? 'light' : 'dark';
        setTheme(next);
        // Persist explicit choice and apply override
        try { localStorage.setItem('theme', next); } catch {}
        document.documentElement.setAttribute('data-theme', next);
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.footerCopyright}>
                <span className={styles.copyText}>© {year} Cody West</span>
            </div>
            <div className={styles.footerLeft}>
                <a href="https://github.com/cww2697" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <a href="https://www.linkedin.com/in/cody-w-west/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
            </div>
            <div className={styles.footerRight}>
                <button type="button" onClick={toggleTheme} className={styles.themeToggle} aria-label="Toggle dark mode">
                    <span aria-hidden="true" className={styles.switch}>
                        <span className={`${styles.knob} ${theme === 'dark' ? styles.knobOn : ''}`}>
                            <FontAwesomeIcon icon={theme === 'dark' ? faMoon as IconProp : faSun as IconProp} />
                        </span>
                    </span>
                </button>
            </div>
        </footer>
    );
};

export default Footer;


