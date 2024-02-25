import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/dist/types/server'
import { redirect } from 'next/navigation'
import React from 'react'

const page = () => {
    const { getUser } = getKindeServerSession()
    const user = getUser()

    if( !user) redirect('/auth-callback?origin=dashboard')
}

export default page