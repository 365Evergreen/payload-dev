# Admin UI Components

This directory contains custom UI components for the Payload CMS admin area.

## Available Components

### `Header.tsx`
Custom admin header with:
- Site branding/logo
- Mobile menu toggle
- Quick links (Home, Pages, Posts)
- Mobile-responsive menu

**Features:**
- Active page highlighting (Pages/Posts sidebar items)
- Mobile menu for responsive design
- Quick navigation links

### `Nav.tsx`
Custom sidebar navigation with active state highlighting for Pages and Posts collections.

**Features:**
- Auto-highlights active collection based on current path
- Organized into Collections and Tools groups
- Support for adding more collections globally

### `EditView.tsx`
Custom document edit/create form layout.

**Features:**
- Two-column layout (fields + controls)
- Document title display
- DocumentControls toolbar
- Metadata display (last edited timestamp)
- Customizable field sidebar layout via `fieldIsSidebar`

## Wiring into Payload Config

To use these components, update `src/payload.config.ts`:

```typescript
import { Pages } from "./collections/Pages";
import { Posts } from "./collections/Posts";
import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { AdminHeader } from "@/components/admin/Header";
import { AdminNav } from "@/components/admin/Nav";
import { CustomEditView } from "@/components/admin/EditView";

export default buildConfig({
  // ... existing config
  
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    
    // Custom components
    components: {
      // Custom header (appears at top of admin)
      Header: "@/components/admin/Header",
      
      // Custom sidebar navigation
      Nav: "@/components/admin/Nav",
      
      // Custom edit/create form layout
      views: {
        edit: {
          root: {
            Component: "@/components/admin/EditView",
          },
        },
      },
    },
    
    // Optional: customize field sidebar behavior
    // fieldIsSidebar: ({ path }) => ["seo", "excerpt"].includes(path),
  },
  
  // ... rest of config
}
```

## Customizing Field Sidebar Layout

You can control which fields appear in the sidebar by modifying the `fieldIsSidebar` function in `payload.config.ts`:

```typescript
// Example: Put SEO and excerpt in sidebar
admin: {
  // ... other config
  // fieldIsSidebar: ({ path }) => ["seo", "excerpt"].includes(path),
},
```

## Adding More Collections to Nav

To add more collections to the sidebar navigation, edit `src/components/admin/Nav.tsx` and add items to the `navItems` memo:

```typescript
{
  label: "Media",
  href: "/admin/collections/media",
  active: pathname.includes("/media"),
},
```

## Notes

- The default Payload admin UI will work immediately without custom components
- These components enhance the UI with branding, navigation highlighting, and layout customization
- All components are React Server Components compatible
- The admin UI is primarily driven by collection definitions (`src/collections/Pages.ts`, `src/collections/Posts.ts`)