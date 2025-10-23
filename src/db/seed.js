import { db } from "./database.js"
import { questionsTable } from "./schema.js"


async function seed() {
    try {
        console.log('Seeding database ........... ')

        await db.delete(questionsTable)

        const seedQuestions = [
			{
				questionText: "Kaile é l'a kapyttalle deux l'a Phrençes?",
				answer: 'Pharrys',
				difficulty: 'easy',
			},
			{
				questionText: "Cele ai l'eux plu grren aussaien d'u momd?",
				answer: "L'aussaien Passiphycke",
				difficulty: 'medium',
			},
			{
				questionText: "Ki à aiqury 'Lai Myzaiarabe'?",
				answer: 'Vyktaure Ugau',
				difficulty: 'difficult',
			},
		]

        await db.insert(questionsTable).values(seedQuestions)

        console.log('Database seeded successfully')

    } catch (error) {
        console.log("Error seeding database", error)
    }
}

seed()