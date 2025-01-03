import Header from "@/app/components/Header"
import { Tag } from "@/app/utils/Interface"
import { client } from "@/sanity/lib/client"
import Link from "next/link"

async function getTags() {
  const query = `
  *[_type == "tag"] {
    name,
    slug,
    _id,
    "postCount": count(*[_type == "post" && references("tags", ^._id)])
  }
  `
  const tags = client.fetch(query)
  return tags
}

const Tags = async () => {
  const tags: Tag[] = await getTags()

  return (
    <div>
      <Header title="Tags" />
      <div>
        {tags?.length > 0 &&
          tags?.map((tag) => (
            <Link key={tag?._id} href={`/tags/${tag.slug.current}`}>
              <div className="mb-2 p-2 text-sm lowercase dark:bg-gray-950 border dark:border-gray-900 hover:text-purple-500">
                #{tag.name} ({tag?.postCount})
              </div>
            </Link>
          ))}
      </div>
    </div>
  )
}

export default Tags
