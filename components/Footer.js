import styles from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>&copy; {new Date().getFullYear()} Zeyu Yao. All rights reserved. Meanwhile, check out my <a href="https://github.com/cytronicoder" target="_blank" rel="noreferrer">GitHub</a> and my <a href="https://www.instagram.com/cytronical/" target="_blank" rel="noreferrer">Instagram</a>.</p>
        </footer>
    );
};

export default Footer;