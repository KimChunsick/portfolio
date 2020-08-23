import Command from './Command'

class AddTalk extends Command {
	constructor(data) {
		super('AddTalk', data)
	}

	async execute(context) {
		await context.dialog.doTalk(this.data.value, true)
	}

	async done() {}
}

export default AddTalk
