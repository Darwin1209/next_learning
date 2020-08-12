import { useState, useEffect } from "react"
import MainLayout from "../components/MainLayout"
import Link from "next/link"

export default function Posts({ serverPosts }) {
  const [posts, setPosts] = useState(serverPosts)

  useEffect(() => {
    const load = async () => {
      const response = await fetch(
        `http://localhost:4200/posts/`
      )
      const json = await response.json()

      setPosts(json)
    }

    if (!serverPosts) {
      load()
    }
  }, [])

  if (!posts) {
    return (
      <MainLayout>
        <div>Loading ...</div>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/post/[id]`} as={`/post/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </MainLayout>
  )
}

Posts.getInitialProps = async ({req}) => {
  if (!req) {
    return { serverPosts: null }
  }

  const response = await fetch("http://localhost:4200/posts")
  const json = await response.json()

  return { serverPosts: json }
}
