import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const router = useRouter()

    const searchParams = useSearchParams()
    const origin = searchParams.get('origin')

    
}

export default page