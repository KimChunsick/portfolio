import Command from './Command'

class Jump extends Command {
	constructor(data) {
		super('Jump', data)
	}

	async execute(context) {
		context.jump(this.data.value)
		context.execute()
	}

	async done() {}
}

export default Jump
