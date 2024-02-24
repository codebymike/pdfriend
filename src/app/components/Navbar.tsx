import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link'
import { buttonVariants } from './ui/button'

const Navbar = () => {
  return (
    <nav className='sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
        <MaxWidthWrapper>
            <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
                <Link href='/' className="flex z-40 font-semibold">
                    <span>PDFriend.</span>
                </Link> 

                <div className="hidden items-center space-x-4 sm:flex">
                <>
                    <Link href="/pricing" className={buttonVariants({
                        variant: "ghost",
                        size: "sm"
                    })}>Pricing</Link>
                    <LoginLink></LoginLink>
                </>
                </div>
            </div>
        </MaxWidthWrapper>
    </nav>
  )
}
 
export default Navbar