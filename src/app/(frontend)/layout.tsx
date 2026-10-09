import React from 'react'
import './styles.css'
import './frontend.module.css'
export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <div className="header"></div>
        <main>
          {children}</main><div className="footer">Admin</div>
      </body>
    </html>
  )
}
