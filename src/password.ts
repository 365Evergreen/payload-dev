import config from './payload.config'
import { getPayload } from 'payload'

async function run() {
  const payload = await getPayload({ config })

  const users = await payload.find({
    collection: 'users',
    where: {
      email: {
        equals: 'paul@365evergreen.com',
      },
    },
  })

  if (users.docs.length === 0) {
    console.log('User not found')
    return
  }

  await payload.update({
    collection: 'users',
    id: users.docs[0].id,
    data: {
      password: 'TempPassword123!',
    },
  })

  console.log('Password reset')
}

run()