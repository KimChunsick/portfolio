import Command from './Command'

class Name extends Command {
	constructor(data) {
		super('Name', data)
	}

	async execute(context) {
		context.dialog.setName(this.data.value, this.data.color)
		context.execute()
	}

	async done() {}
}

export default Name
