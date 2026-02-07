import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "En Croissant",
  description:
    "An open-source, cross-platform chess GUI that aims to be powerful, customizable and easy to use.",
  cleanUrls: true,
  head: [
    ["link", { rel: "icon", href: "/logo.webp" }],
    ["meta", { property: "og:url", content: "https://encroissant.org" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:title", content: "En Croissant" }],
    [
      "meta",
      {
        property: "og:description",
        content:
          "An open-source, cross-platform chess GUI that aims to be powerful, customizable and easy to use.",
      },
    ],
    [
      "meta",
      { property: "og:image", content: "https://encroissant.org/showcase.webp" },
    ],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    [
      "meta",
      { name: "twitter:image", content: "https://encroissant.org/showcase.webp" },
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Support", link: "/support" },
      { text: "Documentation", link: "/docs/" },
      { text: "Download", link: "/download" },
    ],
    search: {
      provider: "algolia",
      options: {
        apiKey: "9b321cba2b8ba9a317bbdbf11e48caaa",
        appId: "FCX13G6J5L",
        indexName: "encroissant",
        insights: true,
      },
    },

    sidebar: {
      "/docs": [
        {
          text: "Introduction",
          items: [
            { text: "What is En Croissant?", link: "/docs/" },
            { text: "Getting Started", link: "/docs/getting-started" },
          ],
        },
        {
          text: "Guides",
          items: [
            { text: "Analyze Game", link: "/docs/guides/analyze-game" },
            { text: "Manage Repertoire", link: "/docs/guides/manage-repertoire" },
            { text: "Configure Engines", link: "/docs/guides/configure-engines" },
          ],
        },
        {
          text: "Assets",
          items: [
            { text: "Databases", link: "/docs/assets/databases" },
            { text: "Engines", link: "/docs/assets/engines" },
          ],
        },
        {
          text: "Reference",
          items: [
            {
              text: "Database Format",
              link: "/docs/reference/database-format",
            },
          ],
        },
      ],
    },
    logo: "/logo.webp",
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/franciscoBSalgueiro/en-croissant",
      },
      { icon: "discord", link: "https://discord.gg/tdYzfDbSSW" },
    ],
  },
  sitemap: {
    hostname: "https://encroissant.org",
  }
});
