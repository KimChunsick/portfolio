import Command from './Command'

class Guide extends Command {
	constructor(data) {
		super('Guide', data)
	}

	async execute(context) {
		await context.guide.changeState(this.data.value)
		context.execute()
	}

	async done() {}
}

export default Guide
