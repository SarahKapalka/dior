import Link from 'next/link';
import styles from '../styles/layout.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.disclaimer}>
        <span className={styles.highlight}>Disclaimer:</span>
        <br />
        All products and images
        displayed are of their right full owners, we have no ownership over anything besides
        the code for this website. None of the products or images and being used for financial
        purposes. Everything being used strictly for learning purposes
      </div>
      <div className={styles.explore}>
        <h3>Explore</h3>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/products">
          <a>Products</a>
        </Link>
        <Link href="/about">
          <a>About us</a>
        </Link>
        <a href="https://www.maybelline.com/" target="_blank" rel="noreferrer">Go Shop</a>
        <a href="https://makeup-api.herokuapp.com/" target="_blank" rel="noreferrer">API</a>
      </div>
      <div className={styles.contacts}>
        Customer Service Hotline:  1 (800) 929-3467
        Customer Service Email: onlinecare.my@dior.com.my
        Online Contact Form: (below)
        Hours: 9:00am – 12:30pm; 2:00pm – 5:00pm, Monday to Friday, excluding Saturday, Sunday and
        Public Holidays
      </div>
    </footer>
  );
}
