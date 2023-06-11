import { useSession } from "next-auth/react";

export default function withAuth(Component: any) {
  return function AuthenticatedComponent(props: any) {
    const { status } = useSession();

    if (status === "unauthenticated") {
      console.log("unauthenticated");
      return null;
    }

    return <Component {...props} />;
  };
}
