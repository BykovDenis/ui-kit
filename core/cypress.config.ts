import { defineConfig } from "cypress";
import viteConfig from './vite.config'

export default defineConfig({
  e2e: {
    setupNodeEvents() {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000',
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
      viteConfig,
    },
    specPattern: "cypress/component/**/*.cy.{ts,tsx}"
  },
});
