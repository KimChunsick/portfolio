import Command from './Command'

class Block extends Command {
	constructor(data) {
		super('Block', data)
	}

	async execute(context) {
		context.execute()
	}

	async done() {}
}

export default Block
