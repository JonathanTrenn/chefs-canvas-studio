import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Dish Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug (URL Endpoint)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),

    // 🔒 REQUIRED for Phase 2 routing
    defineField({
      name: 'restaurant',
      title: 'Restaurant',
      type: 'reference',
      to: [{ type: 'restaurant' }],
      validation: (rule) => rule.required(),
    }),
defineField({
  name: 'previousDish',
  title: 'Previous Dish',
  type: 'reference',
  to: [{ type: 'dish' }],
  description: 'Previous dish in the same restaurant navigation sequence.',
  options: {
    disableNew: true,
  },
}),

defineField({
  name: 'nextDish',
  title: 'Next Dish',
  type: 'reference',
  to: [{ type: 'dish' }],
  description: 'Next dish in the same restaurant navigation sequence.',
  options: {
    disableNew: true,
  },
}),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
    }),

    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
    }),

  defineField({
  name: 'story',
  title: 'The Story',
  type: 'array',
  of: [{ type: 'block' }],
  validation: (rule) => rule.required(),
}),
defineField({
  name: 'features',
  title: 'Features',
  type: 'array',
  of: [{type: 'string'}],
}),
    // ✅ Guest quote/review snippet (correct naming going forward)
defineField({
  name: 'quoteText',
  title: 'Guest Quote (Review Snippet)',
  type: 'text',
  rows: 3,
  description: 'Optional. A short positive review/quote about this dish.',
}),

defineField({
  name: 'quoteSource',
  title: 'Quote Source (Attribution)',
  type: 'string',
  description: 'Example: — Google review, Jan 2026 / — Guest note from date-night service',
}),

// 🔒 Legacy field (hidden) — DO NOT USE going forward
defineField({
  name: 'chefQuote',
  title: 'Legacy Chef Quote (hidden)',
  type: 'text',
  hidden: true,
}),

    defineField({
      name: 'wistiaVideoId',
      title: 'Wistia Video ID',
      type: 'string',
      description: 'The ID code from your Wistia video URL (e.g. abc123xyz)',
    }),

    defineField({
      name: 'heroImage',
      title: 'Hero Image (Poster)',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
  name: "ctaTitle",
  title: "CTA Panel Title",
  type: "string",
  description: "Example: Make It a Tuscan Night",
}),

defineField({
  name: "ctaSubtitle",
  title: "CTA Panel Subtitle",
  type: "text",
  rows: 3,
  description: "Short supporting sentence under the CTA title.",
}),

defineField({
  name: "ctaNote",
  title: "CTA Panel Note (small text)",
  type: "text",
  rows: 3,
  description: "Optional note at the bottom of the CTA panel.",
}),

