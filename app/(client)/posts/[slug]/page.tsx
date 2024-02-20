import Header from "@/app/components/Header"
import { Post } from "@/app/utils/Interface"
import { client } from "@/sanity/lib/client"
import { VT323 } from "next/font/google"
import Link from "next/link"

const dateFont = VT323({ weight: "400", subsets: ["latin"] })

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
      <div className="text-center">
        <span className={`${dateFont?.className} text-purple-500`}>
          {new Date(post?.publishedAt).toDateString()}
        </span>
        <div className="mt-5">
          {post?.tags?.map((tag) => (
            <Link key={tag._id} href={`/tag/${tag.slug.current}`}>
              <span className="mr-2 p-1 rounded-sm text-sm lowercase dark:bg-gray-950 border dark:border-gray-900">
                #{tag.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PostDetails
