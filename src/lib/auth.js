import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import { connectToDb } from './utils'
import { User } from '@/models/usermodel'

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log(user, account, profile)
      if (account.provider === 'github') {
        connectToDb()
        try {
          const user = await User.findOne({ email: profile.email })
          if (!user) {
            const newUser = new User({
              username: profile.name,
              email: profile.email,
              // image: profile.image?
              isAdmin: false,
            })
            await newUser.save()
          }
        } catch (error) {
          console.log(error)
          return false
        }
      }
      return true
    },
  },
})
