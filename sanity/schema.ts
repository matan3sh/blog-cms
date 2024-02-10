import { post } from "@/sanity/schemas/post"
import { tag } from "@/sanity/schemas/tag"
import { type SchemaTypeDefinition } from "sanity"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, tag],
}
