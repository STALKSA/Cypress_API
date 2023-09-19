const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "4b2x5x",
  e2e: {
    baseUrl: "http://qamid.tmweb.ru",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
