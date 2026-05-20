import { defineType, defineField } from "sanity";

export const restaurant = defineType({
  name: "restaurant",
  title: "Restaurant",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Restaurant Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: "Example: TUSCAN • CHIANTI • RISOTTO",
    }),

    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      rows: 3,
      description: "1–2 sentences describing the restaurant. Feeds schema description.",
    }),

    defineField({
      name: "cuisineType",
      title: "Cuisine Type",
      type: "array",
      of: [{ type: "string" }],
      description: "Select all cuisine types that apply.",
      options: {
        list: [
          { title: "Italian", value: "italian" },
          { title: "French", value: "french" },
          { title: "Japanese", value: "japanese" },
          { title: "Mexican", value: "mexican" },
          { title: "Chinese", value: "chinese" },
          { title: "Indian", value: "indian" },
          { title: "Mediterranean", value: "mediterranean" },
          { title: "American", value: "american" },
          { title: "Thai", value: "thai" },
          { title: "Spanish", value: "spanish" },
          { title: "Greek", value: "greek" },
          { title: "Middle Eastern", value: "middle_eastern" },
          { title: "Korean", value: "korean" },
          { title: "Vietnamese", value: "vietnamese" },
          { title: "Peruvian", value: "peruvian" },
          { title: "Fusion", value: "fusion" },
          { title: "Ethiopian", value: "ethiopian" },
          { title: "Other", value: "other" },
        ],
        layout: "grid",
      },
    }),

    defineField({
      name: "priceRange",
      title: "Price Range",
      type: "string",
      options: {
        list: [
          { title: "$", value: "$" },
          { title: "$$", value: "$$" },
          { title: "$$$", value: "$$$" },
          { title: "$$$$", value: "$$$$" },
        ],
        layout: "radio",
      },
    }),

    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
    }),

    defineField({
      name: "primaryImage",
      title: "Primary Image",
      type: "image",
      options: { hotspot: true },
      description: "Main image for og:image and schema. Best if food or restaurant interior.",
    }),

    // ── Contact & Location ──────────────────────────────
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
      description: "Example: +1-555-000-0000",
    }),

    defineField({
      name: "publicEmail",
      title: "Public Email",
      type: "string",
    }),

    defineField({
      name: "websiteUrl",
      title: "Website URL",
      type: "url",
    }),

    defineField({
      name: "googleMapsUrl",
      title: "Google Maps URL",
      type: "url",
      description: "Full Google Maps link for directions.",
    }),

    defineField({
      name: "address",
      title: "Address",
      type: "object",
      fields: [
        defineField({ name: "street", title: "Street", type: "string" }),
        defineField({ name: "city", title: "City", type: "string" }),
        defineField({ name: "state", title: "State", type: "string" }),
        defineField({ name: "zip", title: "ZIP Code", type: "string" }),
        defineField({ name: "country", title: "Country", type: "string", initialValue: "US" }),
      ],
    }),

    // ── CTA Defaults ────────────────────────────────────
    defineField({
      name: "defaultReservationUrl",
      title: "Default Reservation URL",
      type: "url",
      description: "Used on dish pages when no dish-level CTA override exists.",
    }),

    defineField({
      name: "defaultOrderUrl",
      title: "Default Order URL",
      type: "url",
    }),

    defineField({
      name: "defaultDirectionsUrl",
      title: "Default Directions URL",
      type: "url",
    }),

    defineField({
      name: "defaultEmailSignupUrl",
      title: "Default Email Signup URL",
      type: "url",
    }),

    defineField({
      name: "defaultPhoneCta",
      title: "Default Phone CTA",
      type: "string",
      description: "Example: tel:+15550000000",
    }),

    // ── Structured Data ─────────────────────────────────
    defineField({
      name: "servesCuisine",
      title: "Serves Cuisine",
      type: "string",
      description: "Plain text for schema servesCuisine. Example: Italian, Tuscan",
    }),

    defineField({
      name: "menuUrl",
      title: "Menu URL",
      type: "url",
      description: "Canonical URL of the menu page. Feeds schema hasMenu.",
    }),

    defineField({
      name: "reservationUrl",
      title: "Reservation URL",
      type: "url",
      description: "Feeds schema reservations.",
    }),

    defineField({
      name: "sameAsLinks",
      title: "SameAs Links",
      type: "array",
      of: [{ type: "url" }],
      description: "Social profiles and listing URLs. Example: Instagram, Google Business, Yelp.",
    }),

    defineField({
      name: "schemaEnabled",
      title: "Schema Enabled",
      type: "boolean",
      initialValue: true,
      description: "Toggle Restaurant structured data output on or off.",
    }),

    // ── Branding ────────────────────────────────────────
    defineField({
      name: "brandPrimaryColor",
      title: "Brand Primary Color",
      type: "string",
      description: "Hex value. Example: #7B2D1E",
    }),

    defineField({
      name: "brandSecondaryColor",
      title: "Brand Secondary Color",
      type: "string",
      description: "Hex value.",
    }),

    defineField({
      name: "accentColor",
      title: "Accent Color",
      type: "string",
      description: "Hex value.",
    }),

    defineField({
      name: "backgroundColor",
      title: "Background Color",
      type: "string",
      description: "Hex value.",
    }),

    defineField({
      name: "textPrimaryColor",
      title: "Text Primary Color",
      type: "string",
      description: "Hex value.",
    }),

    defineField({
      name: "ctaButtonColor",
      title: "CTA Button Color",
      type: "string",
      description: "Hex value.",
    }),

    defineField({
      name: "ctaButtonTextColor",
      title: "CTA Button Text Color",
      type: "string",
      description: "Hex value.",
    }),

    defineField({
      name: "headingFont",
      title: "Heading Font",
      type: "string",
      description: "Must be from the approved font library. Example: Playfair Display",
      options: {
        list: [
          { title: "Playfair Display", value: "Playfair Display" },
          { title: "Cormorant Garamond", value: "Cormorant Garamond" },
          { title: "Libre Baskerville", value: "Libre Baskerville" },
          { title: "EB Garamond", value: "EB Garamond" },
          { title: "Lora", value: "Lora" },
          { title: "Merriweather", value: "Merriweather" },
          { title: "DM Serif Display", value: "DM Serif Display" },
          { title: "Bodoni Moda", value: "Bodoni Moda" },
          { title: "Fraunces", value: "Fraunces" },
          { title: "Montserrat", value: "Montserrat" },
          { title: "Raleway", value: "Raleway" },
          { title: "Poppins", value: "Poppins" },
        ],
        layout: "radio",
      },
    }),

    defineField({
      name: "bodyFont",
      title: "Body Font",
      type: "string",
      options: {
        list: [
          { title: "Source Sans 3", value: "Source Sans 3" },
          { title: "Lato", value: "Lato" },
          { title: "Open Sans", value: "Open Sans" },
          { title: "Manrope", value: "Manrope" },
          { title: "Work Sans", value: "Work Sans" },
          { title: "Nunito Sans", value: "Nunito Sans" },
          { title: "Inter", value: "Inter" },
          { title: "Mulish", value: "Mulish" },
        ],
        layout: "radio",
      },
    }),

    defineField({
      name: "themeStyle",
      title: "Theme Style",
      type: "string",
      options: {
        list: [
          { title: "Rustic", value: "rustic" },
          { title: "Modern", value: "modern" },
          { title: "Elegant", value: "elegant" },
          { title: "Bold", value: "bold" },
          { title: "Minimal", value: "minimal" },
          { title: "Vibrant", value: "vibrant" },
          { title: "Warm", value: "warm" },
          { title: "Dark Editorial", value: "dark_editorial" },
          { title: "Coastal", value: "coastal" },
          { title: "Handcrafted", value: "handcrafted" },
        ],
        layout: "radio",
      },
    }),

    defineField({
      name: "lightDarkPreference",
      title: "Light / Dark Preference",
      type: "string",
      options: {
        list: [
          { title: "Light", value: "light" },
          { title: "Dark", value: "dark" },
        ],
        layout: "radio",
      },
      initialValue: "light",
    }),
  ],
});
