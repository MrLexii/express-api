import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'
import { randomUUID } from 'crypto'

export const questionsTable = sqliteTable('questions',{
    id: text().primaryKey().$defaultFn(()=>randomUUID()),
    questionText: text('question_text',{length: 300}).notNull(),
    answer: text({length: 300}).notNull(),
    difficulty: text({enum: ['easy','medium','difficult']}).notNull().default('easy'),
    createdAt: integer('created_at',{mode: 'timetamp'}).notNull().$defaultFn(()=>new Date()),
    author: text().references(() => usersTable.id, {onDelete: 'cascade'}),
})

export const usersTable = sqliteTable('users', {
    id: text().primaryKey().$defaultFn(()=>randomUUID()),
    username: text({length: 50}).notNull(),
    email : text().notNull().unique(),
    password: text({length: 255}).notNull(),
    createdAt: integer('created_at',{mode: 'timetamp'}).notNull().$defaultFn(()=>new Date()),
    
})