import { post } from "@/sanity/schemas/post"
import { type SchemaTypeDefinition } from "sanity"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post],
}
