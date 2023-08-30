const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  pageLoadTimeout: 60000,
  watchForFileChanges: false,
  execTimeout: 10000,
  env: {
    url: "https://alphapay.netlify.app/",
  },
  viewportHeight: 960,
  viewportWidth: 1600,
  e2e: {
    testIsolation: false,
    baseUrl: "https://alphapay.netlify.app/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
