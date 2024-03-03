import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/dist/types/server'
import { redirect } from 'next/navigation'
import React, { use } from 'react'

const page = async () => {
    const { getUser } = getKindeServerSession()
    const user = await getUser()

    if( !user || !user.id ) redirect('/auth-callback?origin=dashboard')

    return <div>{user.email}</div>
}

export default page