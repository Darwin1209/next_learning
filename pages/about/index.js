import Router from "next/router"
import { A, B } from "../../components/Test"
import MainLayout from "../../components/MainLayout"

export default function About({ title }) {
  const linkHandler = () => {
    Router.push("/")
  }

  return (
    <MainLayout>
      <h1>About page</h1>
      <p>{title}</p>
      <A>fawfa</A>
      <B>fgwagwag</B>
      <button onClick={linkHandler}>Back to home</button>
    </MainLayout>
  )
}

About.getInitialProps = async ({ query, req }) => {
  const response = await fetch(`http://localhost:3000/api/echo`)
  const json = await response.json()

  return { title: json.title }
}
