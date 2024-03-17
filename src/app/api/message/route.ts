import { db } from '@/db';
import { SendMessageValidator } from '@/lib/validators/SendMessageValidator';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { OpenAIEmbeddings } from 'langchain/embeddings/openai';
import { NextRequest } from "next/server";
import { pinecone } from "@/lib/pinecone";
import { PineconeStore } from '@langchain/pinecone';

// asking a question of the PDF file
export const POST = async (req: NextRequest) => {
    const body = await req.json()

    const { getUser } = getKindeServerSession()
    const user = await getUser()

    const { id: userId } = user ?? {}

    if( !userId ) return new Response("Unauthorized", { status: 401 })

    const { fileId, message } = SendMessageValidator.parse(body)

    const file = await db.file.findFirst({
        where: {
            id: fileId,
            userId
        }
    })

    if( !file ) return new Response("Not Found", { status: 404 })

    await db.message.create({
        data: {
            text: message,
            isUserMessage: true,
            userId,
            fileId
        }
    })

    // vectorise message
    const pineconeIndex = pinecone.Index("pdffriend")

    const embeddings = new OpenAIEmbeddings({
        openAIApiKey: process.env.OPENAI_API_KEY
    })

    // find most relevant page
    const vectorStore = await PineconeStore.fromExistingIndex(embeddings, {
        pineconeIndex,
        namespace: file.id
    })

    const results = await vectorStore.similaritySearch(message, 4)

    const prevMessage = await db.message.findMany({
        where: {
            fileId
        },
        orderBy: {
            createdAt: "asc"

        },
        take: 6
    })

}