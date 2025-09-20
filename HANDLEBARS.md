# Handlebars Integration Guide

This project now uses `vite-plugin-handlebars` to enable Handlebars templating with Vite. Here's how it works:

## Setup

The Handlebars plugin is configured in `vite.config.js`:

```javascript
import handlebars from 'vite-plugin-handlebars'

export default defineConfig({
  plugins: [
    handlebars({
      partialDirectory: './partials',
      context: {
        title: 'Vite + TailwindCSS + Handlebars',
        description: 'Modern web development with hot reload, responsive design, and templating',
        author: 'ViteTail Team',
        year: new Date().getFullYear(),
        version: '1.0.0',
        environment: 'development'
      },
      helpers: handlebarsHelpers
    }),
  ],
  // ... other config
})
```

## Features

### 1. Partials
Partials are reusable HTML components stored in the `partials/` directory:

- `{{> head}}` - Includes `partials/head.html`
- `{{> header}}` - Includes `partials/header.html`
- `{{> footer}}` - Includes `partials/footer.html`

### 2. Context Variables
Variables defined in the `context` object can be used in any HTML file:

```html
<title>{{title}}</title>
<p>Built by {{author}} in {{year}}</p>
<p>{{description}}</p>
```

### 3. Custom Helpers
Custom Handlebars helpers are available:

```html
<!-- Uppercase helper -->
<h1>{{uppercase "hello world"}}</h1>

<!-- Date formatting helper -->
<p>Last updated: {{formatDate "2025-01-01"}}</p>

<!-- Conditional helpers -->
{{#if (eq environment "development")}}
  <div class="debug-info">Development Mode</div>
{{/if}}
```

## File Structure

```
project/
├── index.html              # Main page using Handlebars
├── about/
│   └── index.html          # About page with variables
├── contact/
│   └── index.html          # Contact page
├── partials/
│   ├── head.html          # Common head elements
│   ├── header.html        # Site header with navigation
│   └── footer.html        # Site footer
└── vite.config.js         # Handlebars configuration
```

## Usage Examples

### Basic Variable Usage
```html
<!doctype html>
<html lang="en">
  <head>
    {{> head}}
    <title>{{title}}</title>
  </head>
  <body>
    {{> header}}
    
    <main>
      <h1>Welcome to {{author}}</h1>
      <p>{{description}}</p>
    </main>
    
    {{> footer}}
  </body>
</html>
```

### Using Helpers
```html
<h1>{{uppercase title}}</h1>
<p>Copyright {{year}} {{author}}</p>

{{#if (eq environment "development")}}
  <div class="bg-yellow-100 p-4">
    <strong>Development Mode</strong> - Version {{version}}
  </div>
{{/if}}
```

## Benefits

1. **DRY Principle**: Reuse common HTML structures with partials
2. **Dynamic Content**: Inject variables and data into templates
3. **Conditional Rendering**: Show/hide content based on conditions
4. **Hot Reload**: Changes to partials and templates reload automatically
5. **Build Optimization**: Templates are compiled at build time

## Development

- Start the dev server: `npm run dev`
- Edit partials in `partials/` directory
- Variables are defined in `vite.config.js`
- All `.html` files automatically support Handlebars syntax

## Available Pages

- `/` - Home page with hero section and features
- `/about/` - About page demonstrating variable usage
- `/contact/` - Contact form with responsive design

All pages share the same header and footer through Handlebars partials.