import Command from './Command'

class Monologue extends Command {
	constructor(data) {
		super('Monologue', data)
	}

	async execute(context) {
		await context.monologue.show(this.data.value)
	}

	async done(context) {
		await context.monologue.hide()
	}
}

export default Monologue
