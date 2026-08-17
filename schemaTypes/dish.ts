import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  groups: [
    { name: 'essentials', title: 'Essentials', default: true },
    { name: 'content', title: 'Content' },
    { name: 'media', title: 'Media' },
    { name: 'cta', title: 'CTA' },
    { name: 'review', title: 'Review' },
    { name: 'discoverability', title: 'Discoverability' },
    { name: 'workflow', title: 'Workflow' },
  ],
  fields: [
    // ── Essentials ─────────────────────────────────────
    defineField({
      name: 'title',
      title: 'Dish Title',
      type: 'string',
      group: 'essentials',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL Endpoint)',
      type: 'slug',
      group: 'essentials',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'restaurant',
      title: 'Restaurant',
      type: 'reference',
      group: 'essentials',
      to: [{ type: 'restaurant' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'menu',
      title: 'Menu',
      type: 'reference',
      group: 'essentials',
      to: [{ type: 'menu' }],
      description: 'The menu this dish belongs to.',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      group: 'essentials',
    }),
    defineField({
      name: 'isPublished',
      title: 'Published',
      type: 'boolean',
      group: 'essentials',
      initialValue: false,
      description: 'Only published dishes are visible on the site.',
    }),
    defineField({
      name: 'previousDish',
      title: 'Previous Dish',
      type: 'reference',
      group: 'essentials',
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
      group: 'essentials',
      to: [{ type: 'dish' }],
      description: 'Next dish in the same restaurant navigation sequence.',
      options: {
        disableNew: true,
      },
    }),

    // ── Content ────────────────────────────────────────
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      group: 'content',
      rows: 3,
    }),
    defineField({
      name: 'ingredientsSummary',
      title: 'Ingredients Summary',
      type: 'text',
      group: 'content',
      rows: 3,
      description:
        'Plain prose list of key ingredients. Feeds the structured data description. Example: Heritage beef short rib, Chianti Classico, rosemary, roasted garlic, pappardelle.',
    }),
    defineField({
      name: 'story',
      title: 'The Story',
      type: 'array',
      group: 'content',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      group: 'content',
      of: [{ type: 'string' }],
    }),

    // ── Media ──────────────────────────────────────────
    defineField({
      name: 'heroImage',
      title: 'Hero Image (Poster)',
      type: 'image',
      group: 'media',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'gallery',
      title: 'Photo Gallery',
      type: 'array',
      group: 'media',
      of: [
        defineField({
          name: 'image',
          title: 'Image',
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt text',
              type: 'string',
              description: 'Optional. Short description for accessibility.',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'wistiaVideoId',
      title: 'Wistia Video ID',
      type: 'string',
      group: 'media',
      description: 'The ID code from your Wistia video URL (e.g. abc123xyz)',
    }),
    defineField({
      name: 'videoTitle',
      title: 'Video Title',
      type: 'string',
      group: 'media',
      description:
        'Title of the video for structured data. Usually the dish name. Only needed if a Wistia Video ID is entered above.',
    }),
    defineField({
      name: 'videoDescription',
      title: 'Video Description',
      type: 'text',
      group: 'media',
      rows: 3,
      description:
        'Brief description of what happens in the video. Feeds VideoObject schema. Example: Chef Maria prepares the Chianti-Braised Short Rib from sear to plate.',
    }),
    defineField({
      name: 'videoThumbnail',
      title: 'Video Thumbnail',
      type: 'image',
      group: 'media',
      options: { hotspot: true },
      description:
        'Thumbnail image for the video. Required by Google for valid VideoObject schema.',
    }),

    // ── CTA ────────────────────────────────────────────
    defineField({
      name: 'ctaTitle',
      title: 'CTA Panel Title',
      type: 'string',
      group: 'cta',
      description: 'Example: Make It a Tuscan Night',
    }),
    defineField({
      name: 'ctaSubtitle',
      title: 'CTA Panel Subtitle',
      type: 'text',
      group: 'cta',
      rows: 3,
      description: 'Short supporting sentence under the CTA title.',
    }),
    defineField({
      name: 'ctaNote',
      title: 'CTA Panel Note (small text)',
      type: 'text',
      group: 'cta',
      rows: 3,
      description: 'Optional note at the bottom of the CTA panel.',
    }),
    defineField({
      name: 'ctas',
      title: 'CTA Buttons',
      type: 'array',
      group: 'cta',
      of: [
        defineField({
          name: 'cta',
          title: 'CTA',
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Button Label',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'url',
              title: 'Button URL',
              type: 'url',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'enabled',
              title: 'Enabled',
              type: 'boolean',
              initialValue: true,
            }),
            defineField({
              name: 'isPrimary',
              title: 'Primary Button',
              type: 'boolean',
              initialValue: false,
            }),
          ],
          preview: {
            select: { title: 'label', subtitle: 'url' },
          },
        }),
      ],
    }),

    // ── Review ─────────────────────────────────────────
    defineField({
      name: 'quoteText',
      title: 'Guest Quote (Review Snippet)',
      type: 'text',
      group: 'review',
      rows: 3,
      description: 'Optional. A short positive review/quote about this dish.',
    }),
    defineField({
      name: 'quoteSource',
      title: 'Quote Source (Attribution)',
      type: 'string',
      group: 'review',
      description: 'Example: — Google review, Jan 2026 / — Guest note from date-night service',
    }),

    // ── Discoverability ────────────────────────────────
    defineField({
      name: 'courseType',
      title: 'Course Type',
      type: 'string',
      group: 'discoverability',
      description: 'What part of the meal is this dish?',
      options: {
        list: [
          { title: 'Appetizer', value: 'appetizer' },
          { title: 'Soup', value: 'soup' },
          { title: 'Salad', value: 'salad' },
          { title: 'Pasta', value: 'pasta' },
          { title: 'Main', value: 'main' },
          { title: 'Seafood', value: 'seafood' },
          { title: 'Meat', value: 'meat' },
          { title: 'Vegetarian', value: 'vegetarian' },
          { title: 'Side', value: 'side' },
          { title: 'Dessert', value: 'dessert' },
          { title: 'Beverage', value: 'beverage' },
          { title: 'Other', value: 'other' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'preparationMethod',
      title: 'Preparation Method',
      type: 'array',
      group: 'discoverability',
      of: [{ type: 'string' }],
      description: 'Cooking techniques used for this dish. Select all that apply.',
      options: {
        list: [
          { title: 'Baked', value: 'baked' },
          { title: 'Blanched', value: 'blanched' },
          { title: 'Boiled', value: 'boiled' },
          { title: 'Braised', value: 'braised' },
          { title: 'Broiled', value: 'broiled' },
          { title: 'Charred', value: 'charred' },
          { title: 'Confit', value: 'confit' },
          { title: 'Cured', value: 'cured' },
          { title: 'Fried', value: 'fried' },
          { title: 'Grilled', value: 'grilled' },
          { title: 'Pickled', value: 'pickled' },
          { title: 'Poached', value: 'poached' },
          { title: 'Raw', value: 'raw' },
          { title: 'Reduced', value: 'reduced' },
          { title: 'Roasted', value: 'roasted' },
          { title: 'Sautéed', value: 'sauteed' },
          { title: 'Seared', value: 'seared' },
          { title: 'Simmered', value: 'simmered' },
          { title: 'Smoked', value: 'smoked' },
          { title: 'Sous Vide', value: 'sous_vide' },
          { title: 'Steamed', value: 'steamed' },
          { title: 'Stewed', value: 'stewed' },
          { title: 'Wood-Fired', value: 'wood_fired' },
          { title: 'Other', value: 'other' },
        ],
        layout: 'grid',
      },
    }),
    defineField({
      name: 'suitableForDiet',
      title: 'Suitable For Diet',
      type: 'string',
      group: 'discoverability',
      description: 'Select the primary dietary category this dish qualifies for.',
      options: {
        list: [
          { title: 'None', value: 'none' },
          { title: 'Vegetarian', value: 'vegetarian' },
          { title: 'Vegan', value: 'vegan' },
          { title: 'Gluten-Free', value: 'gluten_free' },
          { title: 'Dairy-Free', value: 'dairy_free' },
          { title: 'Nut-Free', value: 'nut_free' },
          { title: 'Halal', value: 'halal' },
          { title: 'Kosher', value: 'kosher' },
          { title: 'Paleo', value: 'paleo' },
          { title: 'Keto', value: 'keto' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'allergenTags',
      title: 'Allergen Tags',
      type: 'array',
      group: 'discoverability',
      of: [{ type: 'string' }],
      description: 'Select all allergens present in this dish.',
      options: {
        list: [
          { title: 'Gluten', value: 'gluten' },
          { title: 'Dairy', value: 'dairy' },
          { title: 'Eggs', value: 'eggs' },
          { title: 'Nuts', value: 'nuts' },
          { title: 'Shellfish', value: 'shellfish' },
          { title: 'Soy', value: 'soy' },
          { title: 'Fish', value: 'fish' },
          { title: 'Sesame', value: 'sesame' },
          { title: 'Peanuts', value: 'peanuts' },
        ],
        layout: 'grid',
      },
    }),
    defineField({
      name: 'keywords',
      title: 'Keywords / Tags',
      type: 'array',
      group: 'discoverability',
      of: [{ type: 'string' }],
      description:
        'Optional search and discovery tags. Example: truffle, hand-rolled, wood-fired.',
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: "culinaryRegion",
      title: "Culinary Region(s)",
      type: "array",
      group: "discoverability",
      of: [{ type: "string" }],
      description:
        "The cultural or geographic origin(s) of this dish. Type a region and press Enter to add it; type another to add more. Examples: Tuscany, Emilia-Romagna, Oaxaca, Sichuan Province, Amhara. Leave blank for dishes without a specific regional origin.",
      options: {
        layout: "tags",
      },
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      group: 'discoverability',
      rows: 2,
      description:
        'Optional. Used for search engine preview text and og:description. Keep under 160 characters.',
    }),

    // ── Workflow ───────────────────────────────────────
    defineField({
      name: 'contentStatus',
      title: 'Content Status',
      type: 'string',
      group: 'workflow',
      options: {
        list: [
          { title: 'Draft', value: 'draft' },
          { title: 'In Review', value: 'in_review' },
          { title: 'Approved', value: 'approved' },
          { title: 'Published', value: 'published' },
          { title: 'Archived', value: 'archived' },
        ],
        layout: 'radio',
      },
      initialValue: 'draft',
    }),

    // ── Legacy (hidden) ────────────────────────────────
    defineField({
      name: 'chefQuote',
      title: 'Legacy Chef Quote (hidden)',
      type: 'text',
      hidden: true,
    }),
  ],
})
