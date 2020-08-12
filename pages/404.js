import MainLayout from "../components/MainLayout"
import Link from "next/link"

export default function ErrorPage() {
  return (
    <MainLayout>
      <h1>Error 404</h1>
      <p>
        <Link href="/">
          <a>Go back</a>
        </Link>{" "}
        to main page
      </p>
    </MainLayout>
  )
}
