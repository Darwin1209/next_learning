import Router from "next/router";

export default function About() {
  const linkHandler = () => {
    Router.push('/')
  };

  return (
    <main>
        <Head>
        <title>About</title>
        <meta name="keywords" content="NextJS" />
        <meta charSet="utf-8"/>
      </Head>
      <h1>About page</h1>
      <button onClick={linkHandler}>Back to home</button>
    </main>
  );
}
