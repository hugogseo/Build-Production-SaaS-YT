import { betterAuth } from "better-auth"
import { drizzleAdapter } from "better-auth/adapters/drizzle"
import { db } from "./db"

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  user: {
    additionalFields: {
      credits: {
        type: "number",
        required: false,
        defaultValue: 0,
        input: false, // Prevent users from setting this during signup
      },
      platformRole: {
        type: "string",
        required: false,
        defaultValue: "user",
        input: false, // Prevent users from setting this during signup
      },
    },
  },
})