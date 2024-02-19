import Header from "@/app/components/Header"
import { client } from "@/sanity/lib/client"

async function getPost(slug: string) {
  const query = `
    *[_type == "post" && slug.current == "${slug}"] {
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
  const post = await getPost(params?.slug)

  console.log(post)

  return (
    <div>
      <Header title="Dynamic Page" />
    </div>
  )
}

export default PostDetails
