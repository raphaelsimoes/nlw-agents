import type { FastifyPluginCallbackZod } from 'fastify-type-provider-zod'
import { desc, eq } from 'drizzle-orm'
import { db } from '../../connection.ts'
import { schema } from '../../schema/index.ts'
import { z } from 'zod/v4'

export const getRoomQuestionsRoute: FastifyPluginCallbackZod = (app) => {
  app.get('/rooms/:roomId/questions', {
    schema:{
        params: z.object({
            roomId: z.string(),
        })
    }
  }, async (request, reply) => {
    const { roomId } = request.params

    const result = await db.select(
        {
            id: schema.questions.id,
            question: schema.questions.question,
            answer: schema.questions.answer,
            createdAt: schema.questions.createdAt,
        }
    ).from(schema.questions).where(
        eq(schema.questions.roomId, roomId)
    ).orderBy(desc(schema.questions.createdAt))

    return result
  })
}
