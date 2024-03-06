import { db } from "@/db"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/dist/types/server"
import { notFound, redirect } from "next/navigation"

interface PageProps {
    params: {
        fileid: string
    }
}

const page =  async ({params} : PageProps) => {

    const { fileid } = params

    const { getUser } = getKindeServerSession()
    const user = await getUser()

    if( !user || !user.id ) redirect(`/auth-callback?origin=dashboard/${fileid}`)

    const file = await db.file.findFirst({
        where: {
            id: fileid,
            userId: user.id
        }
    })

    if( !file ) notFound()

    return (
        <div>{fileid}</div>
    )

}

export default page