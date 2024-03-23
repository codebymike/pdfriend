"use client"

import { getUserSubscriptionPlan } from "@/lib/stripe"
import { useToast } from "./ui/use-toast"
import { trpc } from "@/app/_trpc/client"
import MaxWidthWrapper from "./MaxWidthWrapper"

interface BillingFormProps {
    subscriptionPlan: Awaited<
        ReturnType<typeof getUserSubscriptionPlan>
    >
}

const BillingForm = ({ subscriptionPlan }: BillingFormProps) => {
    const { toast } = useToast()

    const { mutate: createStripeSession, isLoading } = trpc.createStripeSession.useMutation({
        onSuccess: ({ url }) => {
            if( url ) window.location.href = url
            else {
                toast({
                    title: "There was a problem with Stripe",
                    description: "Please try again in a moment",
                    variant: "destructive"
                })
            }
        }
    })

    return <MaxWidthWrapper className="max-w-5xl">
        <form 
            className="mt-12"
            onSubmit={(e) => {
            e.preventDefault()
            createStripeSession()
        }}>

        </form>
    </MaxWidthWrapper>


  return (
    <div>BillingForm</div>
  )
}

export default BillingForm