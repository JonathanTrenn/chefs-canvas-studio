import { defineField, defineType } from "sanity";

export const menu = defineType({
  name: "menu",
  title: "Menu",
  type: "document",
  groups: [
    { name: "essentials", title: "Essentials", default: true },
    { name: "content", title: "Content" },
  ],
  fields: [
    // ── Essentials ─────────────────────────────────────
    defineField({
      name: "title",
      title: "Menu Title",
      type: "string",
      group: "essentials",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "essentials",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "restaurant",
      title: "Restaurant",
      type: "reference",
      group: "essentials",
      to: [{ type: "restaurant" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "menuType",
      title: "Menu Type",
      type: "string",
      group: "essentials",
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
      name: "isPublished",
      title: "Published",
      type: "boolean",
      group: "essentials",
      initialValue: false,
      description: "Only published menus are visible on the site.",
    }),

    // ── Content ────────────────────────────────────────
    defineField({
      name: "introText",
      title: "Intro Text",
      type: "text",
      group: "content",
      rows: 3,
      description: "Optional. A short introduction displayed on the menu page.",
    }),
    defineField({
      name: "courseLabelOverrides",
      title: "Course Label Overrides",
      type: "array",
      group: "content",
      description: "Optional. Override the default English section labels with cuisine-appropriate terms. Example: set 'pasta' to 'Primi' for an Italian restaurant.",
      of: [
        defineField({
          name: "courseLabelOverride",
          title: "Course Label Override",
          type: "object",
          fields: [
            defineField({
              name: "courseType",
              title: "Course Type",
              type: "string",
              description: "The course type value to override.",
              options: {
                list: [
                  { title: "Appetizer", value: "appetizer" },
                  { title: "Soup", value: "soup" },
                  { title: "Salad", value: "salad" },
                  { title: "Pasta / Noodles / Rice", value: "pasta" },
                  { title: "Main Courses", value: "main" },
                  { title: "Seafood", value: "seafood" },
                  { title: "Meats", value: "meat" },
                  { title: "Vegetarian", value: "vegetarian" },
                  { title: "Sides", value: "side" },
                  { title: "Dessert", value: "dessert" },
                  { title: "Beverages", value: "beverage" },
                  { title: "Other", value: "other" },
                ],
                layout: "radio",
              },
            }),
            defineField({
              name: "label",
              title: "Display Label",
              type: "string",
              description: "The label to display on the menu page. Example: Primi",
            }),
          ],
          preview: {
            select: {
              title: "label",
              subtitle: "courseType",
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "restaurant.name",
    },
  },
});
