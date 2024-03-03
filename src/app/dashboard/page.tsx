import { db } from '@/db'
import { redirect } from 'next/navigation'
import React, { use } from 'react'
import Dashboard from '../components/Dashboard'
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"

const page = async () => {
    const { getUser } = getKindeServerSession()
    const user = await getUser()

    if( !user || !user.id ) redirect('/auth-callback?origin=dashboard')

    const dbUser = await db.user.findFirst({
        where: {
            id: user.id
        }
    })

    if ( !dbUser ) redirect('/auth-callback?origin=dashboard')

    return <Dashboard />
}

export default page