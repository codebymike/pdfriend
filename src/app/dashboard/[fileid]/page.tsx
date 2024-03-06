import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/dist/types/server"
import { redirect } from "next/navigation"

interface PageProps {
    params: {
        fileid: string
    }
}

const page =  async ({params} : PageProps) => {

    const { fileid } = params

    const { getUser } = getKindeServerSession()
    const user = await getUser()

    if( !user || !user.id ) redirect("/auth-callback")

    return (
        <div>{fileid}</div>
    )

}

export default page