import Head from "next/head";
import Link from "next/link";

export default function MainLayout({ children, title = "My best App" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
      </Head>
      <nav>
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
      <main>{children}</main>
    </>
  );
}
