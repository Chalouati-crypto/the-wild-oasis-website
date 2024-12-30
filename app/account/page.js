import { auth } from "../_lib/auth";

async function Page() {
  const session = await auth();
  console.log("this is the enhanced session", session);

  return (
    <h2 className="text-2xl font-semibold text-accent-400 mb-7">
      Welcome, {session.user.name.split(" ").at(0)}
    </h2>
  );
}

export default Page;
