"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Authentification({ children }: any) {
  const { data: session } = useSession();
  console.log("session", session);
  if (session) {
    return (
      <>
        Signed in as {session?.user?.email} <br />
        {/* <UserInformation data={session.user} /> */}
        <button onClick={() => signOut()}>Sign out</button>
        {children}
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
