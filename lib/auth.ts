import { NextAuthOptions, getServerSession, User } from "next-auth";
import { redirect } from "next/navigation";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        email: {
          label: "Email",
          type: "mail",
          placeholder: "exemple@exemple.com",
        },
        password: {
          label: "mot de passe",
          type: "password",
        },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password)
          return null;
        
        // requête vers l'api pour vérifier les identifiants

        return {} as User;
      },
    }),
  ],
  pages: {
    signIn: "/pages/connexion",
  },
};

export async function loginIsRequiredServer() {
  const session = await isLogged();

  if (!session) return redirect("/");

  return session;
}

export async function isLogged() {
  return await getServerSession(authOptions);
}