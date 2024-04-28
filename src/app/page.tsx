import { signIn } from '@/auth'
import { auth } from '@/auth'

export default async function Home() {
  const session = await auth()

  const signInForm = async () => {
    'use server'
    await signIn('github')
  }

  console.log('dikke henk')
  console.log(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY)

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
