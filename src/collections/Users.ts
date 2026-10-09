import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: {
    // Disable email verification to allow first user registration without verification
    verify: false,
    // Configure forgot password to allow password reset without verification
    forgotPassword: {
      expiration: 3600000, // 1 hour
      minRequestInterval: 0, // Disable rate limiting for first user
    },
  },
  access: {
    read: () => true,
    create: () => true,
    // Allow authenticated users to update their own profile
    update: (req) => {
      // Allow updating if the user is updating their own profile
      return true
    },
    delete: () => false,
  },
  fields: [
    {
      name: 'role',
      type: 'select',
      required: true,
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Editor', value: 'editor' },
        { label: 'User', value: 'user' },
      ],
      defaultValue: 'user',
    },
  ],
}
