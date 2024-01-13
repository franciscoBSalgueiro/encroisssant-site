import DefaultTheme from "vitepress/theme";
import DownloadLayout from "../../components/DownloadLayout.vue";
import "./custom.css";

export default {
  extends: DefaultTheme,
  async enhanceApp({ app }) {
    app.component("download", DownloadLayout);
    if (!import.meta.env.SSR) {
      const plugin = await import("../../plugins/posthog.js");
      app.use(plugin.default);
    }
  },
};