defineField({
  name: "ctas",
  title: "CTA Buttons",
  type: "array",
  of: [
    defineField({
      name: "cta",
      title: "CTA",
      type: "object",
      fields: [
        defineField({
          name: "label",
          title: "Button Label",
          type: "string",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "url",
          title: "Button URL",
          type: "url",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "enabled",
          title: "Enabled",
          type: "boolean",
          initialValue: true,
        }),
        defineField({
          name: "isPrimary",
          title: "Primary Button",
          type: "boolean",
          initialValue: false,
        }),
      ],
      preview: {
        select: { title: "label", subtitle: "url" },
      },
    }),
  ],
}),
    defineField({
  name: "gallery",
  title: "Photo Gallery",
  type: "array",
  of: [
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          type: "string",
          description: "Optional. Short description for accessibility.",
        }),
      ],
    }),
  ],
}),
// ── Menu Reference ─────────────────────────────────
    defineField({
      name: "menu",
      title: "Menu",
      type: "reference",
      to: [{ type: "menu" }],
      description: "The menu this dish belongs to.",
    }),

    // ── Discoverability & Structured Data ──────────────
    defineField({
      name: "courseType",
      title: "Course Type",
      type: "string",
      description: "What part of the meal is this dish?",
      options: {
        list: [
          { title: "Appetizer", value: "appetizer" },
          { title: "Soup", value: "soup" },
          { title: "Salad", value: "salad" },
          { title: "Pasta", value: "pasta" },
          { title: "Main", value: "main" },
          { title: "Seafood", value: "seafood" },
          { title: "Meat", value: "meat" },
          { title: "Vegetarian", value: "vegetarian" },
          { title: "Side", value: "side" },
          { title: "Dessert", value: "dessert" },
          { title: "Beverage", value: "beverage" },
          { title: "Other", value: "other" },
        ],
        layout: "radio",
      },
    }),

    defineField({
      name: "preparationMethod",
      title: "Preparation Method",
      type: "string",
      description: "Primary cooking technique used for this dish.",
      options: {
        list: [
          { title: "Braised", value: "braised" },
          { title: "Roasted", value: "roasted" },
          { title: "Grilled", value: "grilled" },
          { title: "Fried", value: "fried" },
          { title: "Steamed", value: "steamed" },
          { title: "Raw", value: "raw" },
          { title: "Cured", value: "cured" },
          { title: "Smoked", value: "smoked" },
          { title: "Baked", value: "baked" },
          { title: "Poached", value: "poached" },
          { title: "Sous Vide", value: "sous_vide" },
          { title: "Wood-Fired", value: "wood_fired" },
          { title: "Other", value: "other" },
        ],
        layout: "radio",
      },
    }),

    defineField({
      name: "suitableForDiet",
      title: "Suitable For Diet",
      type: "string",
      description: "Select the primary dietary category this dish qualifies for.",
      options: {
        list: [
          { title: "None", value: "none" },
          { title: "Vegetarian", value: "vegetarian" },
          { title: "Vegan", value: "vegan" },
          { title: "Gluten-Free", value: "gluten_free" },
          { title: "Dairy-Free", value: "dairy_free" },
          { title: "Nut-Free", value: "nut_free" },
          { title: "Halal", value: "halal" },
          { title: "Kosher", value: "kosher" },
          { title: "Paleo", value: "paleo" },
          { title: "Keto", value: "keto" },
        ],
        layout: "radio",
      },
    }),

    defineField({
      name: "allergenTags",
      title: "Allergen Tags",
      type: "array",
      of: [{ type: "string" }],
      description: "Select all allergens present in this dish.",
      options: {
        list: [
          { title: "Gluten", value: "gluten" },
          { title: "Dairy", value: "dairy" },
          { title: "Eggs", value: "eggs" },
          { title: "Nuts", value: "nuts" },
          { title: "Shellfish", value: "shellfish" },
          { title: "Soy", value: "soy" },
          { title: "Fish", value: "fish" },
          { title: "Sesame", value: "sesame" },
          { title: "Peanuts", value: "peanuts" },
        ],
        layout: "grid",
      },
    }),

    defineField({
      name: "ingredientsSummary",
      title: "Ingredients Summary",
      type: "text",
      rows: 3,
      description:
        "Plain prose list of key ingredients. Feeds the structured data description. Example: Heritage beef short rib, Chianti Classico, rosemary, roasted garlic, pappardelle.",
    }),

    defineField({
      name: "keywords",
      title: "Keywords / Tags",
      type: "array",
      of: [{ type: "string" }],
      description:
        "Optional search and discovery tags. Example: truffle, hand-rolled, wood-fired.",
      options: {
        layout: "tags",
      },
    }),

    defineField({
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
      rows: 2,
      description:
        "Optional. Used for search engine preview text and og:description. Keep under 160 characters.",
    }),

    // ── Video Structured Data ───────────────────────────
    defineField({
      name: "videoTitle",
      title: "Video Title",
      type: "string",
      description:
        "Title of the video for structured data. Usually the dish name. Only needed if a Wistia Video ID is entered above.",
    }),

    defineField({
      name: "videoDescription",
      title: "Video Description",
      type: "text",
      rows: 3,
      description:
        "Brief description of what happens in the video. Feeds VideoObject schema. Example: Chef Maria prepares the Chianti-Braised Short Rib from sear to plate.",
    }),

    defineField({
      name: "videoThumbnail",
      title: "Video Thumbnail",
      type: "image",
      options: { hotspot: true },
      description:
        "Thumbnail image for the video. Required by Google for valid VideoObject schema.",
    }),

    // ── Workflow ────────────────────────────────────────
    defineField({
      name: "contentStatus",
      title: "Content Status",
      type: "string",
      options: {
        list: [
          { title: "Draft", value: "draft" },
          { title: "In Review", value: "in_review" },
          { title: "Approved", value: "approved" },
          { title: "Published", value: "published" },
          { title: "Archived", value: "archived" },
        ],
        layout: "radio",
      },
      initialValue: "draft",
    }),

    defineField({
      name: "isPublished",
      title: "Published",
      type: "boolean",
      initialValue: false,
      description: "Only published dishes are visible on the site.",
    }),
  ],
})
