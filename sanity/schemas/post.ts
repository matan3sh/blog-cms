import { Rule } from "sanity"

export const post = {
  name: "post",
  title: "Post",
  type: "document",

  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule: Rule) => rule.required().error("Required"),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (rule: Rule) => rule.required().error("Required"),
    },
    {
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      validation: (rule: Rule) => rule.max(200).error("Max 200 characters"),
    },
    {
      name: "body",
      title: "Body",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          fields: [{ type: "text", name: "alt", title: "Alt" }],
        },
      ],
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "reference", to: [{ type: "tag" }] }],
    },
  ],
}
