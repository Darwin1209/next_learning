import Link from "next/link";
import Head from "next/head";

export default function Index() {
  return (
    <main>
      <Head>
        <title>My first Next.JS project</title>
        <meta name="keywords" content="NextJS" />
        <meta charSet="utf-8"/>
      </Head>
      <h1>Hello NextJS</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </main>
  );
}
