import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import { fileURLToPath } from 'url'

import config from '@/payload.config'
import styles from './frontend.module.css'
import { Button } from './components/Button'
// Import reusable UI components
import { SiteHeader } from './components/SiteHeader/SiteHeader'



export default async function HomePage() {
  return (
    <div className={styles.frontendContainer}>
      {/* SiteHeader with static menuItems prop */}
      <SiteHeader />

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h1 className="text-4xl font-bold mb-6">
                Welcome to My App
              </h1>
              <p className="text-gray-600 text-lg">
                A modern website with a mega menu navigation system.
              </p>
              <div className="mt-8">
                <Button variant="primary">Get Started</Button>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-medium mb-4">Navigation</h2>
              <p className="text-gray-600">
                The navigation above features a mega menu for deep subitem hierarchies.
              </p>
            </div>

            {/* SiteNav demo - passing menu items */}

          </div>
        </div>
      </main>
    </div>
  )
}