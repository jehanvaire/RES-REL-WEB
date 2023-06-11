import { getServerSession } from "next-auth";
import UserInformation from "./userinformation";

export default async function AppDescription() {
  const session = await getServerSession();
  console.log("Hello from app-description.js");
  return (
    <div>
      <div>
        This is the application description component (server component).
      </div>
      <UserInformation data={session?.user} />
    </div>
  );
}
