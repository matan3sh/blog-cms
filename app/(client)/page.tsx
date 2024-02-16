import Header from "@/app/components/Header"
import PostItem from "@/app/components/PostItem"
import { Post } from "@/app/utils/Interface"
import { client } from "@/sanity/lib/client"

async function getPosts() {
  const query = `
    *[_type == "post"] {
      title,
      slug,
      publishedAt,
      excerpt
    }
  `
  const data = await client.fetch(query)
  return data
}

export default async function Home() {
  const posts: Post[] = await getPosts()

  return (
    <div>
      <Header title="Articles" />
      <div>
        {posts?.length > 0 &&
          posts?.map((post) => <PostItem key={post?._id} post={post} />)}
      </div>
    </div>
  )
}
