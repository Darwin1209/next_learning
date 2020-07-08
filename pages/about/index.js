import Router from "next/router";
import Head from "next/head";
import { A, B } from "../../components/Test";
import MainLayout from "../../components/MainLayout";

export default function About() {
  const linkHandler = () => {
    Router.push("/");
  };

  return (
    <MainLayout>
      <h1>About page</h1>
      <A>fawfa</A>
      <B>fgwagwag</B>
      <button onClick={linkHandler}>Back to home</button>
    </MainLayout>
  );
}
