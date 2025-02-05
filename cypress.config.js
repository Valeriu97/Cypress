const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', // for HTML reports
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      //    video: true, // Enable video recording
      //    screenshotOnRunFailure; true, // Enable screenshots on test failure
      //       chromeWebSecurity; true, // Enable Chrome Web Security
      require('cypress-mochawesome-reporter/plugin')(on); // HTML reports
    },

  },
});
