import { signIn } from '@/src/auth'
import { auth } from '@/src/auth'

export default async function Home() {
  const session = await auth()

  const signInForm = async () => {
    'use server'
    await signIn('github')
  }

  return (
    <main>
      <h1>Home</h1>

      {session?.user?.name ? (
        <p>Welcome {session.user.name}!</p>
      ) : (
        <form action={signInForm}>
          <button type="submit">Signin with GitHub</button>
        </form>
      )}
    </main>
  )
}
