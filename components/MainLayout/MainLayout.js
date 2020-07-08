import Head from "next/head";
import Link from "next/link";

import styles from "./MainLayout.module.css";

export default function MainLayout({ children, title = "My best App" }) {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
      </Head>
      <nav className={styles.navigation}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/about/company">
          <a>Compant</a>
        </Link>
      </nav>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
