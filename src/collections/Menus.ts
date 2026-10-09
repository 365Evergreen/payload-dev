import type { CollectionConfig } from 'payload'

export const Menus: CollectionConfig = {
  slug: 'menus',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
    },
    {
      name: 'icon',
      type: 'text',
      label: 'Icon (SVG path or emoji)',
    },
    {
      name: 'parent',
      type: 'relationship',
      relationTo: 'menus',
      required: false,
      admin: {
        position: 'sidebar',
        description: 'Leave empty for top-level menu item',
      },
    },
    {
      name: 'url',
      type: 'text',
      required: true,
      label: 'URL',
    },
    {
      name: 'children',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'url',
          type: 'text',
        },
        {
          name: 'order',
          type: 'number',
          defaultValue: 0,
        },
      ],
      label: 'Submenu Items (Mega Menu)',
      hooks: {
        beforeChange: [
          async ({ original, data, operation }) => {
            // Flatten children for mega menu display
            return data
          },
        ],
      },
    },
  ],
}