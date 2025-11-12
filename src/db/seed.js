import { db } from "./database.js"
import { questionsTable, usersTable } from "./schema.js"
import bcrypt from 'bcrypt'


async function seed() {
    try {
        console.log('Seeding database ........... ')

		await db.delete(usersTable)
        await db.delete(questionsTable)

		const hashedPassword1 = await bcrypt.hash('password', 10)
		const hashedPassword2 = await bcrypt.hash('1234', 12)
		const hashedPassword3 = await bcrypt.hash('56789', 14)

		const seedUser = [
			{
				username: 'jean',
				email: 'jean@mail.fr',
				password: hashedPassword1,
			},
			{
				username: 'miche',
				email: 'miche@mail.fr',
				password: hashedPassword2,
			},
			{
				username: 'hugo',
				email: 'hugo@mail.fr',
				password: hashedPassword3,
			}
		]

		const insertedusers = await db.insert(usersTable).values(seedUser).returning()

        const seedQuestions = [
			{
				questionText: "Kaile é l'a kapyttalle deux l'a Phrençes?",
				answer: 'Pharrys',
				difficulty: 'easy',
				author: insertedusers[0].id,
			},
			{
				questionText: "Cele ai l'eux plu grren aussaien d'u momd?",
				answer: "L'aussaien Passiphycke",
				difficulty: 'medium',
				author: insertedusers[1].id,
			},
			{
				questionText: "Ki à aiqury 'Lai Myzaiarabe'?",
				answer: 'Vyktaure Ugau',
				difficulty: 'difficult',
				author: insertedusers[2].id,
			},
		]

        await db.insert(questionsTable).values(seedQuestions)

        console.log('Database seeded successfully')

    } catch (error) {
        console.log("Error seeding database", error)
    }
}

seed()