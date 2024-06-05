// import { SupabaseAdapter } from '@auth/supabase-adapter'
import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github'

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GitHub],
  // adapter: SupabaseAdapter({
  //   url: String(process.env.SUPABASE_URL),
  //   secret: String(process.env.SUPABASE_SERVICE_ROLE_KEY),
  // }),
})
