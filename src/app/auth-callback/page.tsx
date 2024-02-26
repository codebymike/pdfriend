import { useRouter, useSearchParams } from 'next/navigation'
import { trpc } from '../_trpc/client'

const page = () => {
    const router = useRouter()

    const searchParams = useSearchParams()
    const origin = searchParams.get('origin')

    const { data } = trpc.authCallback.useQuery()

    if( data?.success ){
        router.push( origin? `/{origin}` : '/dashboard' )
    }
}

export default page