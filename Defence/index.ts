type Virus = {
	id: string
	genome: string
	strength: number // how hard it is to destroy
	infectivity: number
}

type ImmuneMemory = {
	genome: string
	strength: number // how well immune system recognizes it
}

type FightResult = {
	destroyed: Virus[]
	memoryCells: ImmuneMemory[]
	remaining: Virus[]
}

function fightInfection(viruses: Virus[], isHealthy: boolean): FightResult {
	const destroyed: Virus[] = []
	const remaining: Virus[] = []
	const memoryCells: ImmuneMemory[] = []

	const immunePower = isHealthy ? 0.8 : 0.4

	for (const virus of viruses) {
		// immune recognition score (randomized + learned memory effect)
		const recognition = Math.random() * immunePower

		const successThreshold = virus.strength

		if (recognition > successThreshold) {
			// virus destroyed
			destroyed.push(virus)

			// immune memory created
			memoryCells.push({
				genome: virus.genome,
				strength: recognition,
			})
		} else {
			// virus survives
			remaining.push(virus)
		}
	}

	return {
		destroyed,
		memoryCells,
		remaining,
	}
}
