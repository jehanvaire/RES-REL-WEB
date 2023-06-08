import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "mail", type: "text", placeholder: "email" },
        password: { label: "motDePasse", type: "password" },
      },
      async authorize(credentials,) {
        const { mail, motDePasse } = credentials as unknown as {
            mail: string;
            motDePasse: string;
        };
        const res = await fetch("https://api.victor-gombert.fr/api/v1/connexion", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ mail, motDePasse }),
        });
        console.log(res);
        const user = await res.json();
        if (res.ok && user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) token = user as unknown as { [key: string]: any };
      console.log(token);
      
      return token;
    },
    session: async ({ session, token }) => {
      session.user = { ...token }
      return session;
    },
  },
  secret: "supersecret",
  pages: {
    signIn: "/connexion",
  },
});

export { handler as GET, handler as POST };