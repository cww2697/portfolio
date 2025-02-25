'use client';

import React from 'react';
import Link from 'next/link';
import styles from './TopNav.module.css';
import { usePathname } from "next/navigation";

const TopNav = () => {
    const pathname = usePathname();

    return (
        <div className={styles.container}>
            <nav className={styles.topnav}>
                <Link href="/"><span className={pathname === '/' ? styles.active : ''}>About</span></Link>
                <Link href="/projects"><span className={pathname === '/projects' ? styles.active : ''}>Projects</span></Link>
                <Link href="/experience"><span className={pathname === '/experience' ? styles.active : ''}>Experience</span></Link>
            </nav>
        </div>
    );
};

export default TopNav