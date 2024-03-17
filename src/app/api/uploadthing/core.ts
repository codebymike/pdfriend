import { db } from "@/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { PDFLoader } from "langchain/document_loaders/fs/pdf"
 
const f = createUploadthing();
 
export const ourFileRouter = {
  pdfUploader: f({ pdf: { maxFileSize: "4MB" } })
    .middleware(async ( { req }) => {

        const { getUser } = getKindeServerSession()
        const user = await getUser()

        if( !user || !user.id ) throw new Error("Unauthorised")

      return { userId: user.id }
    })
    .onUploadComplete(async ({ metadata, file }) => {
      const createdFile = await db.file.create({
        data: {
          key: file.key,
          name: file.name,
          userId: metadata.userId,
          url: `https://uploadthing.prod.s3.us-west-2.amazonaws.com/${file.key}`,
          uploadStatus: "PROCESSING"
        }
      })

      try {
        const response = await fetch(`https://uploadthing.prod.s3.us-west-2.amazonaws.com/${file.key}`)
        const blob = await response.blob()
        const loader = new PDFLoader(blob)

      } catch (error) {
        
      }

    }),
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;