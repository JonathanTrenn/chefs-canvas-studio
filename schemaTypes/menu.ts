import { defineField, defineType } from "sanity";

export const menu = defineType({
  name: "menu",
  title: "Menu",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Menu Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "restaurant",
      title: "Restaurant",
      type: "reference",
      to: [{ type: "restaurant" }],
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "menuType",
      title: "Menu Type",
      type: "string",
      options: {
        list: [
          { title: "Dinner", value: "dinner" },
          { title: "Lunch", value: "lunch" },
          { title: "Brunch", value: "brunch" },
          { title: "Tasting Menu", value: "tasting" },
          { title: "Seasonal", value: "seasonal" },
          { title: "Other", value: "other" },
        ],
        layout: "radio",
      },
    }),

    defineField({
      name: "introText",
      title: "Intro Text",
      type: "text",
      rows: 3,
      description: "Optional. A short introduction displayed on the menu page.",
    }),

    defineField({
      name: "isPublished",
      title: "Published",
      type: "boolean",
      initialValue: false,
      description: "Only published menus are visible on the site.",
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "restaurant.name",
    },
  },
});