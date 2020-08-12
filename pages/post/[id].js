import { useRouter } from "next/router"
import MainLayout from "../../components/MainLayout"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Post({ serverPost }) {
  const router = useRouter()
  const [post, setPost] = useState(serverPost)

  useEffect(() => {
    const load = async () => {
      const response = await fetch(
        `http://localhost:4200/posts/${router.query.id}`
      )
      const json = await response.json()

      setPost(json)
    }

    if (!serverPost) {
      load()
    }
  }, [])

  if (!post) {
    return (
      <MainLayout>
        <div>Loading ...</div>
      </MainLayout>
    )
  }

  const { title, body } = post
  return (
    <MainLayout>
      <h1>Post : {title}</h1>
      <hr />
      <p>{body}</p>
      <Link href={`/posts`}>
        <a>Back to all posts</a>
      </Link>
    </MainLayout>
  )
}

Post.getInitialProps = async ({ query, req }) => {
  if (!req) {
    return { serverPost: null }
  }

  const response = await fetch(`http://localhost:4200/posts/${query.id}`)
  const json = await response.json()

  return { serverPost: json }
}
