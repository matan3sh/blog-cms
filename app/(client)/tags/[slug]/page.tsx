import Header from "@/app/components/Header"
import PostItem from "@/app/components/PostItem"
import { Post } from "@/app/utils/Interface"
import { client } from "@/sanity/lib/client"

async function getPostsByTag(tag: string) {
  const query = `
  *[_type == "post" && references(*[_type == "tag" && slug.current == "${tag}"]._id)]{
    title,
    slug,
    publishedAt,
    excerpt,
    tags[]-> {
      _id,
      slug,
      name
    }
  }
  `
  const posts = await client.fetch(query)
  return posts
}

export const revalidate = 60

interface TagItemProps {
  params: {
    slug: string
  }
}

const TagItem = async ({ params }: TagItemProps) => {
  const posts: Array<Post> = await getPostsByTag(params.slug)

  return (
    <div>
      <Header title={`#${params?.slug}`} tags />
      <div>
        {posts?.length > 0 &&
          posts?.map((post) => <PostItem key={post?._id} post={post} />)}
      </div>
    </div>
  )
}

export default TagItem
