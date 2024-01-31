import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "En Croissant",
  description:
    "An open-source, cross-platform chess GUI that aims to be powerful, customizable and easy to use.",
  cleanUrls: true,
  head: [["link", { rel: "icon", href: "/logo.webp" }]],
  mpa: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Support", link: "/support" },
      { text: "Documentation", link: "/docs/" },
      { text: "Download", link: "/download" },
    ],
    search: {
      provider: "local",
    },

    sidebar: {
      "/docs": [
        {
          text: "Assets",
          items: [
            { text: "Databases", link: "/docs/assets/databases" },
            { text: "Engines", link: "/docs/assets/engines" },
          ],
        },
        {
          text: "Guides",
          items: [
            { text: "Analyze Game", link: "/docs/guides/analyze-game" },
            {
              text: "Manage repertoire",
              link: "/docs/guides/manage-repertoire",
            },
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
});
