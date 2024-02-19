import Header from "@/app/components/Header"
import { Post } from "@/app/utils/Interface"
import { client } from "@/sanity/lib/client"

async function getPost(slug: string) {
  const query = `
    *[_type == "post" && slug.current == "${slug}"][0] {
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
  const post = await client.fetch(query)
  return post
}

interface PostDetailsProps {
  params: {
    slug: string
  }
}

const PostDetails = async ({ params }: PostDetailsProps) => {
  const post: Post = await getPost(params?.slug)

  return (
    <div>
      <Header title={post?.title} />
    </div>
  )
}

export default PostDetails
