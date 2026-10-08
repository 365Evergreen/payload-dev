import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import { fileURLToPath } from 'url'

import config from '@/payload.config'
import styles from './frontend.module.css'


export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  return (
    <div className={styles.frontendContainer}>        <picture>
      <source srcSet="https://raw.githubusercontent.com/payloadcms/payload/3.x/packages/ui/src/assets/payload-favicon.svg" />
      <Image
        alt="Paulibaby logo"
        height={50}
        src="https://raw.githubusercontent.com/payloadcms/payload/3.x/packages/ui/src/assets/payload-favicon.svg"
        width={50}
      />
    </picture>
      <div className={styles.pageTitle}>
        {!user && <h2 className={styles.pageTitle}>Welcome to your new project.</h2>}
        {user && <h2 className={styles.pageTitle}>Welcome back, {user.email}</h2>}</div>
      <div className={styles.frontendContent}>


        <button>Admin</button>


      </div></div>)
}
