import React from 'react';
import Link from 'next/link';
import styles from './TopNav.module.css';

const TopNav = () => {
    return (
        <div className={styles.container}>
            <nav className={styles.topnav}>
                <Link href="/"><span>About</span></Link>
                <Link href="/projects"><span>Projects</span></Link>
                <Link href="/experience"><span>Experience</span></Link>
                <Link href="/contact"><span>Contact</span></Link>
            </nav>
        </div>
    );
}

export default TopNav