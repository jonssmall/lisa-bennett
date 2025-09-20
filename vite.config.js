import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars'

// Custom Handlebars helpers
const handlebarsHelpers = {
  uppercase: (str) => str.toUpperCase(),
  formatDate: (date) => new Date(date).toLocaleDateString(),
  eq: (a, b) => a === b,
  or: (a, b) => a || b
}

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/campaign/' : '/',
  plugins: [
    handlebars({
      partialDirectory: './partials',
      context: {
        // Campaign Information
        candidateName: 'Anthony Colucci',
        office: 'Toms River Ward 1 Council',
        slogan: 'Leadership You Can Trust',
        electionDate: 'November 5, 2025',
        
        // Site Information
        title: 'Anthony Colucci for Ward 1 Councilman',
        description: 'Experienced leadership, community-focused solutions for Ward 1',
        author: 'Colucci Campaign Team',
        year: new Date().getFullYear(),
        version: '1.0.0',
        environment: 'development',
        
        // Campaign Details
        experience: '15+ years of community service',
        priorities: ['Public Safety', 'Economic Development', 'Infrastructure', 'Community Engagement'],
        campaignEmail: 'info@colucciforward1.com',
        campaignPhone: '(555) 123-WARD',
        
        // Social Media
        facebook: 'ColucciForWard1',
        twitter: '@ColucciWard1',
        instagram: 'colucciforward1'
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
    sourcemap: true
  }
})
