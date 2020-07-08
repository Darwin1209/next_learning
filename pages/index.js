import Link from "next/link";
import MainLayout from "../components/MainLayout";

export default function Index() {
  return (
    <MainLayout>
      <h1>Hello NextJS</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </MainLayout>
  );
}
