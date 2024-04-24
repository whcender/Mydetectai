
// import { auth } from "@/auth"
import { currentUser} from "@/lib/auth"
import { signOut } from "@/auth"

const page = async() => {
  
  //old way
    // const session = await auth()
    // {JSON.stringify(session)}

    const user = await currentUser()
    return (
    <div className="mt-36 text-white">
      <form action={async ()=>{
        "use server";

        await signOut()
      }}>
        <button>Sign Out</button>
        <p>{user?.email}</p>
        <p>{user?.name}</p>
        <p>{user?.role}</p>
      </form>
    </div>
  )
}

export default page