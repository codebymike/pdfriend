import { useRouter, useSearchParams } from 'next/navigation'
import { trpc } from '../_trpc/client'

const page = () => {
    const router = useRouter()

    const searchParams = useSearchParams()
    const origin = searchParams.get('origin')

    const { data, error } = trpc.authCallback.useQuery()

    if( data?.success ){
        router.push( origin? `/${origin}` : '/dashboard' )
    }

    if( error ){
        if( error.data?.code == "UNAUTHORIZED" ) {
            router.push("/sign-in")
        }
    }
}

export default page