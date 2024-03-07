import posthog from "posthog-js";

export default {
  install: (app) => {
    app.config.globalProperties.$posthog = posthog.init(
      "phc_kgEBtifs0EgWlrl4ROYEbnsQ1b7BS2W5BKLNyXe7f8z",
      {
        api_host: "https://app.posthog.com",
        persistence: "memory",
      }
    );
  },
};
