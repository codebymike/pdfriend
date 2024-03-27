import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Metadata } from 'next'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function absoluteUr(path: string) {
  if( typeof window !== "undefined" ) return path
  if( process.env.VERCEL_URL ) return `https://${process.env.VERCEL_URL}${path}`
  return `http://localhost:${process.env.POST ?? 3000}${path}`
}

export function constructMetadata({
  title = "PDFriend - Document Summariser SaaS",
  description = "PDFriend is software to help make talking to your PDF documents easy.",
  image = "/thumbnail.png",
  icons = "/favicon.ico",
  noIndex = false
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@codebymike"
    },
    icons,
    metadataBase: new URL(''),
    themeColor: '#FFF',
    ...(noIndex && {
      robots: {
        index: false,
        follow: false
      }
    })
  }
}