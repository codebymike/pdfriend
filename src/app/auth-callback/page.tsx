import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import { trpc } from '../_trpc/client'

const page = () => {
    const router = useRouter()

    const searchParams = useSearchParams()
    const origin = searchParams.get('origin')

    const { data, isLoading } = trpc.authCallback.useQuery(undefined, {
        // onSuccess: (data) => {
        //     router.push( origin? `/{origin}` : '/dashboard' )
        // }
    })
}

export default page