
import { library, config } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Footer.module.css";
import '@fortawesome/fontawesome-svg-core/styles.css';

library.add(faGithub, faLinkedin);
config.autoAddCss = false;

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <a href="https://github.com/cww2697" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/cody-w-west/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
        </footer>
    );
};

export default Footer;


