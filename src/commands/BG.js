import Command from './Command'

class BG extends Command {
	constructor(data) {
		super('BG', data)
	}

	async execute(context) {
		context.bg.changeBG(this.data.value)
		context.execute()
	}

	async done() {}
}

export default BG
