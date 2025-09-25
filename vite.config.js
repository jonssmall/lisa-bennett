import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars'
import { resolve } from 'path'

// Custom Handlebars helpers
const handlebarsHelpers = {
  uppercase: (str) => str.toUpperCase(),
  formatDate: (date) => new Date(date).toLocaleDateString(),
  eq: (a, b) => a === b,
  or: (a, b) => a || b
}

// https://vitejs.dev/config/
export default defineConfig({
  base: '/lisa-bennett/',
  assetsInclude: ['**/*.xml', '**/*.txt'],
  plugins: [
    handlebars({
      partialDirectory: './partials',
      context: (pagePath) => {
        // Base context for all pages
        const baseContext = {
          // Campaign Information
          candidateName: 'Lisa Bennett',
          office: 'Assembly - LD9',
          slogan: 'A New Direction for Ocean County',
          electionDate: 'November 5, 2025',
          
          // Site Information
          title: 'Lisa Bennett for Assembly District 9',
          description: 'Experienced leadership and progressive solutions for Ocean County. Vote Lisa Bennett for Assembly - Working Together for Ocean County.',
          author: 'Bennett Campaign Team',
          year: new Date().getFullYear(),
          version: '1.0.0',
          environment: 'development',
          
          // SEO Variables
          // siteUrl: 'https://jonssmall.github.io/campaign/',
          canonical_path: '',
          
          // Campaign Details
          experience: '20+ years of public service',
          priorities: ['Healthcare Access', 'Education Funding', 'Environmental Protection', 'Economic Development'],
          campaignEmail: 'lisabennettforassembly@gmail.com',
          
          // Social Media
          facebook: 'BennettForAssembly',
          twitter: '@BennettLD9',
          instagram: 'bennettforassembly'
        };

        if (pagePath.includes('issues/index.html')) {
          return {
            ...baseContext,
            title: 'Issues & Platform - Lisa Bennett for Assembly District 9',
            description: 'Lisa Bennett\'s platform for Assembly District 9: Healthcare Access, Education Funding, Environmental Protection, and Economic Development. Progressive solutions for Ocean County.',
            canonical_path: 'issues/'
          };
        }

        if (pagePath.includes('endorsements/index.html')) {
          return {
            ...baseContext,
            title: 'Endorsements - Lisa Bennett for Assembly District 9',
            description: 'Community leaders and organizations endorsing Lisa Bennett for New Jersey Assembly Legislative District 9. Trusted leadership for Ocean County.',
            canonical_path: 'endorsements/'
          };
        }

        // Default context for homepage
        return {
          ...baseContext,
          title: 'Lisa Bennett for New Jersey Assembly District 9 - Working Together for Ocean County',
          description: 'Vote Lisa Bennett for New Jersey Assembly Legislative District 9. Experienced leadership, progressive solutions.',
          canonical_path: ''
        };
      },
      helpers: handlebarsHelpers
    }),
  ],
  server: {
    port: 3000,
    open: true,
    host: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        endorsements: resolve(__dirname, 'endorsements/index.html'),
        issues: resolve(__dirname, 'issues/index.html'),
      }
    }
  }
})
