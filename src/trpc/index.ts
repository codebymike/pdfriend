import { publicProcedure, router } from './trpc';
 
export const appRouter = router({
  test: publicProcedure.query(() => {
    return 'hello'
  })
});
 
export type AppRouter = typeof appRouter;