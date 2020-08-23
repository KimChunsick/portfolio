import Command from './Command'

class Talk extends Command {
	constructor(data) {
		super('Talk', data)
	}

	async execute(context) {
		await context.dialog.doTalk(this.data.value)
	}

	async done() {}
}

export default Talk
