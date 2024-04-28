import Image from 'next/image'
import { signIn } from '@/auth/auth'

export default function Home() {
  const signInForm = async () => {
    'use server'
    await signIn('github')
  }

  return (
    <main>
      <h1>Home</h1>

      <form action={signInForm}>
        <button type="submit">Signin with GitHub</button>
      </form>
    </main>
  )
}
