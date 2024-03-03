import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/dist/types/server';
import { publicProcedure, router } from './trpc';
import { TRPCError } from '@trpc/server';
import { db } from '@/db';
 
export const appRouter = router({
  authCallback: publicProcedure.query(async () => {
    const { getUser } = getKindeServerSession()
    const user = await getUser()

    if( !user ) throw new TRPCError({ code: 'UNAUTHORIZED' })

    const dbUser = await db.user.findFirst({
      where: {
        id: user.id
      }
    })

    if(!dbUser) {
      // create user
      await db.user.create({
        data: {
          id: user.id,
          email: user.email ?? ""
        }
      })
    }

    return { success: true }
  })
});
 
export type AppRouter = typeof appRouter;