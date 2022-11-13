import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '../styles/layout.module.css';

export default function Header() {
  const route = useRouter();
  const page = route.pathname;

  return (
    <header className={styles.header}>
      <div className={styles.image}>
        <Link href="/">
          <Image src="/logo.png" alt="dior_logo" height={70} width={70} />
        </Link>
      </div>
      <nav>
        <Link href="/">
          <a className={page === '/' ? styles.highlight : ''}>Home</a>
        </Link>
        <Link href="/products">
          <a className={page === '/products' ? styles.highlight : ''}>Products</a>
        </Link>
        <Link href="/about">
          <a className={page === '/about' ? styles.highlight : ''}>About</a>
        </Link>
      </nav>
    </header>
  );
}
