# My Awesome Dashboard - Design System and Product

This project includes a simple Next.js setup to generate a static website with the dashboard template.

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Design System (Storybook)

```bash
npm run storybook
```

### 3. Run Development Server with Product

```bash
npm run product
```

Open [http://localhost:3000](http://localhost:3000) to see the dashboard.

## Project Structure

### Next.js Files

- `pages/index.tsx` - Main dashboard page with the same content as `dashboard.stories.tsx`
- `pages/_app.tsx` - Next.js app wrapper that imports all global CSS (tokens)
- `next.config.js` - Next.js configuration for static export
- `tsconfig.next.json` - TypeScript configuration for Next.js

### Components & Styles

The dashboard uses all the existing components from `src/components/`:
- Header with Logo, Menubar, and Avatar
- Layout wrapper
- Tabs for navigation
- Table for data display
- Badge for status indicators

All components use CSS modules (`*.module.css`) and share design tokens from `src/tokens/`:
- `colors.css` - Color system
- `typography.css` - Typography tokens
- `space.css` - Spacing system
- `radii.css` - Border radius tokens
- `components.css` - Component-specific CSS variables

### Data

The dashboard loads data from JSON files in the `data/` directory:
- `list-of-pages.data.json` - Table data
- `menubar.data.json` - Menu structure