// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = {
  debug: true,
  providers: [
    Providers.Credentials({
      // The name to display on the sign-in form (e.g., 'Sign in with...')
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "john.doe@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        // Add your custom authorization logic here
        // For example, you can check the credentials against a database
        const user = { id: 1, name: "John Doe", email: credentials.email };

        if (user) {
          // Any object returned will be saved in the user session and can be accessed
          // through the `useSession` hook or the `getSession` server-side method
          return Promise.resolve(user);
        } else {
          return Promise.resolve(null);
        }
      },
    }),
  ],
  pages: {
    signIn: "/pages/connexion",
  },
  session: {
    jwt: true,
  },
  callbacks: {
    async jwt(token, user) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session(session, token) {
      session.user.id = token.id;
      return session;
    },
  },
};

export default NextAuth(options);
