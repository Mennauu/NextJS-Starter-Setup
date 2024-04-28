import { SupabaseAdapter } from '@auth/supabase-adapter'
import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github'
// import Google from 'next-auth/providers/google'

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GitHub],
  adapter: SupabaseAdapter({
    url: process.env.SUPABASE_URL,
    secret: process.env.SUPABASE_SERVICE_ROLE_KEY,
  }),
  callbacks: {
    signIn: async ({ user, account, profile, email, credentials }) => {
      console.log('User:', user)
      console.log('Account:', account)
      try {
        return true
      } catch (error) {
        console.error('SignIn Error:', error)
        return false
      }
    },
  },
})
